import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Login.css';

const ClientSignUpScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(password)
    }

    return (
        <div className="clientLogin ">

            <div className=" ">
                <div className='d-flex align-content-center flex-end justify-content-md-around justify-content-center' style={{ marginTop: "100px" }} >
                    <div className='cart shadow bg-white rounded col-sm-4 m-2'>
                        <form onSubmit={submitHandler} className="ibox-body p-3" id="login-form">
                            <h4 className="font-strong text-center pb-4 ">Signup</h4>



                            <div className="form-group mb-4">
                                <input className="form-control form-control-line" onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name" required />
                            </div>
                            <div className="form-group mb-4">
                                <input className="form-control form-control-line" onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="form-group mb-4">
                                <input className="form-control form-control-line" onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" required />
                            </div>

                            <div className="text-center pb-4">
                                <button type='submit' className="btn btn-success btn-rounded btn-block">Submit</button>
                            </div>
                            <div className="text-center">
                                have an Account? <Link to="/signin" >Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientSignUpScreen