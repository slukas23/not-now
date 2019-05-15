import React, { Component } from "react"
import ChooseSelection from "./ChooseSelection"

// import api from "../../../api"
/* TODOS MAKE INDIVIDUAL THINS RENDER WHEN HOVER. DO THIS WITH INDEX...somehow */
class ListItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovering: "",
            indexUrl: null,
            idUrl: null
        }
    }

    // Validation: if cond is true both (index and id) return null otherwise index is selected
    handleCopy = (index, id) => {
        console.log("hi")
        const indexMatch = index === this.state.indexUrl
        this.setState({
            indexUrl: indexMatch ? null : index,
            idUrl: id
        })
    }

    resetValues = () => {
        this.setState({
            indexUrl: null
        })
    }

    handleMouseHover = id => {
        if (this.state.isHovering === "") this.setState({ isHovering: id })
        else this.setState({ isHovering: "" })
        console.log(id)

        // this.setState(this.toggleHoverState)
    }

    toggleHoverState = state => {
        return {
            isHovering: !state.isHovering
        }
    }
    render() {
        console.log(this.props.urls)
        return (
            <div className="list-group">
                {this.props.urls.map((el, i) => (
                    <div className="url-form-add-btn-wrapper">
                        <div>
                            <a
                                // onMouseEnter={() => this.handleMouseHover(el._id)}
                                // onMouseLeave={() => this.handleMouseHover()}
                                key={el._id}
                                href={el.url}
                                className="list-group-item list-group-item-action mb-2"
                            >
                                <h4>{el.title}</h4>
                                <small className="saved-urls">{el.url}</small>
                            </a>
                        </div>
                        <div>
                            {/*   <button
                                type="button"
                                class="btn btn-primary"
                                id="add-to-selection-button"
                                data-toggle="modal"
                                data-target="#exampleModalLong"
                                onClick={() => this.handleCopy(i, el._id)} // if there are 2 params => arrow func
                            >
                                +
                            </button> */}
                            {
                                //<div className="icon-border-mylist">
                                <img
                                    onClick={() => this.handleCopy(i, el._id)}
                                    className="prepend-buttons"
                                    src="/add.png"
                                    alt="Add to selection"
                                />
                                // </div>
                            }

                            {this.state.indexUrl === i && (
                                <ChooseSelection UrlID={this.state.idUrl} resetValues={this.resetValues} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default ListItems
