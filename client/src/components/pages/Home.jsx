import React, { Component } from "react"
/* import User from "../" */

export default class Home extends Component {
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //   }
    // }
    render() {
        return (
            <div className="Home">
                <div className="content-wrapper">
                <div className="avatar">
                   <img src="https://image.flaticon.com/icons/svg/263/263138.svg" alt="" />
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
