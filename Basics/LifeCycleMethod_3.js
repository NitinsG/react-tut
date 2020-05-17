//componentDidMount and coponentWillMount
import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentWillMount(){
        console.log("Will Mount")
        setTimeout(() => {
            console.log("from set state")
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    componentDidMount() {
        console.log("Did Mount")

    }
    
    render() {
        console.log("Render")
        return (
            <div>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default App

Will Mount
Render
Did Mount
from state
Render

//------------------------------------------------------------------------
//With excahnge of methods

 componentWillMount(){
        console.log("Will Mount")
        
    }
    
    componentDidMount() {
        console.log("Did Mount")
        setTimeout(() => {
            console.log("from set state")
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    Will Mount
    Render
    Did Mount
    from set state
    Render
