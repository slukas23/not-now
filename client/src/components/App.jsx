import React, { Component } from "react"
import { Route, Link, NavLink, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Selections from "./pages/Selections"
import Add from "./selections/Add"
import Secret from "./pages/Secret"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import api from "../api"
import Details from "./selections/Details"
import Welcome from "./pages/Welcome"

export default class App extends Component {
    handleLogoutClick(e) {
        api.logout()
    }
    /* todo, class = classname */
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
                    <a className="navbar-brand">
                        <NavLink to="/" exact>
                            NotNow
                        </NavLink>
                    </a>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="navbar-item">
                                <a className="nav-link">
                                    {api.isLoggedIn() && <NavLink to="/welcome">MY LIST </NavLink>}
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link">
                                    {api.isLoggedIn() && <NavLink to="/selections">MY SELECTIONS</NavLink>}
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link">
                                    {api.isLoggedIn() && <NavLink to="/add-selection">ADD SELECTION </NavLink>}
                                </a>
                            </li>
                            <li
                                style={api.isLoggedIn() ? { visibility: "hidden" } : { visibility: "flex" }}
                                className="navbar-item"
                            >
                                <a className="nav-link">
                                    {!api.isLoggedIn() && <NavLink to="/signup">SIGNUP</NavLink>}{" "}
                                </a>
                            </li>
                            <li
                                style={api.isLoggedIn() ? { visibility: "hidden" } : { visibility: "flex" }}
                                className="navbar-item"
                            >
                                <a className="nav-link">{!api.isLoggedIn() && <NavLink to="/login">LOGIN</NavLink>}</a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link">
                                    {api.isLoggedIn() && (
                                        <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                                            LOGOUT
                                        </Link>
                                    )}
                                </a>
                            </li>
                            {/* <li className="navbar-item">
                                <a className="nav-link">{api.isLoggedIn() && <NavLink to="/secret">Secret</NavLink>}</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/welcome" exact component={Welcome} />
                    <Route exact path="/selections" component={Selections} />
                    <Route path="/add-selection" component={Add} />
                    <Route path="/selections/:id" component={Details} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/secret" component={Secret} />
                    <Route render={() => <h2>404</h2>} />
                </Switch>
            </div>
        )
    }
}
