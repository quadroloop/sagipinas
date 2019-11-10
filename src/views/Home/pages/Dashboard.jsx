import React, { useEffect } from 'react'
import PerfectScrollbar from 'perfect-scrollbar'

import io from 'socket.io-client';


const socket = io('https://sagipinas.herokuapp.com');

socket.on("report", (data) => {
  console.log(data);
})


function Dashboard(props) {

  useEffect(() => {
    new PerfectScrollbar('.feed')
  }, [])


  return (
    <div className="dashboard">
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
          <h3><i className="fa fa-map-marker marker"></i> Manila, Philippines</h3>
          <p className="hazard-tag"><i className="fa fa-circle"></i> Earthquake</p>
          <button className="test-btn"><i className="fa fa-check" /> Verify</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard