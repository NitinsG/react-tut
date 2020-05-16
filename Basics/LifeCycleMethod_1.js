import React, {Component} from "react"

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class TodoList extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    componentDidMount() {
        // GET the data I need to correctly display
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.whatever !== this.props.whatever) {
            // do something important here
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }
    
    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listeners)
    }
    
    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App

//--------------------------------------------------------------

import React, {Component} from "react"

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class TodoList extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    static getDerivedStateFromProps(props, state) {        //New LifeCycle Methods
        // return the new, updated state based upon the props
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }
    
    getSnapshotBeforeUpdate() {                            //New LifeCycle Methods
        // create a backup of the current way things are
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    }
    
    // componentWillMount() {                                //Depreceated one , Its execute before Render() method
        
    // }
    
    componentDidMount() {                                    //Executed after Render() method
        // GET the data I need to correctly display
        //Called only once in the entire lifecycle , and its called the first time the component took birth.
    }
    
    // componentWillReceiveProps(nextProps) {                        //Depreceated
    //     if (nextProps.whatever !== this.props.whatever) {
    //         // do something important here
    //     }
    // }
    
    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }
    
    // componentWillUpdate() {                                   //Depreceated
        
    // }
    
    componentDidUpdate(){
    
    }
    
    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listeners)
    }
    
    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App

Render
Mounted
Render
componentDidUpdate

//----------------------------------------------------------------------------

// https://scrimba.com/g/greacthooks

import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    componentDidMount() {
        console.log("Mounted")
    }
    
    componentDidUpdate() {
        console.log("Did Update")
    }
    
    render() {
        console.log("Render")
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
            </div>
        )
    }
}

export default App

Render
Mounted
//When clicked for state change after that console.log is:
Render
Did Update

//----------------------------------------------------------------------
import React from "react"
import randomcolor from "randomcolor"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.increment = this.increment.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({color: newColor})
        }
    }
    
    render() {
        return (
            <div>
                <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
            </div>
        )
    }
}

export default App
