import React from "react"

function App() {                                          //functional Component
    return (
        <div>
            <h1>Code goes here</h1>
        </div>
    )
}

class App extends React.Component {               //Analogous Class Component, it has same return as functional Component.
    render() {
        return (
            <div>
                <h1>Code goes here</h1>
            </div>
        )
    }
}

export default App
