import React, { Component } from "react"
import ListItems from "./urls/ListItems"
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
            .then(() => {
                this.fetchList().then(urls => {
                    this.setState({
                        urls: urls,
                        url: ""
                    })
                })
            })
            .catch(err => this.setState({ message: err.toString() }))
    }

    fetchList = () => {
        // using the api, get the list from the server
        // with the results, set the state in the parent component (Welcome)
        return api.getUrl()
    }

    componentDidMount() {
        // called when render method is first called
        this.fetchList()
            .then(urls => {
                this.setState({
                    urls: urls
                })
            })
            .catch(err => console.log(err))
    }

    componentDidUpdate() {
        // called whenever the render method is called after that
        this.fetchList()
    }

    render() {
        const reversedUrls = this.state.urls.slice()
        reversedUrls.reverse()

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
                                <ListItems urls={reversedUrls} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
