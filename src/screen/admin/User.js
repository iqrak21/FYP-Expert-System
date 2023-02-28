import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Navbar from './Navbar';
import '../../App.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { Link } from 'react-router-dom';

const User = () => {
    let allSerNo = 0
    let premiumSerNo = 0
    let basicSerNo = 0
    let deactivateSerNo = 0
    let adminSerNo = 0
    return (
        <div className='containerMain'>

            <Navbar />
            <main>

                <div className="m-4">
                    <div className='cart shadow bg-white rounded p-3'>

                        <div className='row justify-content-between '>
                            <form className='col-sm-4 ml-2'>
                                <div className="form-group">
                                    <input type="text" className="form-control rounded bg-light" id="myInput" placeholder="Search" />
                                </div>
                            </form>
                            <div className="mr-3">
                                {
                                    <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#uploadFile">
                                        <Link to="/admin/add-user"> <i className="fas fa-user-plus text-white" > Add user </i></Link>
                                    </button>
                                }

                            </div>
                        </div>

                        <section className="mx-2 pb-3">

                            <ul className="nav nav-tabs md-tabs nav-justified rounded-lg" id="myTabMD" role="tablist">

                                <li className="nav-item waves-effect waves-light">
                                    <a className="nav-link active" id="all-tab-md" data-toggle="tab" href="#all-md" role="tab" aria-controls="all-md" aria-selected="true">All Users <span className="badge badge-primary"></span></a>
                                </li>

                                <li className="nav-item waves-effect waves-light">
                                    <a className="nav-link" id="premium-tab-md" data-toggle="tab" href="#premium-md" role="tab" aria-controls="premium-md" aria-selected="false">Premium Users <span className="badge badge-primary"></span></a>
                                </li>

                                <li className="nav-item waves-effect waves-light">
                                    <a className="nav-link" id="basic-tab-md" data-toggle="tab" href="#basic-md" role="tab" aria-controls="basic-md" aria-selected="false">Basic Users <span className="badge badge-primary"></span></a>
                                </li>

                                <li className="nav-item waves-effect waves-light">
                                    <a className="nav-link" id="deactivate-tab-md" data-toggle="tab" href="#deactivate-md" role="tab" aria-controls="deactivate-md" aria-selected="false">Deactivate Users <span className="badge badge-primary"></span></a>
                                </li>
                                {

                                    <li className="nav-item waves-effect waves-light">
                                        <a className="nav-link" id="admin-tab-md" data-toggle="tab" href="#admin-md" role="tab" aria-controls="admin-md" aria-selected="false">Admin Accounts <span className="badge badge-primary"></span></a>
                                    </li>
                                }
                            </ul>

                            <div className="tab-content card pt-2" id="myTabContentMD">

                                <div className="tab-pane fade show active" id="all-md" role="tabpanel" aria-labelledby="all-tab-md">
                                    <div className='table-responsive '>
                                        <table className="table table-bordered table table-hover">
                                            <thead>
                                                <tr className='table-active'>
                                                    <th scope="col">S No.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody id="myTable">

                                                <tr>
                                                    <th scope="row">{allSerNo += 1}</th>
                                                    <td>user1</td>
                                                    <td>user1@gmail.com</td>
                                                    <td className='text-success'>Premium</td>
                                                    <td >
                                                        <span >
                                                            <BootstrapSwitchButton
                                                                checked={true}
                                                                disabled={true}
                                                                onlabel='Premium User'
                                                                onstyle='success'
                                                                offlabel='Basic User'
                                                                offstyle='danger'
                                                                style='w-50'
                                                            />
                                                        </span>

                                                        <span className='fa fa-user-minus mx-2 fa-lg text-danger' style={{ cursor: "pointer" }} onClick={() => { window.alert("Are you sure to deactivate this user?") }}></span>
                                                        <Link className='fa fa-list fa-lg' to={`/admin/user-file`} ></Link>

                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">{allSerNo += 1}</th>
                                                    <td>user2</td>
                                                    <td>user2@gmail.com</td>
                                                    <td className='text-primary'>Basic</td>


                                                    <td >

                                                        <span >


                                                            <BootstrapSwitchButton
                                                                checked={false}
                                                                disabled={true}
                                                                onlabel='Premium User'
                                                                onstyle='success'
                                                                offlabel='Basic User'
                                                                offstyle='danger'
                                                                style='w-50'
                                                            />


                                                        </span>

                                                        <span className='fa fa-user-minus mx-2 fa-lg text-danger' style={{ cursor: "pointer" }} onClick={() => { window.alert("Are you sure to deactivate this user?") }}></span>
                                                        <Link className='fa fa-list fa-lg' to={`/admin/user-file`} ></Link>

                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>


                                    </div>
                                </div>

                                <div className="tab-pane fade show" id="premium-md" role="tabpanel" aria-labelledby="premium-tab-md">
                                    <div className='table-responsive '>
                                        <table className="table table-bordered table table-hover">
                                            <thead>
                                                <tr className='table-active'>
                                                    <th scope="col">S No.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody id="myTable">

                                                <tr>
                                                    <th scope="row">{premiumSerNo += 1}</th>
                                                    <td>user1</td>
                                                    <td>user1@gmail.com</td>

                                                    <td className='text-success'>Premium</td>
                                                    <td >
                                                        <span>


                                                            <BootstrapSwitchButton
                                                                checked={true}
                                                                disabled={true}
                                                                onlabel='Premium User'
                                                                onstyle='success'
                                                                offlabel='Basic User'
                                                                offstyle='danger'
                                                                style='w-50'
                                                            />


                                                        </span>
                                                        <span className='fa fa-user-minus mx-2 fa-lg text-danger' style={{ cursor: "pointer" }} onClick={() => { window.alert("Are you sure to deactivate this user?") }}></span>
                                                        <Link className='fa fa-list fa-lg' to={`/admin/user-file`} ></Link>
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>


                                    </div>
                                </div>

                                <div className="tab-pane fade show" id="basic-md" role="tabpanel" aria-labelledby="basic-tab-md">
                                    <div className='table-responsive '>
                                        <table className="table table-bordered table table-hover">
                                            <thead>
                                                <tr className='table-active'>
                                                    <th scope="col">S No.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody id="myTable">

                                                <tr>
                                                    <th scope="row">{basicSerNo += 1}</th>
                                                    <td>user2</td>
                                                    <td>user@gmail.com</td>

                                                    <td className='text-primary'>Basic</td>
                                                    <td >

                                                        <span>
                                                            <BootstrapSwitchButton
                                                                checked={false}
                                                                disabled={true}
                                                                onlabel='Premium User'
                                                                onstyle='success'
                                                                offlabel='Basic User'
                                                                offstyle='danger'
                                                                style='w-50'
                                                            />
                                                        </span>
                                                        <span className='fa fa-user-minus mx-2 fa-lg text-danger' style={{ cursor: "pointer" }} onClick={() => { window.alert("Are you sure to deactivate this user?") }}></span>
                                                        <Link className='fa fa-list fa-lg' to={`/admin/user-file`}></Link>
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>


                                    </div>
                                </div>

                                <div className="tab-pane fade show" id="deactivate-md" role="tabpanel" aria-labelledby="deactivate-tab-md">
                                    <div className='table-responsive '>
                                        <table className="table table-bordered table table-hover">
                                            <thead>
                                                <tr className='table-active'>
                                                    <th scope="col">S No.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody id="myTable">

                                                <tr>
                                                    <th scope="row">{deactivateSerNo += 1}</th>
                                                    <td>user</td>
                                                    <td>user@gmail.com</td>
                                                    <td className='text-success'>Premium</td>


                                                    <td >
                                                        <span className='fa fa-user-check mx-2 fa-lg text-success' style={{ cursor: "pointer" }} onClick={() => { window.alert("Are you sure to activate this user?") }}></span>
                                                        <Link className='fa fa-list fa-lg' to={`/admin/user-file`} ></Link>
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>


                                    </div>
                                </div>

                                <div className="tab-pane fade show" id="admin-md" role="tabpanel" aria-labelledby="admin-tab-md">
                                    <div className='table-responsive '>
                                        <table className="table table-bordered table table-hover">
                                            <thead>
                                                <tr className='table-active'>
                                                    <th scope="col">S No.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody id="myTable">

                                                <tr>
                                                    <th scope="row">{adminSerNo += 1}</th>
                                                    <td>admin</td>
                                                    <td>admin@gmail.com</td>
                                                    <td className='text-success'>Super Admin</td>


                                                    <td >

                                                        <span className='fa fa-user-minus mx-2 fa-lg text-danger' style={{ cursor: "pointer" }} onClick={() => { window.alert("Are you sure to deactivate this user?") }}></span>



                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>


                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default User