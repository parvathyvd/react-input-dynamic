import React from 'react';
import Person from './Person.css'

const person = (props)=> {
    return(
        <div className="person">
        <p>This text comes from the person functional component</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        <h3 onClick ={props.click}>My name is {props.name} and age is {props.age} .If you click on the text(me) I will get deleted</h3>
        </div>
    )
}

export default person