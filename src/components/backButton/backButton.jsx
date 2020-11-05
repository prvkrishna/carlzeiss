import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './backButton.css';
function BackButton(props) {
    function goBack(){
        props.history.goBack();
    }
    return (
        <div>
            <div className="row back-button">
              <div className='col-md-1'></div>
              <div className='col-md-11 float-left'>
                  <button className="btn btn-primary" onClick={()=>{goBack()}}>Go Back</button>
              </div>
            </div>
        </div>
    )
}

export default withRouter(BackButton);