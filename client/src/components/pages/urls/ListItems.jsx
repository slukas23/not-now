import React, { Component } from "react"

// import api from "../../../api"
/* TODOS MAKE INDIVIDUAL THINS RENDER WHEN HOVER. DO THIS WITH INDEX...somehow */
class ListItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovering: ""
        }
    }

    handleBtnClick = (i, id) => {
        this.setState()
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
                {this.props.urls.map(el => (
                    <a
                        onMouseEnter={() => this.handleMouseHover(el._id)}
                        onMouseLeave={() => this.handleMouseHover()}
                        key={el._id}
                        href={el.url}
                        className="list-group-item list-group-item-action mb-2 rounded"
                    >
                        {this.state.isHovering === el._id && (
                            <button
                                type="button"
                                class="btn btn-primary"
                                data-toggle="modal"
                                data-target="#exampleModalLong"
                            >
                                +
                            </button>
                        )}
                        <h3>{el.name}</h3>
                        <small>{el.url}</small>
                    </a>
                ))}
            </div>
        )
    }
}

export default ListItems
