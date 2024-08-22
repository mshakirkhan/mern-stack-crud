import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {name, email, country})
        .then(result => {
            console.log(result);
            navigate("/");
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="container mt-5">
                <h2 className='mb-5'>Add New User</h2>
                <form className="form-horizontal" onSubmit={submitHandler}>
                    <div className="form-group mb-3">
                        <div className="col-md-3">
                            <label className="control-label" htmlFor="name">Full Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" onChange={(e) => setName(e.target.value)} required />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="col-md-3">
                            <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="col-md-3">
                            <label className="control-label col-sm-2" htmlFor="email">Country:</label>
                            <input type="text" className="form-control" id="country" placeholder="Enter Country" name="country" onChange={(e) => setCountry(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group">        
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-dark" onClick={() =>  navigate("/") }>Back</button> | <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>
                </div>
        </div>
    )
}

export default CreateUser