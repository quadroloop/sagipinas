import React, { useEffect } from 'react'
import PerfectScrollbar from 'perfect-scrollbar'

import Sidebar from '../components/Sidebar'

function Home(props) {
  useEffect(() => {
    new PerfectScrollbar('.feed')
  }, [])

  return (
    <div className="container">
      <Sidebar />

      <div className="feed">
        {
          Array.from(Array(7)).map((i, index) => (
            <div className="card">

            </div>
          ))
        }
      </div>

      <div className="content">
        <div className="info-card">
          
        </div>
      </div>
    </div>
  )
}

export default Home