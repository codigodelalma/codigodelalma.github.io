// Meanings of modern Pythagorean numerology.
// Conventional interpretations of the system, as they appear in the reference works
// (Juno Jordan, "Numerology: The Romance in Your Name"; Hans Decoz, "Numerology: Key to Your Inner Self").
// It is a symbolic system of interpretation, not a scientific claim.
import type { NumberMeaning, PositionKey } from '../numerology.ts'

export const POSITIONS: Record<PositionKey, { title: string; source: string; what: string }> = {
  leccion: {
    title: 'Life lesson',
    source: 'Full date of birth',
    what: 'The path you came to walk: the experiences that keep coming back and what life asks you to learn.',
  },
  alma: {
    title: 'Soul number',
    source: 'Vowels of the name',
    what: 'Your inner world: what you truly desire, what drives you even if you do not always show it.',
  },
  personalidad: {
    title: 'Outer personality',
    source: 'Consonants of the name',
    what: 'The image you project: how others perceive you when they meet you.',
  },
  destino: {
    title: 'Destiny number',
    source: 'Soul + personality',
    what: 'The synthesis of who you are inside and out: the mission you have come to express in the world.',
  },
}

export const NUMBERS: Record<number, NumberMeaning> = {
  1: {
    n: 1,
    archetype: 'The Pioneer',
    keywords: ['Leadership', 'Independence', 'Initiative', 'Originality'],
    essence: 'blaze your own trails with courage',
    light: 'A firm will, the courage to begin, original ideas and the ability to make decisions.',
    shadow: 'Impatience, self-centeredness, difficulty asking for help or accepting other points of view.',
    lesson: 'Learning to trust yourself and to lead without imposing: mature independence is the kind that also knows how to listen.',
    positions: {
      leccion: 'Life will put you again and again in situations where you have to stand on your own and take the first step.',
      alma: 'Deep down you long for autonomy, to leave your mark and to depend on no one to move forward.',
      personalidad: 'You project confidence and determination; others see you as someone who knows what they want.',
      destino: 'Your mission is to initiate: projects, ideas or changes that others will follow later.',
    },
    year: 'A year of beginnings: sow, start projects and make new decisions. What you begin will shape the next nine years.',
  },
  2: {
    n: 2,
    archetype: 'The Mediator',
    keywords: ['Cooperation', 'Sensitivity', 'Diplomacy', 'Patience'],
    essence: 'unite, accompany and create harmony between people',
    light: 'Tact, empathy, intuition, the ability to listen and to work as a team.',
    shadow: 'Indecision, emotional dependence, hypersensitivity or fear of conflict.',
    lesson: 'Finding the balance between giving and receiving: gentleness is also a form of strength.',
    positions: {
      leccion: 'Your path runs through relationships: you will learn through partnership, alliances and collaboration.',
      alma: 'You long for peace, companionship and to feel in tune with those you love.',
      personalidad: 'You project kindness and warmth; people feel at ease with you.',
      destino: 'Your mission is to be a bridge: to reconcile, to accompany and to bring together where others divide.',
    },
    year: 'A year of patience and alliances: what was sown grows slowly. Tend your relationships and do not force the timing.',
  },
  3: {
    n: 3,
    archetype: 'The Communicator',
    keywords: ['Expression', 'Creativity', 'Joy', 'Sociability'],
    essence: 'express your truth and spread enthusiasm',
    light: 'A talent for communicating, imagination, optimism and an ease in inspiring others.',
    shadow: 'Scattered energy, superficiality, being quick to criticize or leaving projects half-finished.',
    lesson: 'Giving shape to your creativity with consistency: your voice has value when you put it at the service of a purpose.',
    positions: {
      leccion: 'Life invites you to express yourself: to speak, write, create and share what you feel.',
      alma: 'You long to enjoy, to create and to feel free to show who you are.',
      personalidad: 'You project charm and sparkle; you are often the life of the party.',
      destino: 'Your mission is to communicate and inspire, to bring joy and beauty to those around you.',
    },
    year: 'A year of expression and social life: create, communicate and give yourself room to enjoy, without scattering your energy.',
  },
  4: {
    n: 4,
    archetype: 'The Builder',
    keywords: ['Order', 'Work', 'Stability', 'Discipline'],
    essence: 'build solid and lasting foundations',
    light: 'Responsibility, method, perseverance and loyalty; someone others can count on.',
    shadow: 'Rigidity, stubbornness, excessive control or resistance to change.',
    lesson: 'Building patiently without closing yourself off to the new: structure exists to support life, not to confine it.',
    positions: {
      leccion: 'Your path asks for steady effort: achievements come step by step, through order and work.',
      alma: 'You seek security, stability and the peace of mind of having things in their place.',
      personalidad: 'You project seriousness and solidity; you convey trust and practical sense.',
      destino: 'Your mission is to build: families, businesses or systems that endure.',
    },
    year: 'A year of work and foundations: organize, save and consolidate. Today’s effort supports what is coming.',
  },
  5: {
    n: 5,
    archetype: 'The Adventurer',
    keywords: ['Freedom', 'Change', 'Versatility', 'Curiosity'],
    essence: 'live freedom and embrace change consciously',
    light: 'Adaptability, curiosity, magnetism and the ability to reinvent yourself.',
    shadow: 'Instability, impulsiveness, excess or fear of commitment.',
    lesson: 'Using freedom responsibly: choosing change rather than running away into it.',
    positions: {
      leccion: 'Life will bring you changes, travel and varied experiences so that you learn to adapt without losing yourself.',
      alma: 'You long for freedom, movement and experiences that make you feel alive.',
      personalidad: 'You project dynamism and charm; you always seem to be on the move.',
      destino: 'Your mission is to show others that change is possible and to open up horizons.',
    },
    year: 'A year of change and movement: travel, new things and decisions. Go with the flow, but without losing your course.',
  },
  6: {
    n: 6,
    archetype: 'The Protector',
    keywords: ['Love', 'Responsibility', 'Family', 'Harmony'],
    essence: 'care, heal and make a home',
    light: 'Generosity, a sense of justice, warmth and a calling to serve.',
    shadow: 'Perfectionism, overprotectiveness, guilt or sacrificing yourself too much.',
    lesson: 'Loving without controlling, and caring for yourself with the same devotion with which you care for others.',
    positions: {
      leccion: 'Your path revolves around home, family and emotional responsibilities.',
      alma: 'You long to love and be loved, to see your loved ones in harmony and to feel useful.',
      personalidad: 'You project warmth and trustworthiness; you are the one others turn to for advice.',
      destino: 'Your mission is to serve and heal: to bring balance, beauty and love to your community.',
    },
    year: 'A year of home and commitments: family, partnership and responsibilities call for your presence.',
  },
  7: {
    n: 7,
    archetype: 'The Seeker',
    keywords: ['Introspection', 'Wisdom', 'Analysis', 'Spirituality'],
    essence: 'seek the truth and go deeper into the meaning of life',
    light: 'An analytical mind, intuition, depth and a calling for knowledge.',
    shadow: 'Isolation, mistrust, coldness or excessive skepticism.',
    lesson: 'Uniting mind and spirit: trusting your intuition and sharing what you discover.',
    positions: {
      leccion: 'Life leads you inward: study, reflection and spiritual search.',
      alma: 'You long to understand, and to have silence and a space of your own to think.',
      personalidad: 'You project reserve and depth; others perceive you as someone enigmatic.',
      destino: 'Your mission is to research, to teach and to contribute wisdom.',
    },
    year: 'A year of introspection: study, rest and review your inner path. Less action, more understanding.',
  },
  8: {
    n: 8,
    archetype: 'The Achiever',
    keywords: ['Power', 'Abundance', 'Authority', 'Achievement'],
    essence: 'bring goals to fruition and exercise power with justice',
    light: 'Vision, management skills, healthy ambition and strength in the face of adversity.',
    shadow: 'Materialism, a drive to control, harshness or workaholism.',
    lesson: 'Balancing the material and the spiritual: power is worth something when it is used for the good of others.',
    positions: {
      leccion: 'Your path runs through achievement, money and authority; you will learn to manage power.',
      alma: 'You desire recognition, success and the satisfaction of seeing your goals fulfilled.',
      personalidad: 'You project authority and effectiveness; you convey that you can handle anything.',
      destino: 'Your mission is to accomplish: to lead, to organize resources and to generate prosperity.',
    },
    year: 'A year of harvest and personal power: results, finances and recognition. Manage with integrity.',
  },
  9: {
    n: 9,
    archetype: 'The Humanitarian',
    keywords: ['Compassion', 'Service', 'Idealism', 'Closing cycles'],
    essence: 'serve with compassion and know how to let go',
    light: 'Generosity, a broad vision, artistic sensitivity and the ability to forgive.',
    shadow: 'Resentment, playing the victim, excessive idealism or difficulty closing chapters.',
    lesson: 'Letting go, forgiving and giving without expecting: every ending prepares you for a wiser beginning.',
    positions: {
      leccion: 'Life teaches you through endings and detachment: learning to let go in order to transcend.',
      alma: 'You long for a better world and to feel that your life has a meaning that goes beyond yourself.',
      personalidad: 'You project nobility and understanding; you inspire trust in very different people.',
      destino: 'Your mission is humanitarian: to serve, to teach by example and to close cycles with wisdom.',
    },
    year: 'A year of closure: finish what is pending, forgive and clear space. A new cycle is being prepared.',
  },
}

export const MASTER_NOTES: Record<number, { title: string; text: string }> = {
  11: {
    title: 'Master vibration 11',
    text: 'In numerology, 11 is considered a master number: heightened intuition, inspiration and spiritual sensitivity. It is lived as a 2 with greater demands.',
  },
  22: {
    title: 'Master vibration 22',
    text: '22 is the "master builder": the ability to bring great visions into reality. It is lived as a 4 with a greater reach.',
  },
  33: {
    title: 'Master vibration 33',
    text: '33 is the "master of service": compassionate love and a calling to teach. It is lived as a 6 with a greater responsibility. It is a later addition than 11 and 22, and not all authors accept it.',
  },
}

/** Professional fields related to the destiny (expression) number, according to Hans Decoz. */
export const VOCATIONS: Record<number, { fields: string; url: string }> = {
  1: {
    fields: 'Leading or running your own business; generals, politicians, entrepreneurs, inventors, religious leaders, activists and avant-garde artists.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-1/',
  },
  2: {
    fields: 'Diplomacy and counseling, with a talent for psychology; also musical talent.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-2/',
  },
  3: {
    fields: 'Writing, comedy, theater and music; the arts and tasks that call for creative solutions.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-3/',
  },
  4: {
    fields: 'Accounting, administration, management, public service and law; arts and music with structure, such as classical music and opera.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-4/',
  },
  5: {
    fields: 'Sales, politics, law, public relations and religious ministry.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-5/',
  },
  6: {
    fields: 'Teaching (especially with children or in special education), healing, counseling, social work, psychology, art, design, gardening and farming; businesses that involve dealing with people.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-6/',
  },
  7: {
    fields: 'Research, analysis, invention, technical work, academic study, law, banking, philosophy, theology and leadership in scientific or technical fields.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-7/',
  },
  8: {
    fields: 'Business, executive management, banking, negotiation, construction, engineering, military or police command, piloting and leading institutions.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-8/',
  },
  9: {
    fields: 'Politics, law, environmental protection, teaching and healing; arts such as literature, painting and the performing arts.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-9/',
  },
  11: {
    fields: 'No specific professions are named: it is described as a natural teacher in any field.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-11/',
  },
}

export const MASTER_DESTINY_SOURCE = {
  label: 'Hans Decoz — Expression number ("if you encounter a master number, 11, 22 or 33, do not reduce it")',
  url: 'https://www.worldnumerology.com/numerology-expression-number.htm',
}
