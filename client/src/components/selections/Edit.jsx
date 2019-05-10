import React from "react"
import axios from "axios"

class EditSelection extends React.Component {
    state = {
        name: "",
        // image: "",
        description: ""
    }

    handleSubmit = event => {
        event.preventDefault()

        const id = this.props.project._id

        axios
            .put(
                `http://localhost:5000/api/selections/${id}`,
                {
                    name: this.state.name,
                    //  image: this.image,
                    description: this.state.description
                },
                { withCredentials: true }
            )
            .then(() => {
                //  this.props.getDetails()
                this.setState({
                    // image: "",
                    name: "",
                    description: ""
                })
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
                <h3>Edit form</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChange}
                            name="title"
                            type="text"
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
