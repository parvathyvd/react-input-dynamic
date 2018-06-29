import React from 'react';

const person = (props)=> {
    return(
        <div>
        <p>This text comes from the person functional component</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        <h3 onClick ={props.click}>my name is {props.name} and age is {props.age} </h3>
        </div>
    )
}

export default person