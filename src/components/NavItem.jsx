import React from 'react'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { Link, withRouter, } from 'react-router-dom'

function NavItem(props) {
  const { location, icon, to, children } = props

  return (
    <li className={location.pathname === to && 'active'}>
      <Link to={to}>
        <Fa icon={icon} />
        <span>
          { children }
        </span>
      </Link>
    </li>
  )
}

export default withRouter(NavItem)