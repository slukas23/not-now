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

    handleEdit = data => {
        console.log("edit data", data)
        this.setState({
            selection: data
        })
        console.log("state data", this.state)
    }

    // Delete selection NEW

    handleDelete = () => {
        const id = this.props.match.params.id

        api.deleteSelection(id).then(response => {
            console.log("Deleted!!")
            // redirects to /selectionsƒ
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
        // check here if the user is authorized to edit the selection

        editBlock = (
            <div>
                <EditSelection
                    selection={selection}
                    getDetails={this.state.getSelectionById}
                    handleEdit={this.handleEdit}
                />
                <button style={{ marginTop: "10px" }} className="btn btn-danger" onClick={this.handleDelete}>
                    Delete Selection
                </button>
            </div>
        )
        // }

        return (
            <div className="Selection">
                <div>
                    <h1>{this.state.selection.name} </h1>
                    <p>{this.state.selection.description}</p>
                    <Link to="/selections">Back</Link>
                    {editBlock}
                </div>
            </div>
        )
    }
}

export default Details
