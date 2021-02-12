import React from 'react'
import { useHistory } from 'react-router-dom'
import characterOne from '../../assets/2d.png'
import characterTwo from '../../assets/2d-image2.png'
import murdocImage from '../../assets/murdoc.png'
import jeep from '../../assets/jeep.png'

import ReactAudioPlayer from 'react-audio-player'
import laughingAudio from '../../assets/gorillaz-laugh.mp3'
import bandLoadingImage from '../../assets/gorillaz-band.png'


function Home() {
  const history = useHistory()
  const [enteredSite, setEnteredSite] = React.useState(false)

  const clicksEnter = () => {
    setEnteredSite(true)

    //* This then sends the user to the TRACK SHOW page:
    setTimeout(() => {
      history.push('/trackshow')
    }, 6500)
  }

  return (
    <main className="home-page">
      {!enteredSite ?
        <section>
          <div className="gorillaz-logo-container">
            <div className="gorillaz-logo">
              <img src="https://preview.redd.it/ufq2moe3zhz11.png?width=2024&format=png&auto=webp&s=74460feb542c2e3861cfc11a2213cf9cc3ab2b3b"></img>
              <div className="has-text-centered">
              </div>
            </div>
          </div>
          <div className="welcome is-family-code is-size-3">
            Welcome to GORILLAZAPP. Ready for some GORILLAZ?
          </div>
          <div className="enter">
            <button
              // className=" is-primary is-light is-large is-outlined"
              onClick={clicksEnter}>
              <span>Enter</span>
            </button>
          </div>
          <div className="band-images-wrapper">
            <div className="characterOne">
              <img src={characterOne} alt="gorillaz" />
            </div>
            <div className="characterTwo">
              <img src={characterTwo} alt="gorillaz" />
            </div>
            <div className="murdocImage">
              <img src={murdocImage} alt="gorillaz" />
            </div>
          </div>
        </section>
        :
        <section>
          <div className="jeep">
            <img src={jeep} alt="gorillaz" />
          </div>
          <div className="band-image-container">
            <img src={bandLoadingImage} alt="gorillaz" />
          </div>
          <div className="generating is-family-code is-size-3"> Generating tracks... </div>
          <ReactAudioPlayer
            src={laughingAudio}
            autoPlay
          />
        </section>
      }
    </main>
  )
}
export default Home