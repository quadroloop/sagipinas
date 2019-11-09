import React from 'react'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
  faSignOutAlt,
  faMapMarkedAlt,
  faHospital,
  faNewspaper,
  faCog,
  // faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFedora,
} from '@fortawesome/free-brands-svg-icons'

import NavItem from './NavItem'

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="brand">
        <h1>
          <Fa icon={faFedora} />
        </h1>
      </div>
      <ul className="sidebar-nav mid">
        <li className="title">
          Menu
        </li>
        <NavItem to="/" icon={faMapMarkedAlt}>
          Dashboard
        </NavItem>
        <NavItem to="/facilities" icon={faHospital}>
          Facilities
        </NavItem>
        <NavItem to="/news" icon={faNewspaper}>
          Newspaper
        </NavItem>
        <NavItem to="/settings" icon={faCog}>
          Settings
        </NavItem>
      </ul>

      <ul className="sidebar-nav">
        <li>
          <Link>
            <Fa icon={faSignOutAlt} /> 
            <span>
              Logout
            </span>
          </Link>
        </li>
        {/* <li className="collapse-toggle">
          <Fa icon={faAngleDoubleLeft} />
        </li> */}
      </ul>
    </div>
  )
}

export default Sidebar