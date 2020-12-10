import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/common/Header'
import Home from './components/common/Home'
import TrackShow from './components/tracks/TrackShow'


function App() {



  
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/TrackShow" component={TrackShow} />
      </Switch>
    </BrowserRouter>
  )

}

export default App
