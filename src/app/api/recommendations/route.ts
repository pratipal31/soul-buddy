import { NextResponse } from 'next/server'

const dailyRecommendations = [
  {
    type: 'puja',
    title: '✨ Ganesh Puja',
    description: 'A powerful ritual to remove obstacles and bring success in your endeavors',
    benefits: [
      'Removes obstacles from your life path',
      'Brings divine wisdom and mental clarity',
      'Enhances business prospects and success'
    ],
    timing: 'Best performed during sunrise or early morning',
    items: ['Fresh red flowers', 'Sweet modak', 'Yellow silk cloth', 'Pure incense sticks']
  },
  {
    type: 'meditation',
    title: '🧘‍♂️ Chakra Meditation',
    description: 'Ancient practice to balance your vital energy centers',
    benefits: [
      'Harmonizes spiritual and physical energies',
      'Enhances mental clarity and focus',
      'Brings emotional balance and peace'
    ],
    timing: 'Practice during sunrise or sunset for optimal benefits'
  }
];

const weeklyRecommendations = [
  {
    type: 'ritual',
    title: '🕉️ Rudra Abhishek',
    description: 'Sacred ritual to invoke the blessings of Lord Shiva',
    benefits: [
      'Cleanses negative karmic energies',
      'Brings divine peace and prosperity',
      'Strengthens relationships and family bonds'
    ],
    timing: 'Most auspicious on Monday mornings',
    items: ['Pure milk', 'Sacred honey', 'Holy Gangajal', 'Fresh bael leaves']
  },
  {
    type: 'gemstone',
    title: '💎 Red Coral (Moonga)',
    description: 'Sacred gemstone that strengthens Mars energy in your birth chart',
    benefits: [
      'Boosts confidence and inner strength',
      'Enhances leadership and decision-making abilities',
      'Provides protection against negative energies'
    ]
  }
];

const monthlyRecommendations = [
  {
    type: 'puja',
    title: '🌕 Full Moon Puja',
    description: 'Harness the powerful energy of the full moon for spiritual growth',
    benefits: [
      'Amplifies your intentions and prayers',
      'Cleanses and recharges your energy',
      'Enhances intuition and psychic abilities'
    ],
    timing: 'Perform on the night of the full moon',
    items: ['White flowers', 'Pure water', 'Silver bowl', 'Moonstone or clear quartz crystal']
  },
  {
    type: 'ritual',
    title: '🔥 Havan Ceremony',
    description: 'Ancient fire ritual for purification and manifestation',
    benefits: [
      'Purifies the environment and your aura',
      'Strengthens your connection with divine forces',
      'Manifests your desires and intentions'
    ],
    timing: 'Can be performed on auspicious days or as guided by an astrologer',
    items: ['Sacred fire pit', 'Ghee', 'Samagri (mixture of herbs)', 'Wooden spoon']
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const period = searchParams.get('period')

  let recommendations;

  switch (period) {
    case 'daily':
      recommendations = dailyRecommendations;
      break;
    case 'weekly':
      recommendations = weeklyRecommendations;
      break;
    case 'monthly':
      recommendations = monthlyRecommendations;
      break;
    default:
      recommendations = dailyRecommendations;
  }

  return NextResponse.json(recommendations)
}

