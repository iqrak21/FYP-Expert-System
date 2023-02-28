import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Navbar from './Navbar';
import '../../App.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const RequestPremiumScreen = (props) => {
    let serNo = 0;

    return (
        <div className='containerMain'>

            <Navbar />
            <main>

                <div className="m-4">
                    <div className='cart shadow bg-white rounded p-3'>


                        {/* filter */}
                        <div className='row justify-content-between'>
                            <form className='col-sm-4'>
                                <div className="form-group">
                                    <input type="text" className="form-control rounded bg-light" id="myInput" placeholder="Search" />
                                </div>
                            </form>
                        </div>


                        <div className='table-responsive '>
                            <table className="table table-bordered table table-hover">
                                <thead>
                                    <tr className='table-active'>
                                        <th scope="col">S No.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>

                                <tbody id="myTable">

                                    <tr>
                                        <th scope="row">{serNo += 1}</th>
                                        <td>
                                            <p>User</p>

                                        </td>
                                        <td>user@gmail.com</td>
                                        <td>2-04-2023</td>
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

                                            <button className='btn btn-info  mx-2 ' style={{ cursor: "pointer" }} onClick={() => { window.alert("Mark as read?") }}>Seen</button>

                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                        
                    </div>
                </div>


            </main>
        </div>
    )
}

export default RequestPremiumScreen