import React from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from './about'
import Another from './another'
import Home from './homie'
import Register from './register'
import ProtectedPage from './privat'
import Somethingelse from './some'

const array =[
{
    name: "Algebra by Deitel ",
    id: "algebra-k8",
    description:"This algebra for k8 and all math topics included.",
    resource:[
        {
            name: "Calculus by John Steven",
            id: "calculus-k12",
            description: "Calculus is for k12 and all topics included integral and trigonometers",
            url: <About/>
        },
        {
            name: "Musics by Kevin Steven",
            id: "music-class",
            description: "Music is for k12 and all topics included integral and trigonometers",
            url: <Another/>
        }
    ]
    
},
{
    name: "Java by Azamat ",
    id: "cs-java",
    description:"This OOP for k8 and all math topics included.",
    resource:[
        {
            name: "C++ is la la land by John Steven",
            id: "cplusplusfor-everybody",
            description: "C plus plus is for k12 and all topics included integral and trigonometers",
            url: <Home/>
        },
        {
            name: "C sharp by Kevin Steven",
            id: "c-sharp",
            description: "Coding is for k12 and all topics included integral and trigonometers",
            url: <Register/>
        }
    ]
    
},
{
    name: "JavaScript by Arapov ",
    id: "cs-javascript",
    description:"This algebra for k8 and all math topics included.",
    resource:[
        {
            name: "Biology by John Steven",
            id: "biology",
            description: "Biology is for k12 and all topics included integral and trigonometers",
            url: <Somethingelse/>
        },
        {
            name: "Geography by Kevin Steven",
            id: "geography",
            description: "Music is for k12 and all topics included integral and trigonometers",
            url: <ProtectedPage/>
        }
    ]
    
},
]
function Resources({match}){
    const topic = array.find(({id})=> id ===match.params.topicId)
    .resource.find(({id})=>id === match.params.subId)
    return (
        <div>
        <h2>Topics name {topic.name}</h2>
        <p>Description {topic.description}</p>
        <a href={topic.url}>More info.</a>
        </div>
    )
}
function TopList({match}){
    const topic = array.find(({id})=> id === match.params.topicId)
    return(
        <div>
        <h1> Top List topicss namess {topic.name}</h1>
        <p>Description {topic.description}</p>
       <ul>{topic.resource.map((sub)=>(
           <li key={sub.id}>
               <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
           </li>
       ))}
       </ul>
       <hr/>
       <Route path={`${match.path}/:subId`} component={Resources}/>
       </div>
    )
}
function MainTopics({match}){
    return(
        <div>
            <h1>Topics all here </h1>
            <ul>
                {array.map(({id, name})=>(
                    <li key={id}>
                        <Link to={`${match.url}/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <hr/><hr/>
                    <Route path={`${match.url}/:topicId`} component={TopList}/>
        </div>
    )
}

export default function Onemore() {
    return (
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to="/">One more</Link>
                    </li>
                    <li>
                        <Link to="/two">Two more</Link>
                    </li>
                </ul>
                <hr/>
                <Route exact path={"/"} component={Threemore}/>
                <Route path={"/two"} component={MainTopics}/>
            </Router>
        </div>
    )
}
function Threemore(){
    return (
        <h1>Three more pages</h1>
    )
}