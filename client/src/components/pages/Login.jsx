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
            <div className="Signup">
                <form>
                    <div class="form-group">
                        <h1 id="signup"> Login</h1>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Your best username"
                            type="text"
                            value={this.state.username}
                            name="username"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="login-signup-google">
                        <button onClick={e => this.handleClick(e)} type="submit" class="btn btn-primary">
                            Submit
                        </button>{" "}
                        <a className="login-google" href="/auth/google">
                            {" "}
                            Login with Google
                        </a>
                    </div>
                </form>
                {this.state.message && <div className="info info-danger">{this.state.message}</div>}
            </div>
        )
    }
}
