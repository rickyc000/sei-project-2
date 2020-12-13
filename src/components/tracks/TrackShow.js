/* eslint-disable no-unused-vars */
import React from 'react'
import { getTracks } from '../lib/api'
import ReactAudioPlayer from 'react-audio-player'
function TrackShow() {
  const [tracks, setTracks] = React.useState(null)
  const [trackIndex, setTrackIndex] = React.useState(Math.floor(Math.random() * 199 + 1)
  )
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getTracks()
        setTracks(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  const currentTrackName = tracks && tracks.results[trackIndex].trackName
  const currentCollectionName = tracks && tracks.results[trackIndex].collectionName
  const currentArtwork = tracks && tracks.results[trackIndex].artworkUrl100.replace(/100x100/g, '600x600')
  const currentAudioSource = tracks && tracks.results[trackIndex].previewUrl
  function nextTrack() {  
    setTrackIndex(Math.floor(Math.random() * 199 + 1))
  }
  return (
    <section className="trackshow-page">
      <section className="hero is-fullheight">
        <div className="has-text-centered">
          <img className="gorillaz-trackshow-logo" src="https://preview.redd.it/ufq2moe3zhz11.png?width=2024&format=png&auto=webp&s=74460feb542c2e3861cfc11a2213cf9cc3ab2b3b"></img>
        </div>
        <div className="container">
          {tracks ?
            <div>
              <div className="img-container">
                <figure className="image is-400x400 has-text-centered">
                  <img className="rotate" src={currentArtwork} alt={currentCollectionName}/>
                </figure>
              </div>
              <div className="track-album-text">
                <h2 className="is-family-code m-5">Track name: {currentTrackName}</h2>
                <h2 className="is-family-code">Album name: {currentCollectionName}</h2>
                <ReactAudioPlayer
                  src={currentAudioSource}
                  autoPlay
                />
              </div>
              <audio></audio>
              <div className="has-text-centered m-5">
                <button onClick={nextTrack}><span>Next Track</span></button>
              </div>
            </div>
            :
            <p>...loading</p>
          }
        </div>
      </section>
    </section>
  )
}
export default TrackShow