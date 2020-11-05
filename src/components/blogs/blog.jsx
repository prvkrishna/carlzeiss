import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import '../users/user.css';
import LogOut from '../Logout/logout';
import BackButton from '../backButton/backButton';

function Post(props) {
    console.log("Post props: ", props);
    function getPostID(){
        var pathname = props.location.pathname.split('/');
        var id = pathname[pathname.length - 1];
        return id;
    }
    const [post, setPost] = useState({});
    function fetchPost() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${getPostID()}`)
            .then(function (post) {
                setPost(post.data);
            })
            .catch(function (error) {
                console.log("error: ", error);
            });
    }
    useEffect(() => {
        fetchPost();
    }, []);
    return (
        <div>
            <LogOut />
            <BackButton/>
            <div className="user-table table-layout">
                <caption className="d-flex justify-content-center font-weight-bold">POST</caption>
                <table>
                    <thead>
                        <tr>
                            <td>UserId</td>
                            <td>Post Id</td>
                            <td>title</td>
                            <td>body</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default withRouter(Post);