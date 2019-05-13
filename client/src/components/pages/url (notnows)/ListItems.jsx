import React, { Component } from "react"
import { Link } from "react-router-dom"
import api from "../../api"
import Welcome from "./Welcome"

class ListItems extends Component {
    fetchList = () => {
        // using the api, get the list from the server
        // with the results, set the state in the parent component (Welcome)
        //
    }

    componentDidMount() {
        // called when render method is first called
        this.fetchList()
    }

    componentDidUpdate() {
        // called whenever the render method is called after that
        this.fetchList()
    }

    render() {
        return (
            <div className="MyList">
                <div className="content-wrapper">
                    <div class="list-group">
                        <h2>My List</h2>

                        {this.state.urls.map(url => (
                            <h3>{this.state.name}</h3>
                        ))}
                        <small>{this.state.url}</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItems
