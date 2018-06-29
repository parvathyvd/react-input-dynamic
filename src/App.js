import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
      details: [
              {id: 1, name: "Parvathy Vazhoor", age :30},
              {id: 2, name: "Suma Maniyath", age :50},
              {id: 3, name: "Sudeep Vazhoor", age :35},
      ],
      showPersons : false,
  }

  toggleChangeHandler = ()=>{
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons : !doesShow
    })
  }
  detailDeleteHandler = (inputIndex) => 
  { 
    const detailsCopy = [...this.state.details]
    detailsCopy.splice(inputIndex,1);
    this.setState({details: detailsCopy})
  }

  inputNameHandler = (event, id) =>{
     const personIndex = this.state.details.findIndex(d =>{
        return d.id === id;
      });

      const detail = {...this.state.details[personIndex]};

      detail.name = event.target.value;

      const details = [...this.state.details];

      details[personIndex] = detail;

      this.setState({
        details : details
      })

  }
  

  render() {
    let persons = null;
    if(this.state.showPersons){
    persons = (
      <div>
        {this.state.details.map((detail,index) =>{
          return (<Person 
              key = {detail.id} 
              name= {detail.name} 
              age = {detail.age} 
              click= {()=> this.detailDeleteHandler(index)} 
              changed = {(event) => this.inputNameHandler(event,detail.id)}
              />);
        }
        )}
      </div>
      )
    }
    return (
      <div className="App">
        <p className="App-intro">
         Hi there!</p>
         <button onClick={this.toggleChangeHandler}>Change</button>
         {persons}
      </div>
    );
  }
}

export default App;
