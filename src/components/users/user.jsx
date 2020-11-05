import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './user.css';
import LogOut from '../Logout/logout';
import BackButton from '../backButton/backButton';
function Users() {
    const [users, setUsers] = useState([]);
    function fetchUsers() {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(function (users) {
            setUsers(users.data);
          })
          .catch(function (error) {
            console.log("error: ", error);
          });
      }
      useEffect(() => {
        fetchUsers()
      }, [])
    return (
        <div>
            <LogOut />
            <BackButton/>
            <div className="user-table table-layout">
            <caption className="d-flex justify-content-center font-weight-bold">USERS</caption>
            <table>
              <thead>
                <tr>
                  <td>id</td>
                  <td>name</td>
                  <td>username</td>
                  <td>email</td>
                  {/* <td>address</td> */}
                  <td>phone</td>
                  <td>website</td>
                  {/* <td>company</td> */}
                </tr>
              </thead>
              <tbody>
              {users.map((value, index) => {
                  console.log("value: ", value)
                    return (
                      <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.username}</td>
                        <td>{value.email}</td>
                        {/* <td>{value.address}</td> */}
                        <td>{value.phone}</td>
                        <td>{value.website}</td>
                        {/* <td>{value.company}</td> */}
                        
                      </tr>
                    )
                })}
              </tbody>
            </table>
          </div>
        </div>
        
    )
}

export default withRouter(Users);