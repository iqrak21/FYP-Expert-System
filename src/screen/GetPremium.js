import React from 'react';
import Navbar from './Navbar';
import basic from './assets/basic.svg';
import premium from './assets/premium.svg';

const GetPremiumScreen = () => {
    return (
        <>
            <Navbar />
            <div className="m-4">
                <h1 className='text-center text-primary'>DO MORE WITH PREMIUM</h1>
                <div className="row justify-content-around my-3">
                    <div className="col-sm-5 p-3 cart shadow bg-white rounded  align-items-center justify-content-center text-center">
                        <img width="30%" src={basic} />
                        <h4 className='pb-2'>Basic Account</h4>
                        <div className=' border-top'>
                            <p className='pt-3'>Maximum File Size: 5 MB</p>
                            <p>No of uploads: 3</p>
                        </div>
                    </div>
                    <div className="col-sm-5 p-3 cart shadow bg-white rounded align-items-center justify-content-center text-center">
                        <img width="30%" src={premium} />
                        <h4 className='pb-2'>Premium Account</h4>
                        <div className=' border-top'>
                            <p className='pt-3'>Maximum File Size: No Limit</p>
                            <p >No of uploads: Unlimited</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GetPremiumScreen