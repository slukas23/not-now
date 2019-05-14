import React, { Component } from "react"
import api from "../../api"
import { Link } from "react-router-dom"

class Selections extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selections: []
        }
    }
    render() {
        //const reversedSelections = this.state.selections.slice()
        // reversedSelections.reverse()

        return (
            <div className="MySelections">
                <div className="content-wrapper">
                    <div class="list-group">
                        <h2>My Selections</h2>

                        {this.state.selections.map(selection => (
                            <li key={selection._id}>
                                <Link
                                    to={`/selections/${selection._id}`}
                                    className="list-group-item list-group-item-action"
                                >
                                    {selection.name}
                                </Link>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        )
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
}

export default Selections
