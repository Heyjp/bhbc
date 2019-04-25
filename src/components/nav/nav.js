import React from 'react';
import { Link, navigate } from "gatsby"


import { isLoggedIn, logout } from "../../services/auth";

class Nav extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            activeNav: ''
        }
    }

    toggleNav = () => {
        return this.setState({
            activeNav: !this.state.activeNav
        })
    }

    render () {
        return (
            <nav className="navbar has-background-white-ter" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <p className="title">BH<span className="has-text-primary">BC</span></p>
                    </Link>

                    <button  
                        className={`navbar-burger ${this.state.activeNav ? 'is-active' : ''}`}
                         data-target="navMenu" 
                         aria-label="menu" 
                         aria-expanded="false"
                         onClick={() => this.toggleNav()}
                        >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div className={`navbar-menu ${this.state.activeNav ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/">
                            Home
                        </Link>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link className="navbar-item" to="/history">
                                About
                            </Link>
                            <div className="navbar-dropdown">
                                <Link className="navbar-item" to="/commitee">
                                    Committee
                                </Link>
                                {/* <Link className="navbar-item" to="/members">
                                    Membership
                                </Link> */}
                                <Link className="navbar-item" to="/history">
                                    History
                                </Link>
                            </div>
                        </div>
                        <Link className="navbar-item" to="/news">
                            News
                        </Link>
                        <Link className="navbar-item" to="/events">
                            Events
                        </Link>
                        <Link className="navbar-item" to="/rules">
                            Rules
                        </Link>
                        {/* <Link className="navbar-item" to="/tournament">
                            Tournament
                        </Link> */}
                        <Link className="navbar-item" to="/contact">
                            Contact
                        </Link>
                        {isLoggedIn() &&  <Link className="navbar-item" to="/app/minutes">
                            Minutes
                        </Link>}
                        {!isLoggedIn() &&  <Link className="navbar-item" to="/app/login">
                            Login
                        </Link>}
                        {isLoggedIn() ? (
                            <Link className="navbar-item" 
                                to="/app/login"
                                onClick={event => {
                                    event.preventDefault()
                                    logout(() => navigate(`/`))
                                }}
                            >
                                Logout
                            </Link>
                            ) : null}
                    </div>
                </div>
            </nav>
        )
    }
   
 }

 export default Nav;