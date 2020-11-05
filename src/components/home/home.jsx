import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './home.css';
import LogOut from '../Logout/logout';
function Home(props) {    
    return (
        <div>
            <LogOut />
            <div className="row home-page">
                <div className='col-md-3'></div>
                <div className='col-md-3'>
                    <div className="card text-center">
                        <div className="card-header">
                            Users
                        </div>
                        <div className="card-body">
                            <a href="/users" className="btn btn-primary">Go To Users</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-center">
                        <div className="card-header">
                            Blogs
                        </div>
                        <div className="card-body">
                            <a href="/blogs" className="btn btn-primary">Go To Blog Posts</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    )
}

export default withRouter(Home);