import React from 'react'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import {
  faSignOutAlt,
  faMapMarkedAlt,
  faHospital,
  faNewspaper,
  faCog,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFedora,
} from '@fortawesome/free-brands-svg-icons'

function Sidebar(props) {
  return (

    <div className="sidebar">
    <div className="brand">
      <h1>
        <Fa icon={faFedora} />
      </h1>
    </div>
    <ul className="sidebar-nav mid">
      <li>
        <Fa icon={faMapMarkedAlt} />
        <span>
          Dashboard
        </span>
      </li>
      <li>
        <Fa icon={faHospital} />
        <span>
          Facilities
        </span>
      </li>
      <li>
        <Fa icon={faNewspaper} />
        <span>
          News
        </span>
      </li>
      <li>
        <Fa icon={faCog} />
        <span>
          Settings
        </span>
      </li>
    </ul>

    <ul className="sidebar-nav">
      <li>
        <Fa icon={faSignOutAlt} /> 
        <span>
          Logout
        </span>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar