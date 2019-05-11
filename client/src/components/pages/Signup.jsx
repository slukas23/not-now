import React, { Component } from "react"
import api from "../../api"

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            name: "",
            password: "",
            message: null
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick(e) {
        e.preventDefault()
        let data = {
            username: this.state.username,
            name: this.state.name,
            password: this.state.password
        }
        api.signup(data)
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
                        <h1 id="signup"> Signup</h1>
                        <label for="exampleInputEmail1">Name</label>

                        <input
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Your name goes here"
                            type="text"
                            value={this.state.name}
                            name="name"
                            onChange={this.handleInputChange}
                        />
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
                            Signup with Google
                        </a>
                    </div>
                </form>
                {this.state.message && <div className="info info-danger">{this.state.message}</div>}
            </div>
        )
    }
}
