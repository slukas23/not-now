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
                <div className="card">
                    {
                        <img
                            className="card-img-top"
                            src="https://images.unsplash.com/photo-1553467067-fd3b56696f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            alt="Card image cap"
                        />
                    }
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">{this.state.input}</p>
                        <a href={this.state.input} className="btn btn-primary">
                            Follow Link
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
