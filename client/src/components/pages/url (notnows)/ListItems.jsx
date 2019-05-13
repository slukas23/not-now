import React, { Component } from "react"
import { Link } from "react-router-dom"
import api from "../../api"

class ListItems extends Component {
    render() {
        return (
            <div>
                <h2>My List</h2>
                <div class="list-group">
                    {/* <Link to={addurl.name} className="list-group-item list-group-item-action">
                        {addurl.name}
                    </Link>
                    {addurl.description} */}
                </div>
            </div>
        )
    }
}

export default ListItems
