import React, { useEffect } from 'react'
import PerfectScrollbar from 'perfect-scrollbar'
import loading from '../../../assets/img/loading.gif'
import axios from 'axios';

import io from 'socket.io-client';


const socket = io('https://sagipinas.herokuapp.com');

socket.on("report", (data) => {
  console.log(data);
})


function Dashboard(props) {



  const loadFeed = () => {
    document.getElementById('feed').innerHTML = '';
    axios.get('https://sagipinas.herokuapp.com/incidents')
      .then(res => {
        res.data.reverse().forEach(feed => {
          if (feed.status === 'unverified') {
            document.getElementById('feed').innerHTML += `
            <div class="card">
            <span class="tag"><i class="fa fa-warning"></i> ${feed.type === 'others' ? "Accident" : feed.type}</span>
            <span class="time-tag"><i className="fa fa-clock-o"></i> 2 hours ago</span>
            <p class="detail">
              ${feed.details}
             </p>
            </div>
            `
          }
        })
      })
  }

  useEffect(() => {
    new PerfectScrollbar('.feed')
    new PerfectScrollbar('.info-body')

    loadFeed();


    // if (document.contains(document.getElementById('renderMap'))) {
    //   setTimeout(() => {
    //     document.getElementById("renderMap").click();
    //   }, 1000)
    // }

  }, [])


  return (
    <div className="dashboard">
      <div className="feed" id="feed">
      </div>

      <div className="content">
        <div className="info-card animated slideInUp fastest" id="infoCard">
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
            <button className="verify"
              onClick={() => {
                socket.emit("verifyReport", { id: 2695506260470251, uid: "demo1" })
              }}
            ><i className="fa fa-check" /> Verify</button>
          </div>
        </div>

        <div id="googleMap">
          <img src={loading} className="map-loading" alt="loading" />
        </div>


      </div>
    </div>
  )
}

export default Dashboard