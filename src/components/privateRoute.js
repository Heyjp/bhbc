import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"

const PrivateRoute = ({
    component: Component,
    location,
    ...rest
}) => {
    if (!!isLoggedIn() && location.pathname !== `/app/login`) {
        console.log('not logged In here');
        // If we’re not logged in, redirect to the home page.
        navigate(`/`)
        return null
    }

    return <Component {
        ...rest
    }
    />
}

export default PrivateRoute;