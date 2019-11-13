import React from 'react'

function Settings(props) {

  const toggleSound = () => {

    if (localStorage.sound === "enabled") {
      localStorage.sound = "disabled";
      document.getElementById('sound-btn').innerHTML = `<i class="fa fa-bell-o"></i> Enable Sound`
    } else {
      localStorage.sound = "enabled";
      document.getElementById('sound-btn').innerHTML = `<i class="fa fa-bell-slash"></i> Disable Sound`

    }


  }

  return (
    <div className="settings-page">
      <h1><i className="fa fa-cog"></i> Settings</h1>
      <div className="divider"></div>
      <p className="sub-title">Configure your dashboard.</p>

      <p>Sound Settings:</p>

      {
        localStorage.sound === "enabled" ?
          <button onClick={() => { toggleSound() }} id="sound-btn"><i className="fa fa-bell-slash"></i> Disable Sound</button>
          :
          <button onClick={() => { toggleSound() }} id="sound-btn"><i className="fa fa-bell-o"></i> Enable Sound</button>
      }

      <hr />


      <div class="about">
        <h2>About the project:</h2>
        <p>
          <strong>SagiPinas</strong> is a Web platform for disaster response and risk reduction, which leverages
          the free availability of Facebook Messenger and uses it as a bridge to allow victims of disasters and accidents
          to reach out and reveal their location without requiring full access of the internet. This system is for demonstration puroposes only.
          And is the official entry for <strong>Angat.io Hackathon 2019 : The Philippines Debugged</strong>.
        </p>
        <p>Created by: <strong>Hybrid Theory</strong></p>
        <ul>
          <li>Bryce Narciso C. Mercines</li>
          <li>Bren Aviador</li>
          <li>John Bernard Paragas</li>
        </ul>
      </div>

    </div>
  )
}

export default Settings