import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import api from "../../api"
import EditSelection from "./Edit"

class Details extends React.Component {
    state = {
        selection: {}
    }

    // equals to getProject
    getSelectionById = () => {
        const id = this.props.match.params.id

        api.getSelectionById(id).then(response => {
            console.log(response)
            this.setState({
                selection: response
            })
        })
    }

    // Delete selection NEW

    deleteSelection = () => {
        const id = this.props.match.params.id

        api.delete(`http://localhost:5000/api/selections/${id}`).then(response => {
            // redirects to /selections
            this.props.history.push("/selections")
        })
    }

    componentDidMount() {
        this.getSelectionById()
    }

    render() {
        const { selection } = this.state

        let editBlock = <></>

        // if (this.props.user && this.props.user._id === this.state.selection.owner) {
        editBlock = (
            <div>
                <EditSelection selection={selection} getDetails={this.state.getSelectionById} />
                <button style={{ marginTop: "10px" }} className="btn btn-danger" onClick={this.deleteSelection}>
                    Delete Selection
                </button>
            </div>
        )
        // }

        return (
            <div className="Selection">
                <h1>{this.state.selection.name} </h1>
                <p>{this.state.selection.description}</p>
                <Link to="/selections">Back</Link>
                {editBlock}
            </div>
        )
    }
}

export default Details
