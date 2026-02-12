export type Priest = {
  id: string
  name: string
  primaryImage: string
  groupImage?: string
  yearsExperience: number
  specializations: string[]
  languages: string[]
  rating: number
  city: string
}

export const priests: Priest[] = [
  {
    id: 'chief-priest',
    name: 'Chief Ritualist',
    primaryImage: '/images/priests/main-priest.png',
    groupImage: '/images/priests/team-priests.png',
    yearsExperience: 15,
    specializations: [
      'Ganapathi Homa',
      'Mahamrityunjay Jaap',
      'Navagraha Puja',
      'Griha Pravesh',
      'Satyanarayan Puja'
    ],
    languages: ['Kannada', 'Sanskrit', 'Hindi'],
    rating: 4.9,
    city: 'Bengaluru'
  }
]

