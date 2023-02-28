import React from 'react';
import { Link } from 'react-router-dom';

const verified = () => {
    return (
        <>

            <div class="d-flex justify-content-center align-items-center vh-100">
                <div class="spinner-border text-primary " role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>

            <div className="jumbotron text-center">
                <h1 className="display-3">Thank You!</h1>



                <p className="lead">
                    <Link to='/signin' className="btn btn-primary btn-sm" role="button">Continue to login</Link>
                </p>
            </div>
        </>
    )
}

export default verified