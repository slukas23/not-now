import React from "react"
import axios from "axios"
import api from "../../api"

class EditSelection extends React.Component {
    state = {
        name: "",
        // image: "",
        description: ""
    }

    handleSubmit = event => {
        event.preventDefault()

        const id = this.props.selection._id

        const newData =
            // represents the body
            {
                name: this.state.name,
                //  image: this.image,
                description: this.state.description
            }

        api.updateSelection(id, newData).then(response => {
            console.log("Component edited!", response)

            // this.setState({
            //     // image: "",
            //     name: "",
            //     description: ""
            // })
            this.props.handleEdit(response.selection)
            this.props.showEditBlock()
        })
    }

    handleChange = event => {
        const name = event.target.name
        const value = event.target.value

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <hr />
                <h3>Edit your selection!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChange}
                            type="text"
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleChange}
                            type="text"
                            name="description"
                        />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Update Project" />
                </form>
            </div>
        )
    }
}

export default EditSelection
