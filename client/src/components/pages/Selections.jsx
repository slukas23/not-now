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
                {/* 


<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="./" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
 */}

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
