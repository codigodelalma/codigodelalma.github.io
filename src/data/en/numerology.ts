// Meanings of Pythagorean numerology according to Hans Decoz (worldnumerology.com).
// Each text is a faithful, brief paraphrase of his page (Life Path, Soul Urge, Personality Number,
// Expression Number and Personal Year); the links are in src/data/decoz.ts.
// It is a symbolic system of interpretation, not a scientific claim.

import type { NumberMeaning, PositionKey } from '../numerology.ts'

export const POSITIONS: Record<PositionKey, { title: string; source: string; what: string }> = {
  leccion: {
    title: 'Life lesson',
    source: 'Full date of birth',
    what: 'The path you came to walk: the experiences that keep coming back and what life asks you to learn. Hans Decoz calls it the Life Path.',
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
    archetype: 'The Leader',
    keywords: ['Independence', 'Determination', 'Originality', 'Courage'],
    essence: 'blaze your own trail with courage and originality',
    light: 'You are a born leader who wants freedom of thought and action, with the drive, creativity and originality to tackle problems in your own unconventional way.',
    shadow: 'Pride can turn into conceit and concern with status, impatience with yourself and others, and domineering or aggressive behavior when things don’t go your way.',
    lesson: 'To keep pride and overconfidence in check, cultivating gratitude and humility and seeing your talents as a gift rather than a reason for conceit.',
    positions: {
      leccion: 'Life will teach you that real leadership grows from humility and gratitude, not from pride.',
      alma: 'Deep down you want independence: to live by your own convictions rather than others’ expectations, and to become the leading figure in your field.',
      personalidad: 'You come across as confident and self-reliant, an original pioneer who is not easily dominated; your intensity can seem aggressive or unapproachable unless you soften it.',
      destino: 'Your mission is to lead the way with independence and originality: picture your goals clearly, pursue them with steady willpower and dare the untested, while cultivating balance and compassion.',
    },
    year: 'A year of new beginnings that opens a nine-year cycle: plan, share your vision, be decisive and take on personal changes such as a new routine or course of study. Avoid procrastination and distractions.',
  },
  2: {
    n: 2,
    archetype: 'The Peace Maker',
    keywords: ['Sensitivity', 'Diplomacy', 'Patience', 'Cooperation'],
    essence: 'be the bond that brings people together in harmony',
    light: 'You are perceptive and tactful, able to sense what others feel and to create harmony among people with different views, often doing valuable work behind the scenes.',
    shadow: 'You may be easily hurt by criticism, hold back your own thoughts to avoid conflict, and let unspoken resentment build until it bursts out as sharp criticism.',
    lesson: 'To recognize and use your inner strength: speak up, stand up for your contributions and confront those who undervalue you, instead of brooding.',
    positions: {
      leccion: 'Life will teach you that your gentleness is strongest when you also dare to make your own voice heard.',
      alma: 'Deep down you want peace and balance in every area of life, close companionship, security and beauty, and to commit fully to someone or something you love.',
      personalidad: 'You come across as warm and approachable, a calm safe harbor where people feel at ease; some mistake your gentleness for fragility and overlook your inner strength.',
      destino: 'Your mission is to bring people together and make peace: with tact, diplomacy and intuition you ease tension and steer situations toward harmony, often as a partner or supporter rather than a leader.',
    },
    year: 'A year to carefully protect and nurture your plans: progress is slow and comes through tact, patience, cooperation and compromise, along with study. Forcing things may backfire; close relationships may deepen.',
  },
  3: {
    n: 3,
    archetype: 'The Creative Child',
    keywords: ['Creativity', 'Expression', 'Optimism', 'Sociability'],
    essence: 'express your creativity to uplift and inspire others',
    light: 'You have a strong gift for creative self-expression, with wit, optimism and resilience, an upbeat, generous and sociable nature, and an ability to inspire others.',
    shadow: 'You can be disorganized and careless with responsibilities (often with money trouble), hide hurt behind jokes, turn cynical or sarcastic when low, or scatter your talent as a “social butterfly.”',
    lesson: 'To turn talent into results through discipline, commitment and focus; without them your gifts may go unused.',
    positions: {
      leccion: 'Life will teach you that your talent only flourishes when you give it discipline and focus.',
      alma: 'Deep down you want to express yourself creatively and bring joy to others through wit, humor or the arts, a desire fulfilled through commitment and discipline.',
      personalidad: 'You come across as lively, warm and optimistic, someone who brightens a room with wit and charm and is enjoyable company.',
      destino: 'Your mission is self-expression: sharing your imagination and vitality through storytelling, performance, writing or music to uplift others, while focusing scattered interests on one passion you truly love.',
    },
    year: 'A time of expansion and personal growth, favoring creativity, socializing, travel and communication. Channel your energy with discipline and avoid scattering it, rushing, over-optimism or extravagance.',
  },
  4: {
    n: 4,
    archetype: 'The Builder',
    keywords: ['Practicality', 'Order', 'Persistence', 'Dependability'],
    essence: 'build solid foundations through steady, honest work',
    light: 'You are practical, methodical and hardworking, honest and loyal, solving problems step by step and building lasting foundations that others can rely on.',
    shadow: 'You can be rigid and quick to judge, stuck in convention and so cautious that you miss opportunities, bossy at times, and deeply shaken when your sense of order is disrupted.',
    lesson: 'To develop flexibility: adapting and accepting necessary change instead of letting rigidity cost you opportunities.',
    positions: {
      leccion: 'Life will teach you that the firmest structures are the ones able to adapt to change.',
      alma: 'Deep down you want a steady, well-ordered life with routine and structure, to be a reliable pillar for others, and to receive plenty of love, even if you don’t show it.',
      personalidad: 'You come across as dependable and steady, someone whose judgment feels safe to lean on and who anchors a team, though your conventional style can seem serious or stern.',
      destino: 'Your mission is to build and organize: giving families, businesses and communities a solid foundation, turning plans into results with method and discipline, while staying open to imaginative ideas.',
    },
    year: 'A practical, disciplined year for organization, hard work and laying foundations: commit to your goals, finish postponed projects and meet obligations. Feelings of limitation may arise; home and property matters are favored.',
  },
  5: {
    n: 5,
    archetype: 'The Free Spirit',
    keywords: ['Adventure', 'Curiosity', 'Versatility', 'Persuasion'],
    essence: 'live life fully and use your freedom with discipline',
    light: 'You love freedom, travel, variety and new people; you are curious, multi-talented, make friends easily and have a gift with words that motivates others.',
    shadow: 'You can lack discipline and act impulsively, leave many things unfinished, find commitment hard, and let freedom slide into overindulgence.',
    lesson: 'To learn what freedom truly means: developing discipline and focus and settling into one area long enough to master it.',
    positions: {
      leccion: 'Life will teach you that true freedom comes from focus and commitment, not from escaping them.',
      alma: 'Deep down you want freedom to move, explore and change course; you crave variety, adventure, and new people and places.',
      personalidad: 'You come across as lively, curious and quick-witted, charming, sociable and at ease with change, though some sense restlessness or a reluctance to commit.',
      destino: 'Your mission is to explore your many talents, especially communication, through variety, travel and new ideas, and to channel that restless energy into a few chosen areas until you master them through self-discipline.',
    },
    year: 'A time of dynamic change, with surprises, adventure, travel and possibly relocation: stay open, take calculated risks and promote yourself. Clinging to outdated habits makes the year unsettling, and overindulgence leads to mistakes.',
  },
  6: {
    n: 6,
    archetype: 'The Caretaker',
    keywords: ['Compassion', 'Responsibility', 'Generosity', 'Harmony'],
    essence: 'care for others with compassion and real usefulness',
    light: 'You are a natural healer and helper, balanced and comforting in hard times, willing to take on responsibility, and generous, warm and charismatic, with artistic talent.',
    shadow: 'You may feel overburdened by others’ problems, pick partners out of sentimentality, attract people who grow dependent on you, see yourself as a savior and neglect your own creativity.',
    lesson: 'To balance helping with interfering: knowing when to step back and let others face their own lessons, and whom your help truly strengthens.',
    positions: {
      leccion: 'Life will teach you that sometimes the greatest help is to step back and let others grow.',
      alma: 'Deep down you want to care for and help the people you love and be loved in return, in a warm, harmonious life centered on home and family where you feel appreciated and needed.',
      personalidad: 'You come across as a nurturing, parent-like figure: people relax around you, bring you their worries and see you as a dependable safe port.',
      destino: 'Your mission is to nurture, heal and guide: counseling others, mediating between opposing views and bringing harmony and beauty into the world, without neglecting your own artistic and practical gifts.',
    },
    year: 'A year centered on family, home, community and responsibility, which can also bring career and financial progress. Build harmony, support loved ones with flexibility and care, and expect heavy demands from others.',
  },
  7: {
    n: 7,
    archetype: 'The Seeker',
    keywords: ['Analysis', 'Spirituality', 'Introspection', 'Wisdom'],
    essence: 'search for truth and the answers to life’s mysteries',
    light: 'You are a seeker of truth with an analytical, concentrated mind and spiritual self-awareness, who loves research and solving complex puzzles, and grows into refinement and wisdom.',
    shadow: 'Your need for solitude can make close bonds hard and, taken too far, lead to loneliness, cynicism, suspicion, self-centeredness and harsh self-criticism.',
    lesson: 'To stay independent and true to your own perspective without sliding into isolation, keeping yourself open to people and what they offer.',
    positions: {
      leccion: 'Life will teach you that inner wisdom deepens when you also open yourself to others.',
      alma: 'Deep down you love knowledge, study and deep insight into life; your challenge is to trust and share your heart with another person.',
      personalidad: 'You come across as enigmatic, serious and scholarly, set apart from the crowd, and respected more for your sharp insight and intelligence than for warmth or outgoing charm.',
      destino: 'Your mission is to seek knowledge and truth: using an analytical mind to explore life’s hidden questions in science, philosophy and spirituality, separate illusion from reality and gain real expertise in your field.',
    },
    year: 'An inward year in which self-reflection and contemplation are key: read, reflect, rest, care for your health and keep up daily duties, with a relaxed attitude. Fixating on material rewards makes the year hard, and so does withdrawing too far.',
  },
  8: {
    n: 8,
    archetype: 'The Executive',
    keywords: ['Leadership', 'Management ability', 'Resilience', 'Good judgment'],
    essence: 'use your power and abilities for the good of others',
    light: 'You have natural leadership and a strong grasp of business, finance and how enterprises work, judge character well, and are resilient enough to recover from setbacks.',
    shadow: 'You can fall into greed, arrogance and domineering, stubborn or impatient behavior, crave luxury and status beyond your means, and keep others dependent on you.',
    lesson: 'To develop detachment, learn the real and relative value of money, and use your power and influence for the benefit of others.',
    positions: {
      leccion: 'Life will teach you that power and money are worth most when they serve others.',
      alma: 'Deep down you want success on a large scale (prosperity, influence and material comfort) and you need ambitious goals and demanding, worthwhile work.',
      personalidad: 'You come across as strong, self-assured and competent, so others defer to you; you are generous with causes you believe in, though your forceful presence can intimidate.',
      destino: 'Your mission is to achieve major success and lead in your field with drive, efficiency and a natural grasp of money and authority, balancing ideals with practical reality and using your power for the good of others.',
    },
    year: 'Your year of harvest: past effort pays off, delayed rewards arrive and confidence and efficiency grow, so pursue your ambitions with clarity. Results match the effort invested, and some detachment from outcomes helps.',
  },
  9: {
    n: 9,
    archetype: 'The Humanitarian',
    keywords: ['Compassion', 'Idealism', 'Big-picture vision', 'Creativity'],
    essence: 'give and serve a larger cause that makes the world better',
    light: 'You are socially conscious, compassionate and idealistic, see the big picture, value people for what they contribute rather than by social bias, and have imagination and an eye for beauty.',
    shadow: 'You can be disappointed by others’ and your own imperfections, never satisfied with results, moody or aloof, and inclined to blame the world; chasing money for its own sake may leave you empty-handed.',
    lesson: 'To let go of possessions and relationships rather than clinging, accept life’s limits and imperfections, and look honestly at your own strengths and shortcomings.',
    positions: {
      leccion: 'Life will teach you that you find the most by giving without expecting anything in return and learning to let go.',
      alma: 'Deep down you want to make the world and others’ lives better, guided by lofty ideals, and to leave your mark; your deepest satisfaction comes from giving and serving, starting with those closest to you.',
      personalidad: 'You come across as dignified and poised, with a noble, charismatic presence that draws admiration, though it can also provoke envy or read as aloofness.',
      destino: 'Your mission is to serve humanity and work for a better world through causes like law, teaching, healing or environmental care, weaving diverse knowledge into a whole and learning to share your feelings openly.',
    },
    year: 'A year of completion that closes the nine-year cycle: finish unfinished business, clear out what you no longer need, settle debts, support others and worthy causes, and let go of what has ended.',
  },
}

export const MASTER_NOTES: Record<number, { title: string; text: string }> = {
  11: {
    title: 'Master vibration 11',
    text: 'Hans Decoz describes the 11 as a highly charged version of the 2: a highly intuitive, high-energy path that inspires others almost without trying, acting as a channel between higher insight and everyday life. Its key lesson is confidence in its own ability.',
  },
  22: {
    title: 'Master vibration 22',
    text: 'For Hans Decoz, the 22 is the Master Builder: vision and practical sense to turn big dreams into concrete results, uniting many kinds of people around one goal. It is dominated by the pragmatic 4.',
  },
  33: {
    title: 'Master vibration 33',
    text: 'Hans Decoz calls the 33 the Master Teacher: compassionate and balanced, gifted to heal, counsel and guide; it is dominated by the loving, responsible 6. Its lesson is to be truly helpful by balancing helping with interfering.',
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
  22: {
    fields: 'No specific professions are named: it is credited with leadership and a liking for large enterprises and work on an international scale.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-22/',
  },
  33: {
    fields: 'Business that involves dealing with people; a humanitarian motivation, especially in education, medicine, politics or law.',
    url: 'https://www.worldnumerology.com/numerology-expression/expression-number-33/',
  },
}

export const MASTER_DESTINY_SOURCE = {
  label: 'Hans Decoz — Expression number ("if you encounter a master number, 11, 22 or 33, do not reduce it")',
  url: 'https://www.worldnumerology.com/numerology-expression-number.htm',
}
