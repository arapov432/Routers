import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Another from './another';



const topics =[
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
function Recources({match}){
  const topic = topics.find(({id})=> id === match.params.topicId)
  .resources.find(({id})=>id === match.params.subId)
  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>
      <a href={topic.url}>Read more...</a>
    </div>
  )
  }
  function Top({match}){
    const topic = topics.find(({id})=> id === match.params.topicId)
    return (
      <div>
        <h2>{topic.name}</h2>
        <p>{topic.description}</p>
        <ul> {topic.resources.map((sub)=>
          <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
          </li>)}
        </ul>
        <hr/>
        <Route path={`${match.path}/:subId`} component={Recources}/>
      </div>
    )
  }
function Lists({match}){
return (
  <div>
    <h1>Topics pages </h1>
    <ul>
      {topics.map(({ name, id }) => (
        <li key={id}>
          <Link to={`${match.url}/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
    <hr/>
    <Route path={`${match.path}/:topicId`} component={Top}/>
  </div>
)
}
export default function Home() {
    
    return (
     
            <Router>
          <h1>Home Welcome</h1>
          <ul>
            <li>
              <Link to="/device">Devices</Link>
            </li>
            <li>
              <Link to="/lists">Lists</Link>
            </li>
            <li>
              <Link to="/another">News</Link>
            </li>
          </ul>
        <Switch>
          <Route exact path="/device" component={Devices}/>
          <Route path="/lists" component={Lists}/>
          <Route path="/another" component={Another}/>
        </Switch>
        </Router>
       
    )
}
function Devices(){
  return (
    <h1>The devices page</h1>
  )
}