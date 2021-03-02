import axios from 'axios'

// const baseUrl = 'https://itunes.apple.com/search?term=gorillaz&entity=musicTrack&limit=200'


// export function getTracks() {
//   return axios.get('https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=gorillaz&entity=musicTrack&limit=200'
//   //  {
//   //   headers: {
//   //     'Origin': null,
//   //   },
//   // }
//   )
// }

export function getTracks() {
  return axios.get('https://cors.bridged.cc/https://itunes.apple.com/search?term=gorillaz&entity=musicTrack&limit=200'
  )
}

// export function getTracks() {
//   return axios.get('https://itunes.apple.com/search?term=gorillaz&entity=musicTrack&limit=200', {
//     headers: {
//       'Origin': null,
//     },
//   })
// }

// export function getTracks() {
//   return axios.get('https://itunes.apple.com/search?term=gorillaz&entity=musicTrack&limit=200')
// }



