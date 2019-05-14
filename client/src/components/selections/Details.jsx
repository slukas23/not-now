import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import api from "../../api"
import EditSelection from "./Edit"

class Details extends React.Component {
    state = {
        selection: {},
        editVisible: false
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
                                <img src="/add.png" id="my-sel-icons" alt="Add to selection" />
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
                </div>
            </div>
        )
    }
}

// {editBlock}

export default Details
