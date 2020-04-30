import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route, Redirect, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import './App.css';
import Home from './components/homie';
import ProtectedPage from './components/privat';



function App() {
 

  return (
      <div className="App">
        <div className="jumbotron textcenter">
          <h1>This is kgmamba </h1>
          
          <h5>This online market </h5>
        </div>
        <div className="container">
        <Router>
       
        <SignButton/>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/homie">Home</Link>
          </li>
          <li>
            <Link to="/privates">Privates</Link>
          </li>
          <li>
            <Link to="/somethingelse">Something else</Link>
          </li>
        </ul>
      <Switch>
  <Route exact path="/" children={<About/>}/>
  <Route path="/homie" children={<Home/>}/>
  <Route path="/somethingelse" children={<Somethingelse/>}/>
        <Route path="/login" children={<LoginPage/>}/>
          <PrivRoute path="/privates" children={<ProtectedPage/>}/>
          
      </Switch>
  </Router>
  </div>
    </div>
  );
}
const isAuthon = {
  isAuthontication: false,
  signIn(ab){
    isAuthon.isAuthontication = true; 
    setTimeout(ab, 1000)
  },
  signOut(ab){
    isAuthon.isAuthontication = false;
    setTimeout(ab, 1000);
  }
};

function SignButton(){
  let history = useHistory();
  return isAuthon.isAuthontication ? (
  <p>
    Welcome! {" "}
    <button onClick={()=>{
      isAuthon.signOut(()=>history.push("/"));
      }}
      >
        Sign out</button>
    </p>
    ):(<p> You are not logged in</p>)
}


function PrivRoute({children, ...rest}) {
  return (
    <Route 
    {...rest}
    render ={({location})=>
    isAuthon.isAuthontication ? (
      children
      ):(
    <Redirect to={{
      pathname: "/login",
      state: { from: location }
    }}/>
    )}/>
          
  );
}

function LoginPage(){
let history = useHistory();
let location = useLocation();
let {from}= location.state || {from:{pathname: "/"}};
let login =()=>{
  isAuthon.signIn(()=>{history.replace(from);
  });
};
return (
  <div>
    <p> You must login first {from.pathname}</p>
    <button onClick={login}>Log in</button>
  </div>
)
}
function About() {
  return (
    <div>
        <h1>Homes Page</h1>
    </div>
) 
}
function Somethingelse() {
  return (
    <div>
        <h1>Something else Page</h1>
    </div>
) 
}

export default App;
