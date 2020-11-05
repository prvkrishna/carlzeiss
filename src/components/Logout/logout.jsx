import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './logout.css';
function LogOut(props) {
    function logOut(){
        localStorage.removeItem("user");
        props.history.push('/login');
    }
    return (
        <div>
            <div className="row log-out">
              <div className='col-md-11'></div>
              <div className='col-md-1 float-right'>
                  <button className="btn btn-primary" onClick={()=>{logOut()}}>Log Out</button>
              </div>
            </div>
        </div>
    )
}

export default withRouter(LogOut);