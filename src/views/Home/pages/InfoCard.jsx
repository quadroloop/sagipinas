import React from 'react'
import io from 'socket.io-client';
import swal from 'sweetalert2';


const socket = io('https://sagipinas.herokuapp.com');

const InfoCard = () => {

  const verifyIncident = () => {
    swal.fire({
      title: "Confirm Verification",
      text: `Are you sure you want to confirm this Incident, doing so would notify the user
      the rescue autorities are on the way to their location.`,
      showCancelButton: true,
    })
      .then(res => {
        socket.emit("verifyReport", ({ uid: localStorage.uid, id: parseInt(localStorage.psid) }))
        document.getElementById('infoCard').style.display = "none";
        document.getElementById(localStorage.uid).remove();
        swal.fire("Report Verified!", "The report has been successfully verified. you can view this actions in the incidents tab.", "success");
      })
  }



  return (
    <div className="info-card animated slideInUp fastest" id="infoCard">
      <h3><i className="fa fa-map-marker marker"></i> <span id="location"></span></h3>
      <p className="hazard-tag"><i className="fa fa-bullseye"></i> <span id="hazard-type"></span></p>
      <span className="time-tag"><i className="fa fa-clock-o"></i> <span id="report-time"></span></span>
      <div className="info-body">

        <p className="detail-text"><i className="fa fa-chevron-right"></i> Report Details</p>
        <div className="detail-card" id="report-details">
        </div>
        <hr />

        <center>
          <p className="detail-text"><i className="fa fa-crosshairs"></i> Complete Geolocation</p>
        </center>
        <hr />

        <div id="geolocation">
        </div>

      </div>
      <div className="info-footer">
        <button className="verify"
          onClick={() => {
            verifyIncident();
          }}
        ><i className="fa fa-check" /> Verify</button>
      </div>
    </div>
  )
}

export default InfoCard;