import React, { Component } from "react"
import api from "../../api"

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        message: null
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        api.login(this.state.username, this.state.password)
            .then(result => {
                console.log("SUCCESS!")
                this.props.history.push("/") // Redirect to the home page
            })
            .catch(err => this.setState({ message: err.toString() }))
    }

    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit} className="form-inline">
                    <label className="sr-only" for="inlineFormInputGroupUsername2">
                        {/* Username:{" "} */}
                    </label>
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">Username</div>
                        </div>

                        <input
                            className="form-control"
                            id="inlineFormInputGroupUsername2"
                            type="username"
                            placeholder="Your user name"
                            value={this.state.username}
                            name="username"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    {/*    ----- */}
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">Password</div>
                        </div>

                        <input
                            className="form-control"
                            id="inlineFormInputGroupUsername2"
                            type="password"
                            placeholder="Hello123!"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-check mb-2 mr-sm-2">
                        <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                        <label className="form-check-label" for="inlineFormCheck">
                            Remember me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
