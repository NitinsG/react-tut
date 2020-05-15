//ContactCard.js

import React from "react"

function ContactCard(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard

//App.js

import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard 
                name="Mr. Whiskerson" 
                imgUrl="http://placekitten.com/300/200" 
                phone="(212) 555-1234" 
                email="mr.whiskaz@catnap.meow"
            />
            
            <ContactCard 
                name="Fluffykins" 
                imgUrl="http://placekitten.com/400/200" 
                phone="(212) 555-2345" 
                email="fluff@me.com"
            />
            
            <ContactCard 
                name="Destroyer" 
                imgUrl="http://placekitten.com/400/300" 
                phone="(212) 555-3456" 
                email="ofworlds@yahoo.com"
            />
            
            <ContactCard 
                name="Felix" 
                imgUrl="http://placekitten.com/200/100" 
                phone="(212) 555-4567" 
                email="thecat@hotmail.com"
            />
            
        </div>
    )
}

export default App

//index.js
import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

console.log
>{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}
>{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}
>{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}
>{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}


//-------------------------------------------------------------------
//ContactCard.js

import React from "react"

function ContactCard(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard


//App.js
import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
            
            <ContactCard 
                contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
            />
            
            <ContactCard
                contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
            />
            
            <ContactCard 
                contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            />
            
        </div>
    )
}

export default App

//-------------------------------------------------------
//Joke.js

import React from "react"

function Joke(props) {
    return (
        <div>
            <h3>Question: {props.question}</h3>
            <h3>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke

//App.js

import React from "react"

import Joke from "./Joke"

function App() {
    return (
        <div>
            <Joke 
                question="What's the best thing about Switzerland?" 
                punchLine="I don't know, but the flag is a big plus!"
            />
            
            <Joke 
                question="Did you hear about the mathematician who's afraid of negative numbers?" 
                punchLine="He'll stop at nothing to avoid them!"
            />
            
            <Joke 
                question="Hear about the new restaurant called Karma?" 
                punchLine="There’s no menu: You get what you deserve."
            />
            
            <Joke 
                question="Did you hear about the actor who fell through the floorboards?" 
                punchLine="He was just going through a stage."
            />
            
            <Joke 
                question="Did you hear about the claustrophobic astronaut?" 
                punchLine="He just needed a little space."
            />
            
        </div>
    )
}

export default App

//index.js
import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

//------------------------------------------------------------------------------

//Joke.js
....
function Joke(props) {
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}
.....

//App.js

.....
function App() {
    return (
        <div>
            <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
            
            //There is punch line only but no question , the stylein code in Joke.js will hide the Question tag 
            ....
......
//---------------------------------------------------------

//jokesData,js

const jokesData = [
    {
        id: 1,
        punchLine: "It’s hard to explain puns to kleptomaniacs because they always take things literally."
    },
    {
        id: 2,
        question: "What's the best thing about Switzerland?",
        punchLine: "I don't know, but the flag is a big plus!"
    }
]

export default jokesData;

//index.js

import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

//App.js
import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"

function App() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    
    return (
        <div>
            {jokeComponents}            
        </div>
    )
}

export default App

//Joke.js
import React from "react"

function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke

//--------------------------------------------------------------

//todosData.js

const todosData = [
    {
        id: 1,
        text: "Take out the trash",
        completed: true
    },
    {
        id: 2,
        text: "Grocery shopping",
        completed: false
    }
]

export default todosData;

//index.js

import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

//App.js

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default App

//TodoItem.js

import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem
