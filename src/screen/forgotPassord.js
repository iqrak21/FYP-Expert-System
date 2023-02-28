import React, { useState } from 'react'

const ClientForgotPassordScreen = () => {
    const [email, setEmail] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email)
    }

    return (
        <div className="clientLogin ">

            <div className=" ">
                <div className='d-flex align-content-center flex-end justify-content-md-around justify-content-center' style={{ marginTop: "100px" }} >
                    <div className='cart shadow bg-white rounded col-sm-4 m-2'>
                        <form onSubmit={submitHandler} className="ibox-body p-3" id="login-form">
                            <h4 className="font-strong text-center">Reset Password</h4>
                            <p className='text-center'>Enter your email address, we will send you instructions to reset your password </p>


                            <div className="form-group mb-4">
                                <input onChange={(e) => setEmail(e.target.value)} className="form-control form-control-line" type="email" name="email" placeholder="Email" required />
                            </div>

                            <div className="text-center pb-4">
                                <button type='submit' className="btn btn-success btn-rounded btn-block">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientForgotPassordScreen