import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    if (!isLoggedIn() && location.pathname !== `/app/login`) {
        // if the user is not logged in redirect to login page
        navigate(`/`);
        return null
    }

    return <Component {...rest} />
}

export default PrivateRoute;