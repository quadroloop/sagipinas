import React from 'react'
import { Route } from 'react-router-dom'

import Sidebar from '../../components/Sidebar'
import Dashboard from './pages/Dashboard'

function Home(props) {
  const { match } = props

  return (
    <div className="container">
      <Sidebar />

      <Route path={match.url} exact component={Dashboard} />
      <Route path={`${match.url}/facilities`} render={() => <h1>Facilities</h1>} />
    </div>
  )
}

export default Home