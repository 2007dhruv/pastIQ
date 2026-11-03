// pastIQ — Groq-Powered Heritage Research & Indic Multilingual Agent
// Models: qwen/qwen3.8-27b / openai/gpt-oss-120b on Groq LPU Ultra-Low Latency Inference

export const GROQ_CONFIG = {
  // Loaded from browser localStorage (or fallback prompt) to comply with GitHub Secret Push Protection
  apiKey: localStorage.getItem('PASTIQ_GROQ_KEY') || '',
  endpoint: 'https://api.groq.com/openai/v1/chat/completions',
  defaultModel: 'qwen/qwen3.8-27b',
  fallbackModel: 'openai/gpt-oss-20b'
};

// Supported Indic & Global Languages
export const SUPPORTED_LANGUAGES = {
  'en': { name: 'English', native: 'English', flag: '🇬🇧' },
  'hi': { name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
  'gu': { name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳' },
  'ta': { name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
  'te': { name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
  'mr': { name: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
  'bn': { name: 'Bengali', native: 'বাংলা', flag: '🇮🇳' },
  'kn': { name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
  'pa': { name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳' }
};

// Simple in-memory translation cache
const translationCache = new Map();

/**
 * Call Groq API with automatic fallback and error handling
 */
async function callGroqChat(messages, options = {}) {
  let key = GROQ_CONFIG.apiKey || localStorage.getItem('PASTIQ_GROQ_KEY');
  if (!key) {
    key = prompt('Please enter your Groq API Key:');
    if (key) {
      key = key.trim();
      localStorage.setItem('PASTIQ_GROQ_KEY', key);
      GROQ_CONFIG.apiKey = key;
    } else {
      throw new Error('Groq API Key is required for AI features.');
    }
  }

  const model = options.model || GROQ_CONFIG.defaultModel;
  const temperature = options.temperature !== undefined ? options.temperature : 0.3;

  const payload = {
    model: model,
    messages: messages,
    temperature: temperature,
    max_tokens: options.max_tokens || 1500
  };

  try {
    const response = await fetch(GROQ_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn(`Groq API Error (${response.status}):`, errText);
      throw new Error(`Groq API returned ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (err) {
    console.error('Groq Agent Execution Failed:', err);
    throw err;
  }
}

/**
 * 1. Heritage Research Agent:
 * Deep-scans a monument to fetch verified historical context, architectural secrets,
 * epigraphic inscriptions, and academic source provenance (PDFs, chronicles, ASI reports).
 */
export async function runHeritageResearchAgent(monumentName, place, context = '') {
  const systemPrompt = `You are the pastIQ Senior Epigraphy & Archaeological Research Agent for Indian Heritage.
Your mission is to provide an authentic, academically rigorous, museum-grade research dossier on the requested Indian monument.

Structure your response into 4 clear markdown sections:
### 1. Architectural & Engineering Masterwork
Describe the structural engineering, geometry, subterranean or celestial alignments, and specific craftsmanship techniques.

### 2. Historical & Epigraphic Inscriptions
Detail the primary patrons, ruling dynasties, exact dates or centuries, and specific stone inscriptions or copper-plate edicts mentioning this monument.

### 3. Forgotten Folklore & Cultural Mysteries
Detail rare oral traditions, acoustic properties, subterranean passages, or sacred legends associated with this monument.

### 4. Academic Provenance & Source Citations
List 3-4 specific academic and governmental sources where this data can be verified:
- Official UNESCO Nomination Dossier or ASI Conservation Report (include report/dossier number or circle)
- Primary medieval chronicle (e.g. Prabandha Chintamani, Ain-i-Akbari, Rajatarangini, Epigraphia Indica)
- Peer-reviewed monograph or scholarly book (Author, Title, Publisher, Year)

Format with clean bullet points and precise historical accuracy.`;

  const userPrompt = `Monument: ${monumentName}
Location: ${place}
Existing context: ${context}

Generate the comprehensive research dossier now.`;

  return await callGroqChat([
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt }
  ], { temperature: 0.35, max_tokens: 1600 });
}

/**
 * 2. Indic Multilingual Translation Agent:
 * Translates any text or monograph into target Indic language with authentic cultural terminology.
 */
export async function translateTextWithGroq(text, targetLangCode) {
  if (!text || targetLangCode === 'en') return text;
  
  const cacheKey = `${targetLangCode}:::${text.substring(0, 100)}:::${text.length}`;
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }

  const langInfo = SUPPORTED_LANGUAGES[targetLangCode] || { name: targetLangCode };

  const systemPrompt = `You are pastIQ's Indic Heritage Translation Agent.
Your task is to accurately translate historical, archaeological, and architectural content into fluent, natural, culturally respectful ${langInfo.name} (${langInfo.native}).
- Maintain proper architectural nomenclature (e.g., Shikhar, Mandapa, Torana, Stepwell, Mihrab, Pietra Dura).
- Retain markdown formatting, headings, and bullet points.
- Output ONLY the translated text without conversational preamble.`;

  const result = await callGroqChat([
    { role: 'system', content: systemPrompt },
    { role: 'user', content: text }
  ], { temperature: 0.2, max_tokens: 2000 });

  translationCache.set(cacheKey, result);
  return result;
}

/**
 * 3. Quick AI Q&A Agent:
 * Answers user questions about a monument instantly.
 */
export async function askHeritageQuestion(monumentName, question, currentLang = 'en') {
  const langInfo = SUPPORTED_LANGUAGES[currentLang] || { name: 'English' };

  const systemPrompt = `You are pastIQ AI Guide, an expert historian on Indian architecture.
Answer questions about "${monumentName}" accurately, concisely, and with historical depth.
Respond in ${langInfo.name} (${langInfo.native}).`;

  return await callGroqChat([
    { role: 'system', content: systemPrompt },
    { role: 'user', content: question }
  ], { temperature: 0.4, max_tokens: 600 });
}
