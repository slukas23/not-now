import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import api from "../../api"

// import countries from "../countries.json"

class CollDetails extends React.Component {
    state = {
        collection: {}
    }

    getCollectionById = () => {
        const id = this.props.match.params.id

        api.getCollectionById(id).then(response => {
            console.log(response)
            this.setState({
                collection: response
            })
        })
    }

    render() {
        // const collection = this.state.collection.find(collection => collection._id === "_id")

        return (
            <div className="Collection">
                <h1>{this.state.collection.name} </h1>
                <p>{this.state.collection.description}</p>
            </div>
        )
    }

    componentDidMount() {
        this.getCollectionById()
    }
}

export default CollDetails

{
    /* <div className="Collection">
                <h2>{collection.name}</h2>
                {this.state.collections.map(collection => (
                    <li key={collection._id}>
                        <Link to={`/collections/${collection._id}`}>{collection.name}</Link>{" "}
                    </li> // here goes a Link
                ))}
            </div> */
}
