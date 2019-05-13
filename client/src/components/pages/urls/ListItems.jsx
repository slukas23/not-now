import React, { Component } from "react"
import { Link } from "react-router-dom"
import api from "../../../api"

class ListItems extends Component {
    render() {
        return (
            <div className="MyList">
                {this.props.urls.map(el => (
                    <div>
                        <h3>{el.name}</h3>
                        <small>{el.url}</small>
                    </div>
                ))}
            </div>
        )
    }
}

export default ListItems
