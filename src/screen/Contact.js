import React, { useState } from 'react';
import Navbar from './Navbar';
import contactImg from './assets/contact.png';
import { FaLongArrowAltRight } from 'react-icons/fa';

const ContactScreen = () => {
    const [message, setMessage] = useState("")
    const [file, setFile] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(message);
        console.log(file)
    }
    return (
        <>
            <Navbar />
            <div className="m-4">
                <div className='cart shadow bg-white rounded p-3 '>
                    <div className="row justify-content-around my-3">
                        <div className="col-sm-4 d-flex align-items-center justify-content-center">
                            <img width="60%" src={contactImg} />
                        </div>

                        <div className="col-sm-6">
                            <h3 className='text-muted text-center pb-3'>Get in touch </h3>

                            <form onSubmit={submitHandler}>


                                <div className="form-group custom-file mb-3">
                                    <input onChange={(e) => setFile(e.target.files[0])} type="file" className="custom-file-input " id="customFile" />
                                    <label className="form-control rounded border-top-0 border-left-0 border-right-0 custom-file-label bg-light rounded" htmlFor="customFile">  "Choose file (Optional)" </label>
                                </div>

                                <div className="form-group">
                                    <textarea onChange={(e) => setMessage(e.target.value)} className="form-control rounded border-top-0 border-left-0 border-right-0 bg-light rounded" id="exampleFormControlTextarea1" placeholder="Message" rows="3" required />
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-success  text-center">
                                        Send <FaLongArrowAltRight />
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

export default ContactScreen