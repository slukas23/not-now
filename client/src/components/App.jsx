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
    constructor(props) {
        super(props)
        this.state = {
            selections: []
        }
    }

    handleLogoutClick(e) {
        api.logout()
    }
    /* todo, class = classname */
    render() {
        return (
            <div className="App">
                <nav class="navbar navbar-light bg-light navbar-expand-lg fixed-top">
                    <a class="navbar-brand">
                        <NavLink to="/" exact>
                            NotNow
                        </NavLink>
                    </a>
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon" />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="navbar-item">
                                <a class="nav-link">
                                    {api.isLoggedIn() && <NavLink to="/add-selection">+ New Selection </NavLink>}
                                </a>
                            </li>
                            <li class="navbar-item">
                                <a class="nav-link">
                                    {api.isLoggedIn() && <NavLink to="/selections">My Selections</NavLink>}
                                </a>
                            </li>
                            <li class="navbar-item">
                                <a class="nav-link">{!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}</a>
                            </li>
                            <li class="navbar-item">
                                <a class="nav-link">{!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}</a>
                            </li>
                            <li class="navbar-item">
                                <a class="nav-link">
                                    {api.isLoggedIn() && (
                                        <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                                            Logout
                                        </Link>
                                    )}
                                </a>
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
