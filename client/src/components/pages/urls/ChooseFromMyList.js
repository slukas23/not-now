import React, { Component } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import api from "../../../api"
import { Link } from "react-router-dom"

class ChooseFromMyList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: true,
            urls: []
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.props.clicked()
    }

    componentDidMount() {
        api.getUrl()
            .then(urls => {
                console.log(urls)
                this.setState({
                    urls: urls
                })
            })
            .catch(err => console.log(err))
    }

    handleSubmit = (event, _id) => {
        event.preventDefault()
        api.addUrlToSelection(_id, this.props.selectionId).then(response => {
            console.log("handleSubmit success!")
            this.toggle()
            this.props.refreshApi()
        })
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add to selection</ModalHeader>
                    <ModalBody>
                        {this.state.urls &&
                            this.state.urls.map(el => (
                                <li key={el._id}>
                                    <form
                                        onSubmit={e => this.handleSubmit(e, el._id)}
                                        to={`/selections/${el._id}`}
                                        className="list-group-item list-group-item-action"
                                    >
                                        <button className="add-to-selection-button">{el.url}</button>
                                    </form>
                                </li>
                            ))}
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ChooseFromMyList
