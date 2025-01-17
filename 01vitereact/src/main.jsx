import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp (){
    return (
        <div>
            <h1>Coming Soon | god</h1>
        </div>
    )
   
}

// const reactElement = {
//     type : "a",
//     props : {
//         href : "https://google.com",
//         target : "_blank"
//     } ,
//     children : "click me to visit google"
// }




const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "Godzilla Monster";
  

const reactElement = React.createElement(
    "a",
    {href: "https://google.com",target:"_blank"},
    "click me to visit",
    anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).render(
  
    
    reactElement
    
    
)
