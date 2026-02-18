export type Ritual = {
  id: string
  name: {
    en: string
    kn: string
    hi: string
  }
  description: {
    en: string
    kn: string
    hi: string
  }
  duration: number
  category: 'homa' | 'pooja' | 'special'
  deity: string
  occasions: string[]
  pricing: {
    basic: number
    premium: number
    deluxe: number
  }
  images: string[]
  requirements: string[]
  benefits: string[]
}

export const rituals: Ritual[] = [
  {
    id: 'ashlesha-bali-pooja',
    name: {
      en: 'Ashlesha Bali Pooja',
      kn: 'ಆಶ್ಲೇಷ ಬಲಿ ಪೂಜೆ',
      hi: 'आश्लेष बलि पूजा'
    },
    description: {
      en: 'Naga worship and Ashlesha Bali ritual for serpent deities—peace, protection and remedy for Naga dosha.',
      kn: 'ನಾಗ ದೇವತೆಗಳಿಗೆ ಆಶ್ಲೇಷ ಬಲಿ ಪೂಜೆ—ಶಾಂತಿ, ರಕ್ಷಣೆ ಮತ್ತು ನಾಗ ದೋಷ ಶಮನ.',
      hi: 'नाग देवताओं की आश्लेष बलि पूजा—शांति, रक्षा और नाग दोष शमन।'
    },
    duration: 120,
    category: 'pooja',
    deity: 'naga',
    occasions: ['remedy', 'naga-dosha', 'general'],
    pricing: {
      basic: 10000,
      premium: 15000,
      deluxe: 22000
    },
    images: ['/images/rituals/ashleshabali-pooja.png'],
    requirements: ['Clean puja space', 'Naga idol or rangoli', 'Flowers, milk and offerings'],
    benefits: ['Naga dosha remedy', 'Peace and protection', 'Blessings of serpent deities']
  },
  {
    id: 'griha-pravesh',
    name: {
      en: 'Griha Pravesh',
      kn: 'ಗೃಹಪ್ರವೇಶ ಪೂಜೆ',
      hi: 'गृह प्रवेश पूजा'
    },
    description: {
      en: 'House-warming ceremony to invoke blessings, Vastu harmony and protection for the new home.',
      kn: 'ಹೊಸ ಮನೆಯ ಶುಭಾರಂಭ, ವಾಸ್ತು ಸಮ್ಮಿಲನ ಮತ್ತು ರಕ್ಷಣೆಗೆ ನಡೆಯುವ ಗೃಹಪ್ರವೇಶ ಪೂಜೆ.',
      hi: 'नए घर के शुभारंभ, वास्तु सामंजस्य और रक्षा के लिए की जाने वाली गृह प्रवेश पूजा।'
    },
    duration: 180,
    category: 'special',
    deity: 'griha-devata',
    occasions: ['new-beginnings', 'home', 'vastu'],
    pricing: {
      basic: 25000,
      premium: 60000,
      deluxe: 100000
    },
    images: ['/images/rituals/griha-pravesh.png'],
    requirements: ['New home ready for pooja', 'Kalasha and coconut', 'Navagraha setup', 'Vastu sankalpa items'],
    benefits: ['Blessed start for new home', 'Vastu alignment', 'Protection for residents']
  },
  {
    id: 'vastu-shanti',
    name: {
      en: 'Vastu Shanti',
      kn: 'ವಾಸ್ತು ಶಾಂತಿ',
      hi: 'वास्तु शांति'
    },
    description: {
      en: 'Vastu Shanti pooja to pacify the site and building, and to invite harmony and prosperity.',
      kn: 'ಭೂಮಿ ಮತ್ತು ಕಟ್ಟಡ ಶಾಂತಿಗಾಗಿ ವಾಸ್ತು ಶಾಂತಿ ಪೂಜೆ—ಸಾಮರಸ್ಯ ಮತ್ತು ಐಶ್ವರ್ಯಕ್ಕಾಗಿ.',
      hi: 'भूमि और भवन की शांति के लिए वास्तु शांति पूजा—सामंजस्य और समृद्धि के लिए।'
    },
    duration: 150,
    category: 'special',
    deity: 'vastu-devata',
    occasions: ['vastu', 'new-beginnings', 'home'],
    pricing: {
      basic: 20000,
      premium: 45000,
      deluxe: 80000
    },
    images: ['/images/rituals/vastu-shanti.png'],
    requirements: ['Land or building to be pacified', 'Kalasha', 'Navagraha and Vastu items', 'Grains and flowers'],
    benefits: ['Site and structure pacified', 'Vastu harmony', 'Prosperity and peace']
  },
  {
    id: 'satyanarayana-pooja',
    name: {
      en: 'Satyanarayana Pooja',
      kn: 'ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ',
      hi: 'सत्यनारायण पूजा'
    },
    description: {
      en: 'Auspicious pooja to Lord Vishnu for family harmony, prosperity, and gratitude.',
      kn: 'ಕುಟುಂಬದ ಸಾಮರಸ್ಯ, ಐಶ್ವರ್ಯ ಮತ್ತು ಕೃತಜ್ಞತೆಯಿಗಾಗಿ ಶ್ರೀ ಮಹಾ ವಿಷ್ಣುವಿನ ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ.',
      hi: 'परिवारिक सौहार्द, समृद्धि और कृतज्ञता के लिए भगवान विष्णु को समर्पित सत्यनारायण पूजा।'
    },
    duration: 150,
    category: 'pooja',
    deity: 'vishnu',
    occasions: ['general', 'thanksgiving', 'health'],
    pricing: {
      basic: 15000,
      premium: 30000,
      deluxe: 50000
    },
    images: ['/images/rituals/satyanarayana-pooja.png'],
    requirements: ['Pooja mantap', 'Panchamrita items', 'Tulsi leaves'],
    benefits: ['Family harmony', 'Prosperity', 'Fulfilment of wishes']
  },
  {
    id: 'nama-karana',
    name: {
      en: 'Nama Karana (Naming Ceremony)',
      kn: 'ನಾಮಕರಣ',
      hi: 'नामकरण संस्कार'
    },
    description: {
      en: 'Sacred naming ceremony for the child with Vedic mantras and family blessings.',
      kn: 'ವೇದ ಮಂತ್ರಗಳೊಂದಿಗೆ ಮಕ್ಕಳಿಗೆ ಶಾಶ್ವತ ಆಶೀರ್ವಾದ ನೀಡುವ ನಾಮಕರಣ ವಿಧಿ.',
      hi: 'वैदिक मंत्रों और पारिवारिक आशीर्वाद के साथ किया जाने वाला शिशु नामकरण संस्कार।'
    },
    duration: 120,
    category: 'special',
    deity: 'family-deities',
    occasions: ['naming-ceremony', 'child', 'special'],
    pricing: {
      basic: 10000,
      premium: 20000,
      deluxe: 30000
    },
    // Uses Krishna deity visual from past poojas
    images: ['/images/past/krishna-deity.png'],
    requirements: ['Baby and parents present', 'Pooja mantap', 'Cradle decoration', 'Fruits and sweets'],
    benefits: ['Graceful naming of the child', 'Health and longevity blessings', 'Family harmony']
  },
  {
    id: 'navagraha-pooja',
    name: {
      en: 'Navagraha Pooja',
      kn: 'ನವಗ್ರಹ ಪೂಜೆ',
      hi: 'नवग्रह पूजा'
    },
    description: {
      en: 'Worship of the nine planets (Navagrahas) to pacify malefic influences and strengthen favourable planetary positions.',
      kn: 'ಒಂಬತ್ತು ಗ್ರಹಗಳ (ನವಗ್ರಹ) ಪೂಜೆ—ಅಶುಭ ಪ್ರಭಾವ ಶಮನ ಮತ್ತು ಶುಭ ಗ್ರಹ ಸ್ಥಿತಿ ಬಲಪಡಿಸಲು.',
      hi: 'नौ ग्रहों (नवग्रह) की पूजा—अशुभ प्रभाव शांत करने और शुभ ग्रह स्थिति मजबूत करने के लिए।'
    },
    duration: 90,
    category: 'pooja',
    deity: 'navagraha',
    occasions: ['remedy', 'health', 'general', 'planetary-dosha'],
    pricing: {
      basic: 11000,
      premium: 18000,
      deluxe: 28000
    },
    images: ['/images/past/past-setup.png'],
    requirements: ['Navagraha idols or yantra', 'Nine types of grains and flowers', 'Oil lamps', 'Incense and camphor'],
    benefits: ['Planetary peace', 'Reduces dosha effects', 'Health and prosperity']
  }
]

