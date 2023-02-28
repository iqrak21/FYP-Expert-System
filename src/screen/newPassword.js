import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ClientNewPasswordScreen = () => {
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(password)
    }

    return (
        <div className="clientLogin ">


            <div className=" ">
                <div className='d-flex align-content-center flex-end justify-content-md-around justify-content-center' style={{ marginTop: "100px" }} >
                    <div className='cart shadow bg-white rounded col-sm-4 m-2'>
                        <form onSubmit={submitHandler} className="ibox-body p-3" id="login-form">
                            <h4 className="font-strong text-center pb-4 ">New Password</h4>
  <>
                                <div className="text-primary text-center h6">New Password Message</div>
                                <div className='text-center'>
                                    <Link to='/signin' className="btn btn-primary btn-sm" role="button">Continue to login</Link>
                                </div>
                            </>

                            <>
                                <div className="form-group mb-4">
                                    <input onChange={(e) => setPassword(e.target.value)} className="form-control form-control-line" type="password" name="password" placeholder="New Password" />
                                </div>

                                <div className="text-center pb-4">
                                    <button type='submit' className="btn btn-success btn-rounded btn-block">Submit</button>
                                </div>
                            </>




                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientNewPasswordScreen