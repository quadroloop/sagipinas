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
          <button className="test-btn" onClick={() => {
            socket.emit("verifyReport", { id: 2695506260470251 })
          }}>Verify</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard