import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Navbar from './Navbar';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { FaFile } from 'react-icons/fa';
import FrequentChartScreen from './chart/FrequentChart';
import { Link } from 'react-router-dom';

const DetailScreen = () => {
    const [visibility, setVisibility] = useState(true)
    return (
        <>
            <Navbar />
            <div className="m-4">
                <div className='cart shadow bg-white rounded p-3 '>
                    {/* <div>
                    <h5 className="text-muted">Title</h5>
                </div> */}

                    {/* filter */}

                    <div className='row justify-content-between'>
                        <form className='col-sm-4'>
                            <div className="form-group">
                                <input type="text" className="form-control rounded bg-light" id="myInput" placeholder="Search" />
                            </div>
                        </form>
                        <div className="mr-3">
                            <button type="button" className="btn btn-primary btn-sm mx-1" >
                                <Link to="/" className='text-white text-decoration-none'><FaFile /> Uplaod Another File</Link>
                            </button>

                            <ReactHTMLTableToExcel
                                id="test-table-xls-button"
                                className="download-table-xls-button btn btn-success mx-1 fas fa-download "
                                //className="download-table-xls-button"
                                table="table-to-xls"
                                filename="product-association"
                                sheet="tablexls"
                                style={{ "textDecoration": "none", "color": "#fff" }}
                                buttonText=" Export "
                            />


                        </div>
                    </div>

                    <div>

                        <ul className="nav nav-tabs md-tabs nav-justified rounded-lg mb-3" id="myTab" role="tablist">
                            <li className="nav-item waves-effect waves-light" onClick={() => setVisibility(true)}>
                                <a className="nav-link active" id="table-association-tab-md" data-toggle="tab" href="#table-association-md" role="tab" aria-controls="table-association-md" aria-selected="true">Tablular View <span className="badge badge-primary"></span></a>
                            </li>

                            <li className="nav-item waves-effect waves-light" onClick={() => setVisibility(false)} >
                                <a className="nav-link" id="graph-association-tab-md" data-toggle="tab" href="#graph-association-md" role="tab" aria-controls="graph-association-md" aria-selected="false">Graphical View</a>
                            </li>
                        </ul>
                        {visibility ?

                            <div className='table-responsive '>
                                <table id="table-to-xls" className="table table-bordered table table-hover">
                                    <thead>
                                        <tr className='table-active'>
                                            <th scope="col">S No.</th>
                                            <th scope="col">Association Items</th>
                                        </tr>
                                    </thead>
                                    <tbody id="myTable">
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Tarang powder sashay - Candy Rs.1</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Mezan Canola Oil 3L - White Sugar</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Mezan Canola Oil 3L - Dall Mongi 500g</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Mezan Canola Oil 3L - Dall Mongi 500g - White Sugar</td>
                                        </tr>
                                    </tbody>

                                </table>

                            </div>
                            :
                            <div>
                                <FrequentChartScreen />
                            </div>
                        }
                    </div>
                </div>

            </div>

        </>
    )
}

export default DetailScreen