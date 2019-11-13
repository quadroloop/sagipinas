import React, { useState } from 'react'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import {
  // faSignOutAlt,
  faMapMarkedAlt,
  faNewspaper,
  faCog,
  faBars,
  faList,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/img/logo.png'
import Notif from './Notify';


import NavItem from './NavItem'

function Sidebar(props) {
  const [collapsed, setCollapsed] = useState(false)
  const [toggled, setToggled] = useState(false)

  return (
    <React.Fragment>
      <div
        className={`sidebar ${collapsed && 'collapsed'} ${toggled && 'toggled'}`}
      >
        <div className="brand">
          <h2>
            <img src={logo} className="logo" alt="logo" />
            <br />
            <span>Sagi<strong>Pin</strong>as</span>
          </h2>
        </div>
        <ul className="sidebar-nav mid">
          <li className="title">
            Menu
          </li>
          <NavItem to="/" icon={faMapMarkedAlt}>
            Dashboard
          </NavItem>
          <NavItem to="/Incidents" icon={faList}>
            Incidents
          </NavItem>
          <NavItem to="/news" icon={faNewspaper}>
            News
          </NavItem>
          <NavItem to="/settings" icon={faCog}>
            Settings
          </NavItem>
        </ul>

        <Notif />

        <ul className="sidebar-nav bottom">
          {/* <li>
            <Link>
              <Fa icon={faSignOutAlt} />
              <span>
                Logout
              </span>
            </Link>
          </li> */}
          <li className="collapse-toggle" onClick={() => setCollapsed(!collapsed)}>
            <Fa icon={collapsed ? faAngleDoubleRight : faAngleDoubleLeft} />
          </li>
        </ul>
      </div>

      <div className="sidebar-toggle" onClick={() => setToggled(!toggled)}>
        <Fa icon={faBars} />
      </div>
    </React.Fragment>
  )
}

export default Sidebar