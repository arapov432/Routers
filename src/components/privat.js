import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch} from 'react-router-dom'
import Register from './register';

export default function ProtectedPage()  {
 
        let {path, url} = useRouteMatch();
        return (
            <Router>
            <div>
                <h1>This is Protected Page</h1>
                <ul>
                    <li>
                        <Link to={`${url}/`}>Admission</Link>
                    </li>
                    <li>
                        <Link to={`${url}/servicess`}>Services</Link>
                    </li>
                    <li>
                        <Link to={"/regstr"}>Registration</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path={`${path}/`} component={Admission}/>
                    <Route path={`${path}/servicess`} component={Servicess}/>
                    <Route path={"/regstr"} component={Register}/>
                </Switch>
            </div>
            </Router>
        )
    
}
function Admission(){
    
    return (
    <div><h1>This is Admission</h1>
    <h4>The path id </h4>
    </div>
    )
}
function Servicess(){
    return (<h1>This is Services </h1>)
}


