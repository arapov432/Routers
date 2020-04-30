import React from 'react'
import {BrowserRouter as Router, Switch,Route, Link, Redirect, useLocation, useHistory } from 'react-router-dom'

export default function ProtectedPage() {
    return (
       <Router>
           <SinButton/>
           <ul>
               <li>
                   <Link to="/">Contact Us</Link>
               </li>
               <li>
                   <Link to="/registr">Registration</Link>
               </li>
           </ul>
           <Switch>
           <Route exact path="/" children={<Regist/>}/>
            <Route path="/logins" children={<LoginPage/>}/>
            <PriRoute path="/registr" children={<Registr/>}/>
            </Switch>
       </Router>
    )
}
const fakeAuth ={
    isAuth: false,
    Signin(bc){
        fakeAuth.isAuth = true;
        setTimeout(bc, 100);
    },
    Singout(bc){
        fakeAuth.isAuth = false;
        setTimeout(bc, 100);
    }
}
function SinButton(){
    let history = useHistory();
    return fakeAuth.isAuth ? (
    <p> Welcome!
        <button onClick={()=>{
            fakeAuth.Signout(()=>history.push("/"))
            }}>
            Sign Out
        </button>
    </p>
    ):(
        <p>You have to sign in first!</p>
    );
    
}
function PriRoute({children, ...rest}){
return (
<Route
{...rest}
render = {({location})=>
    fakeAuth.isAuth ? (
        children
        ) : (
        <Redirect 
        to={{
            pathname: "/logins",
        state: {from: location}
    }}
        />
     )}
     />
    );
}

function LoginPage(){
    let location = useLocation();
    let history = useHistory();
    let {from} = location.state || {from: {pathname: "/"}};
    let login =()=>{
        fakeAuth.Signin(()=>{history.replace(from)})
    }
    return (
        <div>
            <p>Login here the path {from.pathname}</p>
            <button onClick={login}>Login</button>
        </div>
    )
}
function Registr(){
    return (
        <h1>This is Registration pages</h1>
    )
}
function Regist(){
    return (
        <h1>This is Another pages</h1>
    )
}
