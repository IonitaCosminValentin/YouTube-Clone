import lofi from './Assets/lofi.jpg'
import quotes from './Assets/quotes.jpg'
import moshProgramming from './Assets/moshProgramming.jpg'
import sebastian from './Assets/sebastian.jpg'
import corridor from './Assets/corridor.jpg'
import dailyDoseOfInternet from './Assets/dailyDoseOfInternet.jpg'
import theActionLab from './Assets/theActionLab.jpg'
import leviAllen from './Assets/leviAllen.jpg'
import princeEa from './Assets/princeEa.jpg'
import neffex from './Assets/neffex.jpg'
import beAmazed from './Assets/beAmazed.jpg'
import harryMack from './Assets/harryMack.jpg'
import chrisRamsy from './Assets/chrisRamsy.jpg'
import theCodingTrain from './Assets/theCodingTrain.jpg'

const db = {
  subs: [
    {
      image: lofi,
      name: 'Lofi Girl'
    },
    {
      image: quotes,
      name: 'Quotes'
    },
    {
      image: moshProgramming,
      name: 'Programming with Mosh'
    },
    {
      image: sebastian,
      name: 'Sebastian Lague'
    },
    {
      image: corridor,
      name: 'Corridor Crew'
    },
    {
      image: dailyDoseOfInternet,
      name: 'Daily Dose Of Internet'
    },
    {
      image: theActionLab,
      name: 'The Action Lab '
    },
    {
      image: leviAllen,
      name: 'Levi Allen'
    },
    {
      image: princeEa,
      name: 'Prince Ea'
    },
    {
      image: neffex,
      name: 'NEFFEX'
    },
    {
      image: harryMack,
      name: 'Harry Mack'
    },
    {
      image: beAmazed,
      name: 'BE AMAZED'
    },
    {
      image: chrisRamsy,
      name: 'Chris Ramsay'
    },
    {
      image: theCodingTrain,
      name: 'The Coding Train'
    }
  ],
  videos: [
    {
      thumbnail:
        'https://i.ytimg.com/vi/sTeoEFzVNSc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGr0V2eRDfJQ730GYMWjYQAzbs6g',
      title:
        'ChatGPT Tutorial for Developers - 38 Ways to 10x Your Productivity',
      channelIcon: moshProgramming,
      channelName: 'Programming with Mosh',
      views: '1.2 M views 3 years ago'
    },
    {
      thumbnail:
        'https://i.ytimg.com/vi/TjpakH79qjg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEkk4ple173niCQ6RCHWYRnvEgvQ',
      title: 'Remaking My Most Popular Edit... 2 Years Later',
      channelIcon:
        'https://yt3.ggpht.com/tWGVfHXn5SaAsw-7livA-p-Db6VrWKtLESCqIaR0Gw6cMN47dhUWt3nMPYcoF7ueZBDsUq4atg=s68-c-k-c0x00ffffff-no-rj',
      channelName: 'Benny Production',
      views: '820k views 8 months ago'
    },
    {
      thumbnail:
        'https://i.ytimg.com/vi/_3cNcmli6xQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCy3qvqGi5I2UjlPUqRzUdkNkPDzg',
      title: 'Experimenting with Buses and Three-State Logic',
      channelIcon: sebastian,
      channelName: 'Sebastian Lague',
      views: '1M views 1 year ago'
    },
    {
      thumbnail:
        'https://i.ytimg.com/vi/lzbpEo5b1lI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAl00A3FgiVL44CRXX-WwDwTxrRIg',
      title: 'Ferrofluid Could Be The Future of Space Propulsion',
      channelIcon: theActionLab,
      channelName: 'The Action Lab',
      views: '680K views 1 month ago'
    },
    {
      thumbnail:
        'https://i.ytimg.com/vi/vBSXqHQadWA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxjOxDQEpnTV-SYIGQ9UgXKbCDkg',
      title: 'They Had To See This | Harry Mack Guerrilla Bars 30 London Pt. 2',
      channelIcon: harryMack,
      channelName: 'Harry Mack',
      views: '370K views 2 weeks ago'
    },
    {
      thumbnail:
        'https://i.ytimg.com/vi/swcvNXdp38c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCinlFASkE41ogt8RjYRD6ynacGnw',
      title: 'The ANTI GRAVITY Puzzle!!',
      channelIcon: chrisRamsy,
      channelName: 'Chris Ramsay',
      views: '1.8M views 1 month ago'
    },
    {
      thumbnail:
        'https://i.ytimg.com/vi/PHfKCxjsmos/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGF-z3yAkqdgCfB8wdM8rFDXLOQg',
      title: 'Coding Challenge: 3D on Apple II',
      channelIcon: theCodingTrain,
      channelName: 'The Coding Train',
      views: '500K views 1 year ago'
    },
    {
      thumbnail:
        'https://i.ytimg.com/vi/Pq7ppv0lDCU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLRSDRL4EhPNOVQ_eKpVAwz1TxrQ',
      title: 'VFX Artists React 93: Star Wars X-Wing, The Polar Express',
      channelIcon: corridor,
      channelName: 'Corridor Crew',
      views: '350K views 2 days ago'
    },
    {
      thumbnail:
        'https://i.ytimg.com/vi/um9pLyoMuvU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARFwnW3pl9wx4fa8P2CpJALY6POw',
      title: 'Solo Winter Camping in My CAR through Freezing Temps',
      channelIcon: leviAllen,
      channelName: 'Levi Allen',
      views: '1M views 1 week ago'
    },
    {
      thumbnail:
        'https://i.ytimg.com/vi/D25QHmjrnU0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChqg8g-QnZtLfxnCzBvEz9h9l5-g',
      title: 'DEPRESSION (BEHIND THE SCENES)',
      channelIcon: princeEa,
      channelName: 'Prince Ea',
      views: '3M views 5 years ago'
    },
    {
      thumbnail:
        'https://i.ytimg.com/vi/jfKfPfyJRdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAP74LKwgeVlcaO8dzN4FJFRwTVw',
      title: 'lofi hip hop radio - beats to relax/study to',
      channelIcon: lofi,
      channelName: 'Lofi Girl',
      views: '730K views 3 weeks ago'
    },
    {
      thumbnail:
        'https://i.ytimg.com/vi/Ew_rU5Xmalg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCf2GMP_YfpGED0IPQMYdVfhgX5iA',
      title: 'Revolutionary Space Technologies and Innovations',
      channelIcon: beAmazed,
      channelName: 'BE AMAZED',
      views: '700K views 3 days ago'
    }
  ]
}
export default db
