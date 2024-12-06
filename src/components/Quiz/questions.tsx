export interface Current {
    id: string;
    name: string;
  }
  
  export interface Zone {
    id: string;
    label: string;
  }
  
  export interface Question {
    id: number;
    title: string;
    description: string;
    correctPairs: { [key: string]: string };
    currents: Current[];
    zones: Zone[];
  }
  
  export const initialQuestions: Question[] = [
    {
      id: 1,
      title: '💓 Ocean Circulation: Currents',
      description: 'Match the ocean currents 🌊 to their correct ocean zones 🌎.',
      correctPairs: { atlantic: 'gulf', pacific: 'kuroshio', southern: 'antarctic' },
      currents: [
        { id: 'gulf', name: '🌊 Gulf Stream' },
        { id: 'kuroshio', name: '🐋 Kuroshio Current' },
        { id: 'antarctic', name: '❄️ Antarctic Circumpolar Current' },
      ],
      zones: [
        { id: 'atlantic', label: '🌎 Atlantic Ocean' },
        { id: 'pacific', label: '🌏 Pacific Ocean' },
        { id: 'southern', label: '🌍 Southern Ocean' },
      ],
    },
    {
      id: 2,
      title: '🌬️ Wind-Driven Circulation',
      description: 'Match the currents to the winds that drive them.',
      correctPairs: { trade: 'equatorial', westerlies: 'gulf', polar: 'antarctic' },
      currents: [
        { id: 'equatorial', name: '🌊 Equatorial Current' },
        { id: 'gulf', name: '🌊 Gulf Stream' },
        { id: 'antarctic', name: '❄️ Antarctic Circumpolar Current' },
      ],
      zones: [
        { id: 'trade', label: '🌬️ Trade Winds' },
        { id: 'westerlies', label: '🌬️ Westerlies' },
        { id: 'polar', label: '🌬️ Polar Winds' },
      ],
    },
  ];
  