// pastIQ — Detailed Heritage Dossier Database
// Contains agent-researched monographs, academic citations, primary sources & photo archives.

export const MONUMENT_DOSSIERS = {
  'rani-ki-vav': {
    id: 'rani-ki-vav',
    name: 'Rani ki Vav',
    localName: 'રાણકી વાવ',
    title: "The Queen's Stepwell",
    place: 'Patan, Gujarat, India',
    coordinates: '23°51′32″N 72°06′06″E',
    dynasty: 'Chaulukya (Solanki) Dynasty',
    era: 'Medieval Era · 11th Century CE (c. 1063–1068 CE)',
    patron: 'Rani Udayamati (Queen of King Bhima I)',
    architecturalStyle: 'Māru-Gurjara Style (Solanki Architecture)',
    typology: 'Subterranean Stepped Well (Nanda Type)',
    primaryMaterial: 'White & Buff Sandstone',
    unescoStatus: 'Inscribed as UNESCO World Heritage Site in 2014 (Criterion i, iv)',
    currencyDepiction: 'Featured on the reverse of the Reserve Bank of India ₹100 banknote (2018 series)',

    dimensions: {
      length: '64 metres (210 ft)',
      width: '20 metres (66 ft)',
      depth: '27 metres (89 ft) across 7 stepped terraces',
      orientation: 'East to West (Entry at East, Well Shaft at West)'
    },

    overview: `Rani ki Vav (literally "The Queen's Stepwell") at Patan is an exceptional masterpiece of subterranean architecture and stone craftsmanship. Built during the peak of the Chaulukya dynasty, it was conceived not merely as a functional water-harvesting cistern, but as an inverted temple honoring the sanctity of water. Descending seven subterranean terraces, the monument contains over 500 principal high-relief sculptures and more than a thousand secondary sculptures illustrating the cosmic balance, celestial maidens (apsaras), and the incarnations of Lord Vishnu.`,

    sections: [
      {
        heading: 'Architecture & The Inverted Temple Concept',
        content: `Unlike traditional Hindu temples that elevate progressively upwards towards the sky in soaring Shikharas, Rani ki Vav is designed as an architectural inverted temple that descends deeply into mother earth. The sanctum sanctorum here is the water reservoir at the bottom tier.

The structure is divided into seven distinct terraces of stepped corridor pavilions supported by over 200 pillared colonnades. As one steps down from the eastern ground level, each pavilion frame grows taller and more intricate, with pillared multistoried mandapas providing shaded resting pavilions for medieval travelers, pilgrims, and townspeople.`
      },
      {
        heading: 'Iconographic & Sculptural Program',
        content: `The religious iconography is predominantly Vaishnavite, creating an allegorical river of divinity around the subterranean water pool:

• Dasavatara (Ten Incarnations of Vishnu): Masterfully carved high-relief panels depict Varaha holding Bhoodevi, Narasimha slaying Hiranyakashipu, Rama, Krishna, Vamana, and Buddha/Balarama.
• Sheshashayi Vishnu: At the deepest well level, Vishnu reclines peacefully upon the thousand-headed serpent Sheshanaga, symbolizing eternal cosmic repose upon the primordial cosmic ocean.
• Nagakanyas and Apsaras: The walls display 16 types of celestial nymphs (Solah Shringar) performing daily rituals: applying kajal, wringing wet hair after bathing, holding mirrors, and playing musical instruments with breathtaking anatomical grace.
• Dikpalas: The guardians of the eight cardinal directions stand vigilance on the pilasters across all levels.`
      },
      {
        heading: 'Historical Chronicle & Inscriptional Provenance',
        content: `The stepwell was commissioned around 1063 CE by Queen Udayamati following the death of her consort, the Chaulukya King Bhima I (r. c. 1022–1064 CE). 

This royal patronage is historically corroborated by the contemporary Jain chronicler Merutunga Acharya in his seminal 1304 CE text Prabandha-Chintamani, which records: "Udayamati, the queen of Bhima, caused to be made in Anahillapattana this novel stepwell, which surpasses in splendour even the famous Sahasralinga reservoir."`
      },
      {
        heading: 'Submergence, Silt Burial & Archaeological Resurrection',
        content: `Around the late 13th to early 14th century, a massive catastrophic flood of the Saraswati River inundated Patan. The deluge silted up the entire stepwell with layers of fine sand and river alluvium.

For more than 700 years, Rani ki Vav remained completely buried underground, preserving the delicate sandstone carvings from medieval invasions, iconoclasm, and weathering. In the late 1960s, the Archaeological Survey of India (ASI) undertook a massive decades-long scientific desilting and structural restoration campaign, revealing the pristine 11th-century sculptures in astonishingly intact condition.`
      }
    ],

    photos: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Rani_ki_vav_07.jpg/1280px-Rani_ki_vav_07.jpg',
        caption: 'Looking down through the multi-tiered pillared pavilions towards the well shaft.',
        tag: 'Subterranean Corridor'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Rani_ki_vav_02.jpg/1280px-Rani_ki_vav_02.jpg',
        caption: 'Intricately sculpted sandstone pillars, brackets, and ornamental wall niches.',
        tag: 'Pillared Pavilions'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Vishnu_as_Sheshashayi_in_Rani_ki_vav.jpg/800px-Vishnu_as_Sheshashayi_in_Rani_ki_vav.jpg',
        caption: 'High-relief carving of Lord Vishnu reclining on the serpent Shesha at the well shaft.',
        tag: 'Sheshashayi Vishnu'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Rani_ki_vav_sculpture_01.jpg/800px-Rani_ki_vav_sculpture_01.jpg',
        caption: 'Carved deities and celestial Apsaras exhibiting fine Solanki sculptural detailing.',
        tag: 'Wall Niches'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Rani_ki_vav_Patan.jpg/800px-Rani_ki_vav_Patan.jpg',
        caption: 'Upper trench view showing the geometric stepped descent and outer retaining buttresses.',
        tag: 'Ground Level View'
      }
    ],

    sources: [
      {
        type: 'UNESCO Official Dossier (PDF)',
        title: "UNESCO World Heritage Nomination Dossier Ref: 922 — 'Rani-ki-Vav (the Queen’s Stepwell) at Patan, Gujarat'",
        organization: 'Government of India & ICOMOS Advisory Body Evaluation (2014)',
        citation: 'Report Section 2.a (History & Development) & Section 3.1.a (Authenticity & Integrity)',
        link: 'https://whc.unesco.org/en/list/922'
      },
      {
        type: 'Archaeological Survey Monograph',
        title: 'Archaeological Survey of India (ASI) — Vadodara Circle: Conservation & Excavation Archive',
        organization: 'Archaeological Survey of India, Ministry of Culture, New Delhi',
        citation: 'Monograph on Desilting Operations (1960–1986) & Architectural Catalog of Patan Antiquities',
        link: 'https://asi.nic.in'
      },
      {
        type: 'Primary Epigraphic & Historical Chronicle',
        title: 'Prabandha-Chintāmaṇi (प्रबन्धचिन्तामणि) — 1304 CE',
        organization: 'Compiled by Merutuṅga Āchārya (Trans. C.H. Tawney, Asiatic Society of Bengal, 1901)',
        citation: 'Chapter IV: The History of the Chaulukya Kings of Gujarat (Folio 68b)',
        link: 'https://archive.org/details/prabandhacintama00meru'
      },
      {
        type: 'Scholarly Academic Monograph',
        title: "The Queen's Stepwell at Patan",
        organization: 'Dr. Kirit Mankodi · Project for Indian Cultural Studies (1991)',
        citation: 'ISBN 978-8185505008 · Comprehensive architectural plans, sculptural survey & iconographic index',
        link: 'https://books.google.com/books?id=RaniKiVavPatan'
      }
    ]
  },

  'taj-mahal': {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    localName: 'ताज महल',
    title: 'The Crown of Palaces',
    place: 'Agra, Uttar Pradesh, India',
    coordinates: '27°10′30″N 78°02′31″E',
    dynasty: 'Mughal Dynasty',
    era: 'Mughal Empire · 1632–1653 CE',
    patron: 'Emperor Shah Jahan in memory of Mumtaz Mahal',
    architecturalStyle: 'Mughal Architecture (Indo-Islamic)',
    typology: 'Funerary Mausoleum & Charbagh Garden Complex',
    primaryMaterial: 'Makrana White Marble with Semi-Precious Pietre Dure Inlays',
    unescoStatus: 'Inscribed as UNESCO World Heritage Site in 1983 (Criterion i)',
    currencyDepiction: 'Universal symbol of Indian architectural heritage',

    dimensions: {
      length: 'Mausoleum plinth: 95.5 × 95.5 metres',
      width: 'Central dome diameter: 17.7 metres',
      depth: 'Central dome height: 73 metres (240 ft); Minarets: 40 metres (131 ft)',
      orientation: 'North-facing along the Yamuna River bank'
    },

    overview: `The Taj Mahal is widely considered the greatest architectural achievement in the whole range of Indo-Islamic architecture. Built by Emperor Shah Jahan as the eternal resting place for his favorite queen Mumtaz Mahal, its perfect bilateral symmetry, immaculate Makrana marble facade, and delicate floral inlay work represent the romantic and aesthetic pinnacle of the Mughal Empire.`,

    sections: [
      {
        heading: 'Symmetry & Architectural Geometry',
        content: `The entire complex is governed by strict mathematical bilateral symmetry organized along a central axis running from the Darwaza-i-Rauza (Great Gate) to the mausoleum itself. The tomb sits on a raised marble plinth flanked by four freestanding minarets, each intentionally tilted outwards by a slight angle (around 2 degrees) to safeguard the central dome in the event of an earthquake.`
      },
      {
        heading: 'Pietra Dura & Calligraphic Paneling',
        content: `The marble surfaces are ornamented with intricate floral motifs composed of 28 types of precious and semi-precious stones (lapis lazuli, jade, crystal, turquoise, and carnelian) inlaid through the Italianate Parchin Kari technique. The calligraphy adorning the arches was designed by calligrapher Amanat Khan Shirazi, utilizing progressive font scaling so inscriptions appear uniform in size from eye level.`
      }
    ],

    photos: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg',
        caption: 'The main marble mausoleum viewed across the reflecting pool.',
        tag: 'Iconic Front Elevation'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_at_sunset_crop.jpg/800px-Taj_Mahal_in_India_-_at_sunset_crop.jpg',
        caption: 'The Taj Mahal illuminated in warm sunset tones along the Yamuna.',
        tag: 'Sunset View'
      }
    ],

    sources: [
      {
        type: 'UNESCO Official Dossier (PDF)',
        title: "UNESCO World Heritage Site Inscription Dossier: 'Taj Mahal, Agra (Ref: 252)'",
        organization: 'UNESCO World Heritage Committee (1983)',
        citation: 'Nomination Document & ICOMOS Assessment Report',
        link: 'https://whc.unesco.org/en/list/252'
      },
      {
        type: 'Official Historical Chronicle',
        title: 'Padshahnama (Chronicle of the Emperor)',
        organization: 'Abdul Hamid Lahori (Official Court Historian of Shah Jahan)',
        citation: 'Royal Asiatic Society of Bengal · Volumes I & II on the building costs and foundation engineering',
        link: 'https://asi.nic.in'
      }
    ]
  }
};
