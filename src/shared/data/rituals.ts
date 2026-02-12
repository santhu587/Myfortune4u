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
    id: 'ganapathi-homa',
    name: {
      en: 'Ganapathi Homa',
      kn: 'ಗಣಪತಿ ಹೋಮ',
      hi: 'गणपति होम'
    },
    description: {
      en: 'Sacred fire ritual to Lord Ganesha for new beginnings and removal of obstacles.',
      kn: 'ಹೊಸ ಆರಂಭ ಮತ್ತು ವಿಘ್ನ ನಿವಾರಣೆಗೆ ಶ್ರೀ ಗಣೇಶನಿಗೆ ಅರ್ಪಣೆಯ ಪವಿತ್ರ ಹೋಮ.',
      hi: 'नए प्रारंभ और विघ्नों की निवृत्ति के लिए भगवान गणेश को समर्पित पवित्र होम।'
    },
    duration: 120,
    category: 'homa',
    deity: 'ganesha',
    occasions: ['new-beginnings', 'obstacle-removal', 'general'],
    pricing: {
      basic: 5000,
      premium: 8000,
      deluxe: 12000
    },
    // Uses homepage Health & Protection visual
    images: ['/images/health-protection.png'],
    requirements: ['Clean puja space', 'Kalasha with water', 'Flowers and fruits'],
    benefits: ['Removes obstacles', 'Invokes auspiciousness', 'Blessings for new ventures']
  },
  {
    id: 'satyanarayan-pooja',
    name: {
      en: 'Satyanarayan Pooja',
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
    // Uses homepage Special Occasions visual
    images: ['/images/special-occasions.png'],
    requirements: ['Pooja mantap', 'Panchamrita items', 'Tulsi leaves'],
    benefits: ['Family harmony', 'Prosperity', 'Fulfilment of wishes']
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
    images: ['/images/new-beginnings.png'],
    requirements: ['New home ready for pooja', 'Kalasha and coconut', 'Navagraha setup', 'Vastu sankalpa items'],
    benefits: ['Blessed start for new home', 'Vastu alignment', 'Protection for residents']
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

