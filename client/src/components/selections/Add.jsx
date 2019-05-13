import React, { Component } from "react"
import api from "../../api"

class AddSelection extends Component {
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
        api.addSelection(data)
            .then(result => {
                console.log("SUCCESS!")
                this.setState({
                    image: "",
                    name: "",
                    description: "",
                    message: `Selection '${this.state.name}' successfully created!`
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
            <div className="AddSelection">
                <div className="content-wrapper">
                    <h2>Create new Selection</h2>

                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input
                                type="text"
                                value={this.state.name}
                                name="name"
                                onChange={this.handleInputChange}
                                maxlength="20"
                                class="form-control"
                                id="exampleInputEmail1"
                            />
                            {/*  <img value={IMG FROM FIRST ADDED URL GOES HERE}></img>  */}
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <textarea
                                value={this.state.description}
                                name="description"
                                onChange={this.handleInputChange}
                                maxlength="200"
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                            />
                        </div>
                        <button onClick={e => this.handleClick(e)} class="btn btn-primary">
                            Create Selection
                        </button>
                    </form>
                    {this.state.message && <div className="info">{this.state.message}</div>}
                </div>
            </div>
        )
    }
}

export default AddSelection

{
    /* <div className="AddSelection">
                <div className="content-wrapper">
                    <h2>Create new Selection</h2>


                    <form>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Name</label>
                          <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} class="form-control" id="exampleInputEmail1" />
    
                        </div>

                     <div class="form-group">
                        <label for="exampleInputPassword1">Description</label>
                            <textarea value={this.state.description}
                            name="description"
                            onChange={this.handleInputChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
  
                    <button onClick={e => this.handleClick(e)} class="btn btn-primary">Create Selection</button>
                    </form>{this.state.message && <div className="info">{this.state.message}
                </div> */
}
