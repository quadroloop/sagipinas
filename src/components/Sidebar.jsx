import React, { useState } from 'react'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
  faSignOutAlt,
  faMapMarkedAlt,
  faHospital,
  faNewspaper,
  faCog,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFedora,
} from '@fortawesome/free-brands-svg-icons'

import NavItem from './NavItem'

function Sidebar(props) {
  const [ collapsed, setCollapsed ] = useState(false)

  return (
    <div className={`sidebar ${collapsed && 'collapsed'}`}>
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
          News
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
        <li className="collapse-toggle" onClick={() => setCollapsed(!collapsed)}>
          <Fa icon={collapsed ? faAngleDoubleRight : faAngleDoubleLeft} />
        </li>
      </ul>
    </div>
  )
}

export default Sidebar