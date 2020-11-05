import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import '../users/user.css';
import LogOut from '../Logout/logout';
import { Link } from "react-router-dom";
import BackButton from '../backButton/backButton';
function Posts() {
    const [posts, setPosts] = useState([]);
    function fetchPosts() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(function (posts) {
            setPosts(posts.data);
          })
          .catch(function (error) {
            console.log("error: ", error);
          });
      }
      useEffect(() => {
        fetchPosts();
      }, [])
     
    return (
      <div>
         <LogOut />
         <BackButton/>
         <div className="user-table table-layout">
            <caption className="d-flex justify-content-center font-weight-bold">POSTS</caption>
            <table>
              <thead>
                <tr>
                  <td>UserId</td>
                  <td >Post Id</td>
                  <td>title</td>
                  <td>body</td>
                </tr>
              </thead>
              <tbody>
              {posts.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{value.userId}</td>
                        <td><Link to={'blog/' + value.id}>{value.id}</Link></td>
                        <td>{value.title}</td>
                        <td>{value.body}</td>                        
                      </tr>
                    )
                })}
              </tbody>
            </table>
          </div>
      </div>
        
    )
}

export default withRouter(Posts);