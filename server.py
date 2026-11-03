import http.server
import socketserver
import os
import sys
import mimetypes

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

# Explicitly ensure .js is served as application/javascript (Windows defaults to text/plain!)
mimetypes.init()
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('application/json', '.json')
mimetypes.add_type('model/gltf-binary', '.glb')
mimetypes.add_type('image/svg+xml', '.svg')

class HeritageHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Serve home.html as the primary landing page on root /
        if self.path == '/' or self.path == '':
            self.path = '/home.html'
        return super().do_GET()

    def guess_type(self, path):
        if path.endswith('.js'):
            return 'application/javascript'
        if path.endswith('.css'):
            return 'text/css'
        if path.endswith('.json'):
            return 'application/json'
        if path.endswith('.svg'):
            return 'image/svg+xml'
        return super().guess_type(path)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        super().end_headers()

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), HeritageHTTPHandler) as httpd:
        print(f"[*] pastIQ Server running at http://localhost:{PORT}")
        sys.stdout.flush()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
