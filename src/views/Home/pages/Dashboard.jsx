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


  if (document.contains(document.getElementById('renderMap'))) {
    setTimeout(() => {
      document.getElementById("renderMap").click();
    }, 1000)
  }


  return (
    <div className="dashboard">
      <div className="feed">
        {
          Array.from(Array(7)).map((i, index) => (
            <div className="card">
              <span className="tag"><i className="fa fa-fire"></i> FIRE</span>
              <span className="time-tag"><i className="fa fa-clock-o"></i> 2 hours ago</span>

              <p className="detail">
                complete na yung api, and chatbot deployed na rin sa heroku, putting my full power on complete na yung api, and chatbot deployed na rin sa heroku, putting my full power on
              the front end now, haha</p>
            </div>
          ))
        }
      </div>

      <div className="content">
        <div className="info-card">
          <h3><i className="fa fa-map-marker marker"></i> Manila, Philippines</h3>
          <p className="hazard-tag"><i className="fa fa-bullseye"></i> Earthquake</p>
          <span className="time-tag"><i className="fa fa-clock-o"></i> 2 hours ago</span>
          <div className="info-body">

            <p className="detail-text"><i className="fa fa-chevron-right"></i> Report Details</p>
            <div className="detail-card">
              complete na yung api, and chatbot deployed na rin sa heroku, putting my full power on the front end now, haha
             </div>
            <hr />

            <center>
              <p className="detail-text"><i className="fa fa-bars"></i> Supporting Information</p>
            </center>
            <hr />

            <p className="detail-text"><i className="fa fa-map-marker"></i> LandMarks</p>
            <div className="support-card">
              Pasay City. Philippines.
             </div>


          </div>
          <div className="info-footer">
            <button className="locate"><i className="fa fa-crosshairs" /> Locate</button>
            <button className="verify"><i className="fa fa-check" /> Verify</button>
          </div>
        </div>

        <div id="googleMap"></div>


      </div>
    </div>
  )
}

export default Dashboard