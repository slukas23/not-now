import React, { Component } from "react"

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="content-wrapper">
                    <div className="avatar">
                        <img src="cloud-computing.png" alt="" />
                    </div>
                    <h1>Welcome to NotNow</h1>
                    <p>
                        Save, manage and store all your favourite resources in one place and check them out later. Not
                        now!
                    </p>
                    <a href="/signup" className="btn btn-primary mb-2">
                        Create Free Account
                    </a>
                </div>
            </div>
        )
    }
}
