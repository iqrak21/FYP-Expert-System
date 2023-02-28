import React, { useState } from 'react';
import Navbar from './Navbar';
import uplaodImg from './assets/upload.png';
import { FaFileUpload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StartScreen = () => {
    const [file, setFile] = useState("")
    const [support, setSupport] = useState(1)
    const [apiKey, setApiKey] = useState("fp-growth-excel")

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(file);
        console.log(apiKey);
        console.log(support);
    }

    return (
        <>
            <Navbar />
            <div className="m-4">


                <div className='cart shadow bg-white rounded p-3  '>
                    <div className="row justify-content-around my-3">
                        <div className="col-sm-4 d-flex align-items-center justify-content-center">
                            <img width="40%" src={uplaodImg} />
                        </div>
                        <div className="col-sm-6">
                            <h3 className='text-muted text-center pb-3'>Import Dataset </h3>

                            <form onSubmit={submitHandler}>


                                <div className="form-group">
                                    <select onChange={(e) => setApiKey(e.target.value)} className="form-control border-top-0 border-left-0 border-right-0 bg-light rounded" id="exampleFormControlSelect1" required>
                                        <option disabled selected>Select File Type</option>
                                        <option value="fp-growth-json">JSON</option>
                                        <option value="fp-growth-excel">Excel</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <select onChange={(e) => setSupport(e.target.value)} className="form-control border-top-0 border-left-0 border-right-0 bg-light rounded" id="exampleFormControlSelect1" required>
                                        <option disabled selected>Select Support(Association Strength) </option>
                                        <option value="1">10%</option>
                                        <option value="2">20%</option>
                                        <option value="3">30%</option>
                                        <option value="4">40%</option>
                                        <option value="5">50%</option>
                                    </select>
                                </div>

                                <div className="form-group custom-file mb-3">
                                    <input type="file" onChange={(e) => setFile(e.target.files[0])} className="custom-file-input" id="customFile" accept="" />
                                    <label className="form-control rounded border-top-0 border-left-0 border-right-0 custom-file-label bg-light rounded" htmlFor="customFile">{file ? file?.name : "Choose file"} </label>
                                </div>


                                <div className="text-center">
                                    <button type="submit" className="btn btn-success">
                                        <Link to="/frequent-itemset" className='text-white text-decoration-none'>  <FaFileUpload /> Uplaod File</Link>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default StartScreen