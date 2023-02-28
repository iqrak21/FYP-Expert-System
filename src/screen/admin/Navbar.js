import React, {useState } from "react";
import {NavLink} from "react-router-dom";
import ProfileImg from '../assets/profile.png'
import '../style/Navbar.css'
import '../style/Sidebar.css'


const Navbar = () => {
    const [sidebarOpen, setsidebarOpen] = useState(false);
    const openSidebar = () => {
        setsidebarOpen(true);
    };

    const closeSidebar = () => {
        setsidebarOpen(false);
    };
    return (
        <>

            <nav className="navbar_main shadow">
                <div className="nav_icon" onClick={() => openSidebar()}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <div className="navbar__left">

                </div>
                <div className="navbar__right">

                    <div className='chip'>
                        <span className="dropdown">
                            <img src={ProfileImg} style={{ cursor: 'pointer' }} className="rounded-circle dropdown-toggle navImg" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <div style={{ width: '200px', margin: 'auto' }}>
                                    <img src={ProfileImg} className="card-img-top rounded-circle" style={{ width: '100px', display: "block", margin: 'auto' }} alt="Card image cap" />
                                    <h5 className="card-title text-center">Admin name</h5>
                                    <div className="card-body text-center">

                                        <button className=" btn btn-danger shadow rounded"> <i className="fas fa-sign-out-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span className="text-dark mx-2 h6">Admin name</span>
                    </div>
                </div>
            </nav>

            <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
                <div className="sidebar__title">
                    <div className="sidebar__img">

                        <h4 className="title">ADMIN</h4>
                    </div>
                    <i
                        onClick={() => closeSidebar()}
                        className="fa fa-times"
                        id="sidebarIcon"
                        aria-hidden="true"
                    ></i>
                </div>

                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <NavLink to='/admin/dashboard' activeclassname='text-success'>
                            <i className="fa fa-home icon"> </i>
                            <p>Dashboard</p>
                        </NavLink>
                    </div>
                </div>



                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <NavLink to='/admin/request-premium' activeclassname='text-success'>

                            <i className="fas fa-crown icon"> </i>
                            <p>Request Premium</p>
                        </NavLink>
                    </div>
                </div>

                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <NavLink to='/admin/user' activeclassname='text-success'>
                            <i className="fa fa-user icon"> </i>
                            <p>User</p>
                        </NavLink>
                    </div>
                </div>

                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <NavLink to='/admin/message' activeclassname='text-success'>

                            <i className="fa fa-comment icon"> </i>
                            <p>Message</p>
                        </NavLink>
                    </div>
                </div>

                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <NavLink to='/admin/settings' activeclassname='text-success'>
                            <i className="fa fa-cog icon"> </i>
                            <p>Settings</p>
                        </NavLink>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Navbar