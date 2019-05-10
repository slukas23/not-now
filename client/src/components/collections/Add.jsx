import React, { Component } from "react"
import api from "../../api"

export default class AddCollection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            image: "",
            description: "",
            message: null
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleClick(e) {
        e.preventDefault()
        console.log(this.state.name, this.state.description)
        let data = {
            image: this.state.image,
            name: this.state.name,
            description: this.state.description
        }
        api.addCollection(data)
            .then(result => {
                console.log("SUCCESS!")
                this.setState({
                    image: "",
                    name: "",
                    description: "",
                    message: `Collection '${this.state.name}' successfully created!`
                })
                setTimeout(() => {
                    this.setState({
                        message: null
                    })
                }, 2000)
            })
            .catch(err => this.setState({ message: err.toString() }))
    }
    render() {
        return (
            <div className="AddCollection">
                <div className="collection-wrapper">
                    <h2>Create new Collection</h2>
                    <form>
                        {/*  <img value={IMG FROM FIRST ADDED URL GOES HERE}></img>  */}
                        Name:{" "}
                        <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} />{" "}
                        <br />
                        Description:{" "}
                        <textarea
                            value={this.state.description}
                            name="description"
                            onChange={this.handleInputChange}
                        />{" "}
                        <br />
                        <button onClick={e => this.handleClick(e)}>Create collection</button>
                    </form>
                    {this.state.message && <div className="info">{this.state.message}</div>}
                </div>
            </div>
        )
    }
}
