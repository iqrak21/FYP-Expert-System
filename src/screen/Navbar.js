import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProfileImg from './assets/profile.png';
import { BiLogOut } from 'react-icons/bi';
import { FaCrown } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm ">
      <NavLink to="/" className="navbar-brand mb-0 h1 mx-2 text-success ">Expert System</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fa fa-bars "></span>
      </button>



      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to="/contact" className="nav-link mb-0 h5  mx-2" >Get Support </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/get-premium" className="nav-link mb-0 h5  mx-2" >Get Premium </NavLink>
          </li>
        </ul>


        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <div className='chip'>
              <span className="dropdown">
                <img src={ProfileImg} style={{ cursor: 'pointer' }} className="rounded-circle dropdown-toggle navImg" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <div style={{ width: '200px', margin: 'auto' }}>
                    <img src={ProfileImg} className="card-img-top rounded-circle" style={{ width: '100px', display: "block", margin: 'auto' }} alt="Card image cap" />
                    <h5 className="card-title text-center">username</h5>
                    <div className="card-body text-center">

                      <button className=" btn btn-danger shadow rounded"><BiLogOut /></button>
                      <Link to="/profile" className=" btn btn-success shadow rounded mx-2"><FaUser /></Link>
                    </div>
                  </div>
                </div>
              </span>
              <span className="text-dark mx-2 h6">Basic</span>
            </div>
          </li>
          <li className="nav-item active my-1">
            <button className=" btn btn-success shadow rounded mx-2"><FaCrown /></button>
          </li>
         
        </ul>

      </div>
    </nav>
  )
}

export default Navbar