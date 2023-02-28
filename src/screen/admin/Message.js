import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Navbar from './Navbar';

const AdminMessageScreen = () => {

    let serNo = 0

    return (
        <div className='containerMain'>
            <Navbar />
            <main>

                <div className="m-4">
                    <div className='cart shadow bg-white rounded p-3'>


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

                                            <p>Username</p>

                                        </td>
                                        <td>email</td>
                                        <td>date</td>
                                        <td>

                                            <span className="fas fa-eye fa-lg text-success mx-2" data-toggle="modal" onClick={() => { window.alert("Message") }} style={{ cursor: "pointer" }} ></span>

                                            <button className='btn btn-info btn-sm' style={{ cursor: "pointer" }} onClick={() => { window.alert("Mark as read?") }}>Seen</button>

                                        </td>

                                        <div className="modal fade"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">data name</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
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

export default AdminMessageScreen