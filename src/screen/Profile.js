import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../App.css';
import Navbar from "./Navbar";
import uplaodImg from './assets/setting.png';

const ProfileScreen = () => {

    const [currentPassword, setCurrentPassword] = useState("")
    const [matchPassword, setMatchPassword] = useState("")
    const [updatePassword, setUpdatePassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(currentPassword);
        console.log(updatePassword)
    }

    return (
        <div>
            <Navbar />
            <main >

                <div className=" m-4">
                    <div className='cart shadow bg-white rounded'>
                        <div className='border border-top-0 border-left-0 border-right-0 '>
                            <h5 className="text-muted text-center pt-4 pb-4 pl-4">Change Password</h5>
                        </div>

                        <div className="row justify-content-around my-3" >
                            <div className="col-sm-4 d-flex align-items-center justify-content-center">
                                <img width="40%" src={uplaodImg} />
                            </div>

                            <form onSubmit={submitHandler} className='col-sm-6 py-3'>


                                <div className="form-group">
                                    <input type="password" onChange={(e) => setCurrentPassword(e.target.value)} value={currentPassword} className="form-control" id="exampleInputPassword1" placeholder="Current Password" required />
                                </div>
                                <div className="form-group py-3">
                                    <input type="password" onChange={(e) => setUpdatePassword(e.target.value)} value={updatePassword} className="form-control" id="exampleInputPassword2" placeholder="New Password" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" onChange={(e) => setMatchPassword(e.target.value)} value={matchPassword} className="form-control is-invalid" id="validationServer03" placeholder="Confirm New Password" required />

                                </div>
                                <div className='pt-4 text-center'>
                                    <button type="submit" className="btn btn-success mr-3" style={{ width: '100px' }} >Save</button>
                                    <button className="btn btn-secondary" style={{ width: '100px' }}>Cancel</button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProfileScreen