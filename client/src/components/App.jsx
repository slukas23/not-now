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

export default class App extends Component {
    handleLogoutClick(e) {
        api.logout()
    }
    /* todo, class = classname */
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
                    <NavLink className="navbar-brand" to="/" exact>
                        NotNow
                    </NavLink>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="navbar-item">
                                {api.isLoggedIn() && (
                                    <NavLink className="nav-link" to="/add-selection">
                                        + New Selection{" "}
                                    </NavLink>
                                )}
                            </li>
                            <li className="navbar-item">
                                {api.isLoggedIn() && (
                                    <NavLink className="nav-link" to="/selections">
                                        My Selections
                                    </NavLink>
                                )}
                            </li>
                            <li className="navbar-item">
                                {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
                            </li>
                            <li className="navbar-item">
                                {!api.isLoggedIn() && (
                                    <NavLink className="nav-link" to="/login">
                                        Login
                                    </NavLink>
                                )}
                            </li>
                            <li className="navbar-item">
                                {api.isLoggedIn() && (
                                    <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                                        Logout
                                    </Link>
                                )}
                            </li>
                            {/* <li class="navbar-item">
                                <a class="nav-link">{api.isLoggedIn() && <NavLink to="/secret">Secret</NavLink>}</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route path="/" exact component={Home} />
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
