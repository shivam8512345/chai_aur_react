import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  const username = "chai aur code!";
  return (
    <div>
      {/* {it is a evaluated javascript!(final outcome!)} */}
      <h1>Custom App! {username}</h1>
    </div>
  )
}


const ReactElement = {
  type : 'a',
  props: {
      href: "https://www.google.com",
      target: "_blank"
  },
  children: "Click here to move to google!"
}

const anotherUser="chai aur code";

const reactElement = React.createElement(
  'a',
  {href: "https://google.com",target:"_blank"},
  'Click me to visit google!',
  anotherUser
)
const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google!</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
<App/>
)
