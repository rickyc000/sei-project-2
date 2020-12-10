import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <div className="enter-section">
        <Link to="trackshow">
          <div className="enter-wrapper">
            <div className="enter">
              Enter
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Home