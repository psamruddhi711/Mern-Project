import React from 'react'
import {Link} from 'react-router'
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" href="#">WebSiteName</Link>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to="/home">Home</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/courses"> courses</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="#"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="#"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar
