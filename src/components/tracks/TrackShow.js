/* eslint-disable no-unused-vars */
import React from 'react'
import { getTracks } from '../lib/api'
import ReactAudioPlayer from 'react-audio-player'


function TrackShow() {
  const [tracks, setTracks] = React.useState(null)
  const [trackIndex, setTrackIndex] = React.useState(Math.floor(Math.random() * 200))

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

  console.log(tracks && tracks.results[1].trackName)
  console.log(tracks)

  const currentTrackName = tracks && tracks.results[trackIndex].trackName
  const currentCollectionName = tracks && tracks.results[trackIndex].collectionName
  const currentArtwork = tracks && tracks.results[trackIndex].artworkUrl100.replace(/100x100/g, '600x600')
  const currentAudioSource = tracks && tracks.results[trackIndex].previewUrl

  function nextTrack() {  
    setTrackIndex(Math.floor(Math.random() * 200))
  }


  return (
    <section className="section">
      <div className="container">
        {tracks ?
          <div>
            <figure className="image is-128x128">
              <img src={currentArtwork} alt={currentCollectionName}/>
            </figure>
            <h2>Track name: {currentTrackName}</h2>
            <h2>Album name: {currentCollectionName}</h2>
            <ReactAudioPlayer
              src={currentAudioSource}
              autoPlay
              // controls
            />
            <audio></audio>
            <button onClick={nextTrack}>Next</button>
          </div>
          :
          <p>...loading</p>
        }
      </div>
    </section>
  )
}
export default TrackShow