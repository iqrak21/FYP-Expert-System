import React, { useState } from 'react';
import Navbar from '../admin/Navbar';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const AddUserScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [accessLevel, setAccessLevel] = useState(1);
    const [visible, setVisible] = useState(true)

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name, email, password, visible)

    }
    return (
        <div className='containerMain'>
            <Navbar />
            <main>
                <form onSubmit={submitHandler} className='card text-dark bg-white shadow rounded-lg mb-3' style={{ maxWidth: '500px', margin: '20px auto' }}>
                    <h5 className="card-header text-center text-dark">Add User </h5>
                    <div className="card-body">


                        <div className="form-group">
                            {/* <label className="card-title bg-info w-100 text-white" for="name">Name:</label> */}
                            <input type="text" className="form-control border-top-0 border-left-0 border-right-0" id="name" placeholder="Enter Name" name="name" onChange={(e) => setName(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            {/* <label className="card-title bg-info w-100 text-white" for="email">email:</label> */}
                            <input type="email" className="form-control border-top-0 border-left-0 border-right-0" id="email" placeholder="Enter Email" name="Email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            {/* <label className="card-title bg-info w-100 text-white" for="pwd">Password:</label> */}
                            <input type="password" className="form-control border-top-0 border-left-0 border-right-0" id="pwd" placeholder="Enter password" name="pswd" onChange={(e) => setPassword(e.target.value)} required />
                        </div>

                        <div className="form-group" >
                            <BootstrapSwitchButton
                                checked={visible}
                                onlabel='Super Admin'
                                onstyle='success'
                                offlabel='Sub Admin'
                                offstyle='info'
                                style='w-100'
                                onChange={() => setVisible(!visible)}
                            />
                        </div>
                        <button type="submit" style={{ width: '100%' }} className="btn btn-success shadow rounded-lg font-weight-bold">Submit</button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default AddUserScreen