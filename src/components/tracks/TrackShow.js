/* eslint-disable no-unused-vars */
import React from 'react'
import { getTracks } from '../lib/api'
import ReactAudioPlayer from 'react-audio-player'
function TrackShow() {
  const [tracks, setTracks] = React.useState(null)
  const [trackIndex, setTrackIndex] = React.useState(1)
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
  console.log(tracks)
  const currentTrackName = tracks && tracks.results[trackIndex].trackName
  const currentCollectionName = tracks && tracks.results[trackIndex].collectionName
  const currentArtwork = tracks && tracks.results[trackIndex].artworkUrl100.replace(/100x100/g, '600x600')
  const currentAudioSource = tracks && tracks.results[trackIndex].previewUrl
  function nextTrack() {  
    setTrackIndex(Math.floor(Math.random() * 200))
  }
  return (
    <body className="trackshow-page">
      <section className="hero is-fullheight">
        <div className="has-text-centered">
          <img className="gorillaz-logo" src="https://preview.redd.it/ufq2moe3zhz11.png?width=2024&format=png&auto=webp&s=74460feb542c2e3861cfc11a2213cf9cc3ab2b3b"></img>
        </div>
        <div className="container">
          {tracks ?
            <div>
              <div className="has-text-centered">
                <figure className="image is-400x400">
                  <img src={currentArtwork} alt={currentCollectionName}/>
                </figure>
                <h2 className="is-family-code m-5">Track name: {currentTrackName}</h2>
                <h2 className="is-family-code">Album name: {currentCollectionName}</h2>
                <ReactAudioPlayer className="audio-player"
                  src={currentAudioSource}
                  autoPlay
                />
              </div>
              <audio></audio>
              <div className="has-text-centered m-5">
                <a className="button is-primary is-large is-rounded is-outlined button is-primary is-hovered" onClick={nextTrack}><span>Next Track</span></a>
              </div>
            </div>
            :
            <p>...loading</p>
          }
        </div>
      </section>
    </body>
  )
}
export default TrackShow










// /* eslint-disable no-unused-vars */
// import React from 'react'
// import { getTracks } from '../lib/api'
// import ReactAudioPlayer from 'react-audio-player'


// function TrackShow() {
//   const [tracks, setTracks] = React.useState(null)
//   const [trackIndex, setTrackIndex] = React.useState(Math.floor(Math.random() * 200))

//   React.useEffect(() => {
//     const getData = async () => {
//       try {
//         const { data } = await getTracks()
//         setTracks(data)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     getData()
//   }, [])

//   console.log(tracks && tracks.results[1].trackName)
//   console.log(tracks)

//   const currentTrackName = tracks && tracks.results[trackIndex].trackName
//   const currentCollectionName = tracks && tracks.results[trackIndex].collectionName
//   const currentArtwork = tracks && tracks.results[trackIndex].artworkUrl100.replace(/100x100/g, '600x600')
//   const currentAudioSource = tracks && tracks.results[trackIndex].previewUrl

//   function nextTrack() {  
//     setTrackIndex(Math.floor(Math.random() * 200))
//   }


//   return (
//     <section className="section">
//       <div className="container">
//         {tracks ?
//           <div>
//             <figure className="image is-128x128">
//               <img src={currentArtwork} alt={currentCollectionName}/>
//             </figure>
//             <h2>Track name: {currentTrackName}</h2>
//             <h2>Album name: {currentCollectionName}</h2>
//             <ReactAudioPlayer
//               src={currentAudioSource}
//               autoPlay
//               // controls
//             />
//             <audio></audio>
//             <button onClick={nextTrack}>Next</button>
//           </div>
//           :
//           <p>...loading</p>
//         }
//       </div>
//     </section>
//   )
// }
// export default TrackShow