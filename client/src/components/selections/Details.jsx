import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import api from "../../api"
import EditSelection from "./Edit"
import ChooseFromMyList from "../pages/urls/ChooseFromMyList"

class Details extends React.Component {
    state = {
        selection: {},
        editVisible: false,
        displayModal: false
    }

    // show hide {editblock}

    showEditBlock = () => {
        this.setState({ editVisible: !this.state.editVisible })
    }

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

    handleModalDisplay = () => {
        this.setState({ displayModal: !this.state.displayModal })
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
                    showEditBlock={this.showEditBlock}
                />
                {/* <button style={{ marginTop: "10px" }} className="btn btn-danger" onClick={this.handleDelete}>
                    Delete Selection
                </button> */}
            </div>
        )
        // }

        return (
            <div>
                {this.state.displayModal && (
                    <ChooseFromMyList
                        selectionId={this.props.match.params.id}
                        {...this.state}
                        clicked={this.handleModalDisplay}
                        refreshApi={this.getSelectionById}
                    />
                )}
                <div className="sel-details-wrapper">
                    <div class="row" id="selection-details-divider">
                        <div class="col-sm-8">
                            <h1>{this.state.selection.name} </h1>
                            <p>{this.state.selection.description}</p>
                        </div>
                    </div>
                    {this.state.editVisible && editBlock}

                    <div class="row" id="icon-align">
                        <div class="col-sm">
                            <div className="icon-border">
                                <img
                                    src="/add.png"
                                    id="my-sel-icons"
                                    alt="Add to selection"
                                    onClick={this.handleModalDisplay}
                                />
                            </div>

                            {/* <Link to="/selections">Back</Link> */}
                        </div>
                        <div class="col-sm">
                            <img src="/rubbish-bin.png" id="my-sel-icons" onClick={this.handleDelete} alt="" />
                            {/* <button
                                style={{ marginTop: "10px" }}
                                className="btn btn-danger"
                                onClick={this.handleDelete}
                            >
                                Delete Selection
                            </button> */}
                        </div>
                        <div class="col-sm">
                            <img src="/pencil-edit-button.png" id="my-sel-icons" onClick={this.showEditBlock} alt="" />
                        </div>
                        <div class="col-sm">
                            <img src="/share.png" id="my-sel-icons" alt="" />
                        </div>
                    </div>
                    {this.state.selection.notnow && (
                        <div className="selection-wrapper">
                            <div class="list-group">
                                {this.state.selection.notnow.map(oneNotNow => (
                                    <li key={oneNotNow._id}>
                                        {console.log(oneNotNow)}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={oneNotNow.url}
                                            className="list-group-item list-group-item-action"
                                        >
                                            {oneNotNow.url}
                                        </a>
                                    </li>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

// {editBlock}

export default Details
