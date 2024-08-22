import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from '../utils/url';

const UserList = () => {
  const [data, setData] = useState([]);
  const [deleteFlag, setDeleteFlag] = useState(0);

  const deleteHandler = (id) => {
    axios.delete(`${BASE_URL}/deleteUser/${id}`)
    .then(result => {
      setDeleteFlag(1);
    })
    .catch(err => console.log(err))
}

  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(result => {
      setData(result.data);
    })
    .catch(err => console.log(err))
  },[deleteFlag])

  return (
    <>
      <div className="container mt-5">      
        <h2 className='mb-5'>CRUD Using MERN Stack</h2>  
        <div>
          <Link to="/create" className="btn btn-info mb-2">Add+</Link>
        </div>  
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((records) => (
                <tr key={records._id}>
                  <td>{records.name}</td>
                  <td>{records.email}</td>
                  <td>{records.country}</td>
                  <td><Link to={`/edit/${records._id}`} type="button" className="btn btn-success">Edit</Link> | <button type="button" className="btn btn-danger" onClick={(e) => deleteHandler(records._id)}>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UserList