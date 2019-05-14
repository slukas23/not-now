import React, { Component } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import api from "../../../api"
import { Link } from "react-router-dom"

class ChooseSelection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: true,
            selections: []
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    componentDidMount() {
        api.getSelections()
            .then(selections => {
                console.log(selections)
                this.setState({
                    selections: selections
                })
            })
            .catch(err => console.log(err))
    }

    handleSubmit = _id => {
        const selectionId = _id
        const urlId = this.props.UrlID
        api.addUrlToSelection(urlId, selectionId).then(response => {
            console.log("handleSubmit success!")
            this.props.resetValues()
            this.setState({ modal: false })
        })
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Choose selection</ModalHeader>
                    <ModalBody>
                        {this.state.selections.map(selection => (
                            <li key={selection._id}>
                                <form
                                    onSubmit={() => this.handleSubmit(selection._id)}
                                    to={`/selections/${selection._id}`}
                                    className="list-group-item list-group-item-action"
                                >
                                    <button className="add-to-selection-button">{selection.name}</button>
                                </form>
                            </li>
                        ))}
                    </ModalBody>
                    {/*  <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>
                            Do Something
                        </Button>{" "}
                        <Button color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter> */}
                </Modal>
            </div>
        )
    }
}

export default ChooseSelection
