import React from 'react'
import { Route } from "react-router-dom";
// import ValidationService from '../Services/validate.js';
import { withRouter } from "react-router-dom";

const redirectToLogin = props => {
    let URL = window.location.href,
        URLsplit = URL.split("/"),
        host = URLsplit[0] + "//" + URLsplit[2] + "/",
        newURL = URL.replace(host, "");
    let redirectionPath = {
        pathname: '/login',
        windowLocation: newURL
    };
    props.history.push(redirectionPath)
};

const getDisplayComponent = props => {
    let user = JSON.parse(JSON.stringify(localStorage.getItem("user")));
    console.log("user: ", user);
    console.log("props: ", props)
    if (user !==null) {
        return props.component;
    } else {
        redirectToLogin(props);
    }
};
const ProtectedRoute = props => {
    return (
        <div>
            <Route component={getDisplayComponent(props)} />
        </div>
    );
};

export default withRouter(ProtectedRoute)