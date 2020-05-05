import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import About from './about'
import Home from './homie'
import ProtectedPage from './privat'
import Onemore from './onemore'
const topics = [
    {
        name: 'React Router',
        id: 'react-router',
        description: 'Declarative, component based routing for React',
        resources: [
          {
            name: 'URL Parameters',
            id: 'url-parameters',
            description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
            url: 'https://tylermcginnis.com/react-router-url-parameters/'
          },
          {
            name: 'Programmatically navigate',
            id: 'programmatically-navigate',
            description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
            url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
          }
        ]
      },
      {
        name: 'React.js',
        id: 'reactjs',
        description: 'A JavaScript library for building user interfaces',
        resources: [
          {
            name: 'React Lifecycle Events',
            id: 'react-lifecycle',
            description: "React Lifecycle events allow you to tie into specific phases of a components lifecycle",
            url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
          },
          {
            name: 'React AHA Moments',
            id: 'react-aha',
            description: "A collection of 'Aha' moments while learning React.",
            url: 'https://tylermcginnis.com/react-aha-moments/'
          }
        ]
      },
      {
        name: 'Functional Programming',
        id: 'functional-programming',
        description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
        resources: [
          {
            name: 'Imperative vs Declarative programming',
            id: 'imperative-declarative',
            description: 'A guide to understanding the difference between Imperative and Declarative programming.',
            url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
          },
          {
            name: 'Building User Interfaces with Pure Functions and Function Composition',
            id: 'fn-composition',
            description: 'A guide to building UI with pure functions and function composition in React',
            url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
          }
        ]
      }
]
function Recourses({match}){
const topic = topics.find(({id})=>id === match.params.topicId) 
.resources.find(({id})=> id === match.params.subId)
return(
    <div>
        <h2>{topic.name}</h2>
        <p>{topic.description}</p>
        <a href={topic.url}>More info.</a>
    </div>
)
}
function Topic({match}){
const topic = topics.find(({id})=> id === match.params.topicId)
return (
    <div>
        <h2>{topic.name}</h2>
        <p>{topic.description}</p>
        <ul>
            {topic.resources.map((sub)=>(
                <li key={sub.id}>
                    <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
                </li>
            ))}
        </ul>
        <hr/>
        <Route path={`${match.path}/:subId`} component={Recourses}/>
    </div>
)
}
function Topics({match}){
return (
    <div>
        <h1>Topics pages here</h1>
        <ul>
            {topics.map(({name, id})=>(
                <li key={id}>
                    <Link to={`${match.url}/${id}`}>{name}</Link>
                </li>
            ))}
        </ul>
        <hr/>
        <Route path={`${match.path}/:topicId`} component={Topic}/>
    </div>
)
}
export default function Another() {
    return (
        <Router>
        <div>
          <ul>
              <li>
                  <Link to="/"> News </Link>
              </li>
              <li>
                  <Link to="/topicss">Topics </Link>
              </li>
              <li>
                  <Link to="/onemore"> One More </Link>
              </li>
          </ul>
          <hr/>
          <Route exact path="/" component={News}/>
          <Route path="/topicss" component={Topics}/>
          <Route exact path="/onemore" component={Onemore}/>
        </div>
        </Router>
    )
}
const menus = [{
    path: "/",
    exact: true,
    sidebar: ()=> <h1>Side bar note</h1>,
    main: ()=><About/>
},
{
path: "/buble",
sidebar: ()=><h3>Hello World</h3>,
main: ()=><Home/>
},
{
    path: "/cuddle",
    sidebar: ()=><h2>Protext page</h2>,
    main: ()=><ProtectedPage/>
}
]
function News(){
    return(
        <Router>
   <h1>This is  new page</h1>
   <div style={{display:"flex"}}>
   <div style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}>
       <ul style={{ listStyleType: "none", padding: 0 }}>
           <li>
               <Link to="/">About</Link>
           </li>
           <li>
               <Link to="/buble">Home</Link>
           </li>
           <li>
               <Link to="cuddle">Protected Page</Link>
           </li>
       </ul>
       <Switch>
           {menus.map((route, index)=>(
               <Route key={index}
                path={route.path} 
                exact={route.exact}
               children={<route.sidebar/>}/>
           ))}
       </Switch>
   </div>
   <div style={{flex: 1, padding: "10px"}}>
       <Switch>
           {menus.map((route, index)=>(
               <Route key={index} path={route.path} exact={route.exact}
               children={<route.main/>}/>
           )
           )}
       </Switch>
   </div></div>
        </Router>
      
    )
}