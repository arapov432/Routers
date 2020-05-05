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
                        <Link to={`${url}/regstr`}>Registration</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path={`${path}/`} component={Admission}/>
                    <Route path={`${path}/servicess`} component={Servicess}/>
                    <Route path={`${path}/regstr`} component={Register}/>
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


function sq(num){
    return num*num;
}
console.log(sq(5));
console.log(sq(10));
var hello = 'Kgmamba';
function Awesome(){
    console.log(hello + 'is pretty awesome. ');
}
Awesome();
var age = 10;
if(age>=16){
    console.log('Yay, you can drive!');
    }
    else{
        console.log("sorry you have to " +(16-age)+ ' years until you can drive.');
    }
var ages = 36;
if(ages>=35){
    console.log('You can vote and run for President!');
}
if(ages>=30){
    console.log('You can vote and run for senate!');
}
else if(ages>=18){
    console.log('You can vote!')
}
else{
    console.log('You can not vote, but you can write your representatives.');
}
var old = 30;
var yearscitizen = 30;
if (old>=30 && yearscitizen>9){
    console.log('You can run for the Senate!');
}
else{
    console.log('You are not eligible to run for the Senate')
}
var bottleofwater=20;
while(bottleofwater>0){
    console.log(bottleofwater + "Bottle of beer on the wall");
    bottleofwater-=1;
}