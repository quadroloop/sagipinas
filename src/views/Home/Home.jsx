import React from 'react'
import { Route } from 'react-router-dom'

import Sidebar from '../../components/Sidebar'
import Dashboard from './pages/Dashboard'
import Incidents from './pages/Incidents'
import News from './pages/News'
import Settings from './pages/Settings'

function Home(props) {
  return (
    <div className="home-container">
      <Sidebar />

      <Route path="/" exact component={Dashboard} />
      <Route path="/Incidents" component={Incidents} />
      <Route path="/news" component={News} />
      <Route path="/settings" component={Settings} />
    </div>
  )
}

export default Home