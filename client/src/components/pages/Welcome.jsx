import React, { Component } from "react"

class Welcome extends Component {
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
                                        type="text"
                                        class="form-control"
                                        id="inlineFormInputGroup"
                                        placeholder="https://example.com"
                                    />
                                </div>
                            </div>
                            <div class="col-auto" />
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-2">
                                    Add to My List
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Welcome
