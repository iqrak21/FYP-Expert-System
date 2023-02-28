import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Navbar from './Navbar';
import '../../App.css';

const UserFileList = () => {
    let serNo = 0;
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
                                        <th scope="col">File</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Created At</th>
                                    </tr>
                                </thead>

                                <tbody id="myTable">

                                    <tr>
                                        <th scope="row">{serNo += 1}</th>
                                        <td>
                                            <a ><i class="fa fa-file-download fa-lg text-primary"></i></a>

                                        </td>
                                        <td>
                                            JSON
                                        </td>
                                        <td>27-02-2023</td>
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

export default UserFileList