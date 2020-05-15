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

