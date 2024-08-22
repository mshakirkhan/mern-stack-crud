import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/url';

const EditUser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState();

    const { id } = useParams();
    const navigate = useNavigate();

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`${BASE_URL}/updateUser/${id}`, {name, email, country})
        .then(result => {
            console.log(result);
            navigate("/");
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/getUser/${id}`)
        .then(result => {
            setName(result.data.name);
            setEmail(result.data.email);
            setCountry(result.data.country);
        })
        .catch(err => console.log(err))
      },[])

  return (
        <div>
            <div className="container mt-5">
                <h2 className='mb-5'>Edit User</h2>
                <form className="form-horizontal" onSubmit={updateHandler}>
                    <div className="form-group mb-3">
                        <div className='col-md-3'>
                            <label className="control-label" htmlFor="name">Full Name:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className='col-md-3'>
                            <label className="control-label" htmlFor="email">Email:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className='col-md-3'>
                            <label className="control-label" htmlFor="email">Country:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="country" placeholder="Enter Country" name="country" value={country} onChange={(e) => setCountry(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">        
                        <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-dark" onClick={() =>  navigate("/") }>Back</button> | <button type="submit" className="btn btn-success">Update</button>
                        </div>
                    </div>
                </form>
                </div>
        </div>
  )
}

export default EditUser