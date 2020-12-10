
import React from 'react'
import { useHistory } from 'react-router-dom'
function Home() {
  const history = useHistory()
  const homeBtn = () => {
    history.push('/trackshow')
  }
  return (
    <body className="home-page">
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <img src="https://preview.redd.it/ufq2moe3zhz11.png?width=2024&format=png&auto=webp&s=74460feb542c2e3861cfc11a2213cf9cc3ab2b3b"></img>
            <div className="has-text-centered">
              <button className="button is-primary is-light is-large is-rounded is-outlined" onClick={homeBtn}><span>Click to play</span></button>
            </div>
          </div>
        </div>
      </section>
      <audio id="audio"></audio>
    </body>
  )
}
export default Home










// import React from 'react'
// import { Link } from 'react-router-dom'

// function Home() {
//   return (
//     <section>
//       <div className="enter-section">
//         <Link to="trackshow">
//           <div className="enter-wrapper">
//             <div className="enter">
//               Enter
//             </div>
//           </div>
//         </Link>
//       </div>
//     </section>
//   )
// }

// export default Home