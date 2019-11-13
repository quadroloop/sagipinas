import React from 'react'
import io from 'socket.io-client';
import sound from '../assets/deduction.mp3';


const socket = io('https://sagipinas.herokuapp.com');


socket.on("report", (data) => {
  document.getElementById('alert-btn').click();
  document.getElementById('notif').play();
})

const Notif = () => {
  return (
    <div>
      <audio src={sound} id="notif" />
    </div>
  )
}

export default Notif;