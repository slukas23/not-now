import React, { Component } from "react"
import api from "../../api"

class Welcome extends Component {
    state = {
        url: "",
        message: "",
        urls: []
    }

    // To set state of input to the url pasted on the input field
    changeHandler = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
            // url: ??
        })
    }

    // To send the state.input to the backend
    clickHandler = e => {
        e.preventDefault()
        let data = {
            //   name: this.state.name,
            url: this.state.url
        }
        api.addUrl(data)
            .then(result => {
                console.log("SUCCESS!")
                this.setState({
                    // name: "",
                    url: ""
                    // message: "Url successfully added to My List!"
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
            <div className="Welcome">
                <div className="content-wrapper">
                    <form>
                        <div class="form-row align-items-center">
                            <div class="col-auto">
                                <label class="sr-only" for="inlineFormInputGroup" />
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">Enter new url here</div>
                                    </div>
                                    <input
                                        onChange={this.changeHandler}
                                        type=""
                                        name="url"
                                        value={this.state.input} // take the new inserted url as a value
                                        className="form-control"
                                        id="inlineFormInputGroup"
                                        placeholder="https://example.com"
                                    />
                                </div>
                            </div>
                            <div class="col-auto" />
                            <div class="col-auto">
                                <button onClick={this.clickHandler} class="btn btn-primary mb-2">
                                    Add to My List
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <h1>My List</h1>

                <div class="row">
                    <div class="col-sm-12">
                        <div class="list-group">
                            <a href="#" className="list-group-item list-group-item-action">
                                url 1 // if u click on it follow the link
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                url 2 // add delete button on the right side
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                url 3
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                url 4
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
