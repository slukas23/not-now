import React, { Component } from "react"
import api from "../../api"
import { Link } from "react-router-dom"

class Collections extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: []
        }
    }
    render() {
        return (
            <div className="MyCollections">
                <h2>My Collections</h2>
                {this.state.collections.map(collection => (
                    <li key={collection._id}>
                        <Link to={`/collections/${collection._id}`}>{collection.name}</Link>{" "}
                    </li> // here goes a Link
                ))}
            </div>
        )
    }
    componentDidMount() {
        api.getCollections()
            .then(collections => {
                console.log(collections)
                this.setState({
                    collections: collections
                })
            })
            .catch(err => console.log(err))
    }
}

export default Collections
