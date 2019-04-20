import React from "react"
import { Router } from '@reach/router'
import Layout from "../../components/layout"
import Minutes from "./minutes"
import Login from "./login"
import PrivateRoute from "../../components/privateRoute";

const App = () => (
    <Layout>
        <Router>
            <PrivateRoute path="/app/minutes" component={Minutes} />
            <Login path="/app/login" />
        </Router>
    </Layout>
)

export default App;