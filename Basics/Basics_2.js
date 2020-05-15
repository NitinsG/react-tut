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

//Footer.js

import React from "react"

function Footer() {                     //Functinal Component
    return (
        <footer>
            <h3>This is my footer element</h3>           //Here h3 is not html tag but a react element
        </footer>
    )
}

export default Footer

//Header.js

import React from "react"

function Header() {                         //Functional Component   
    return (
        <header>
            <h3>This is my Header element</h3>         //Here h3 is not html tag but react element
        </header>
    )
}

export default Footer

//MainContent.js
mport React from "react"

function MainContent() {                                //Funtional Component
    return (
        <main>This is the header</main>
    )
}

export default MainContent

//App.js

import React from "react"
import Footer from "./Footer"
import Footer from "./Header"
import Footer from "./MainContent"

function App() {
    return (
        <div>
            <Header />                                       // Component
            <MainContent />                                  // Component
            <Footer />                                       // Component  
        </div>
    )
}

export default App

//index.js

import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

//-------------------------------------------------------------

//---------------Styling--------------

//Header.js

import React from "react"

function Header() {
    return (
        <header className="navbar">This is the header</header> //className applied to React elements not React Components.
    )
}

export default Header

style.css
body {
    margin: 0;
}

.navbar {
    height: 100px;
    background-color: #333;
    color: whitesmoke;
    margin-bottom: 15px;
    text-align: center;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

//---------------------------------------------

//---------Using JS in JSX---------------------------------
//index.js

import React from "react"
import ReactDOM from "react-dom"

function App() {
  const firstName = "Bob"
  const lastName = "Ziroll"
  
  return (                                                  // return always retrun a JSX Component whose name is APP
    <h1>Hello {firstName + " " + lastName}!</h1>            // Here Javascript is enclosed in {} 
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

//-------------------------------------------------------------
//Same Example ------------------------------------------------

import React from "react"
import ReactDOM from "react-dom"

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  return (
    <h1>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

//-------------------------------------------------

<h1 style={{color: "#FF8C00", background-color: "#FF2D00"}}>Good {timeOfDay}!</h1>       //Error
<h1 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}!</h1>        //No Error

//-------------------------------------------------

 const styles = {
    color: "#FF8C00", 
    backgroundColor: "#FF2D00",
    fontSize: "200px"
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
//--------------------------------------------------

function App() {
  const date = new Date(2018, 6, 31, 15)
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }
  
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

//-----------------------------------------------------

//TodoItem.js

import React from "react"

function TodoItem() {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>Placeholder text here</p>
        </div>
    )
}

export default TodoItem

//App.js

import React from "react"
import TodoItem from "./TodoItem"

function App() {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App

//index.js

import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

//-------------------------------------------------------------------

//------Concept of Props---------------------------------------------

<html>
    <head></head>
    <body>
        <a href="https://google.com">This is a link</a>   //a tag is useless without herf, which is also called property
        <input placeholder="First Name" name="" type=""/>
        <img src=""/>     //img tag is useless without src attribute or also called as property
    </body>
</html>

//----------------------------------------------------------------------





