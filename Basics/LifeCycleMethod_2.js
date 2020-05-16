//index.html
<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html>

//index.js
import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

//App.js
import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default App

//Conditional.js

import React from "react"

function Conditional(props) {
    return (
        <div>
            <h1>Navbar</h1>
            
            {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
            
            <h1>Footer</h1>
        </div>
    )
}

export default Conditional

//----------------------------------------------------------------------
Second Way

import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    render() {
        return (
            <div>
                {this.state.isLoading ?
                <h1>Loading...</h1> :
                <Conditional />}
            </div>
        )
    }
}

export default App

//Conditional.js

import React from "react"

function Conditional(props) {
    return <h1>Some cool stuff about conditional rendering</h1>
}

export default Conditional
