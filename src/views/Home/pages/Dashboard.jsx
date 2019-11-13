import React, { useEffect } from 'react'
import PerfectScrollbar from 'perfect-scrollbar'
import loading from '../../../assets/img/loading.gif'
import axios from 'axios';
import moment from 'moment';
import InfoCard from './InfoCard'

import io from 'socket.io-client';


const socket = io('https://sagipinas.herokuapp.com');




function Dashboard(props) {



  const loadFeed = () => {
    if (document.contains(document.getElementById('feed'))) {
      document.getElementById('feed').innerHTML = '';
      axios.get('https://sagipinas.herokuapp.com/incidents')
        .then(res => {
          localStorage.incidents = JSON.stringify(res.data)

          res.data.reverse().forEach(feed => {
            if (feed.status === 'unverified') {
              if (document.contains(document.getElementById('feed'))) {
                document.getElementById('feed').innerHTML += `
            <div class="card" onclick="cardSelect('${feed.uid}')" id="${feed.uid}">
            <span class="pulseDot"></span>
          <span class="tag"><i class="fa fa-warning"></i> ${feed.type === 'others' ? "Accident" : feed.type}</span>
            <span class="time-tag"><i className="fa fa-clock-o"></i> ${moment(feed.timestamp).fromNow()}</span>
            <p class="detail">
              ${feed.details}
             </p>
            </div>
            `
              }
            }
          })
        })
    }
  }

  socket.on("report", (data) => {
    loadFeed();
  })

  useEffect(() => {
    new PerfectScrollbar('.feed')
    new PerfectScrollbar('.info-body')

    loadFeed();

    if (!localStorage.sound) {
      localStorage.sound = "enabled";
    }

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
        <InfoCard />
        <div id="googleMap">
          <img src={loading} className="map-loading" alt="loading" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard