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
        console.log(this.state.selections)
        return (
            <div className="MySelections">
                <h2>My Selections</h2>
                {this.state.selections.map(selection => (
                    <li key={selection._id}>
                        <Link to={`/selections/${selection._id}`}>{selection.name}</Link>
                    </li> // here goes a Link
                ))}
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
