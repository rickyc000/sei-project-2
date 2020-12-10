import axios from 'axios'

const baseUrl = 'https://itunes.apple.com/search?term=gorillaz&entity=musicTrack&limit=200'


export function getTracks() {
  return axios.get(`${baseUrl}`)
}

