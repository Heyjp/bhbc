import React from 'react';
import { Link, navigate, StaticQuery, graphql } from "gatsby"
import { isLoggedIn, logout } from "../../services/auth";
import logo from '../../images/bhbc-no-bg.png';

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
        const sitePages = this.props.data.allSitePage.edges.filter(({node}) => {
            return node.context.url;
        });
        return (
            <nav className="navbar has-background-white-ter" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img src={logo} class="logo" />
                        {/* <p className="title">BH<span className="has-text-primary">BC</span></p> */}
                    </Link>
                    <a  
                        className={`navbar-burger ${this.state.activeNav ? 'is-active' : ''}`}
                         data-target="navMenu" 
                         aria-label="menu" 
                         aria-expanded="false"
                         onClick={() => this.toggleNav()}
                        >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
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
                        <Link className="navbar-item" to="/gallery">
                            Gallery
                        </Link>
                        <Link className="navbar-item" to="/fixtures">
                            Fixtures
                        </Link>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link className="navbar-item" to="/competitions">
                                Competitions
                            </Link>
                            <div className="navbar-dropdown">
                                <Link className="navbar-item" to="/trophy">
                                    Nicholas Soames Trophy
                                </Link>
                                <Link className="navbar-item" to="/rules">
                                    Rules
                                </Link>
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-item">
                                Pages
                            </a>
                            <div className="navbar-dropdown">
                                {
                                    sitePages.map(({node}) => (
                                        <Link key={`link${node.context.url}`} className="navbar-item" to={`${node.context.url}`}>
                                            {node.context.title}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
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

 const query = graphql`
        query {
            allSitePage {
                edges {
                    node {
                        context {
                            url
                            title
                        }
                    }
                }
            }
        }
`

 export default () => (
    <StaticQuery 
        query={query}
        render={data => (
            <Nav data={data} />
        )}
    />
)


    