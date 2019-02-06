import React, { Component } from "react";
import "./App.css";
import CharacterContainer from './Containers/CharacterContainer';
import HouseContainer from './Containers/HouseContainer';
import CreateForm from './Components/CreateForm';

class App extends Component {
  state = {
    characters: [], 
    houses: [], 
    addIsClicked:false, 
    filteredTerm: '',
  }


  handleClickAdd = () =>{
    console.log('add is clicked')
    //goal of this function is to setStateOfClicked
    this.setState({
      addIsClicked: !this.state.addIsClicked
    })
  }

  handleChange = (e) =>{
    //this will hear the letter in the search input 
    this.setState({
      filteredTerm:e.target.value
    })
  }

  handleCharacterSubmitFe = (wizardObj) =>{
    fetch('http://localhost:3001/characters',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(wizardObj)
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data)
      let newArrOfWizards = [...this.state.characters, data];
      this.setState({
        characters: newArrOfWizards
      })
    })
  

  }

  handleDelete = (charObj) =>{
    fetch(`http://localhost:3001/characters/${charObj.id}`,{
      method:'DELETE'
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      //remove from DOM HOW??
      console.log('hey', data)
      //filter for the id that is not that id 
    let arrWithRemovedObj= this.state.characters.filter((char)=>{
        return char.id !== charObj.id
      })
      this.setState({
        characters: arrWithRemovedObj
      })
    
    })
  }


  handleHouseChange = (charObj, state) => {
    console.log('hi',charObj, state) 
    //this is what will be passed down to FORM so that on submit this is executed 
    //make a copy of the obj
    fetch(`http://localhost:3001/characters/${charObj.id}`,{
      method:'PATCH',
      headers: {
        'Content-Type':'application/json',
        'Accepts': 'application/json'
      },
      body:JSON.stringify({
        house:state
      })
    })
    .then((res)=>{
      return res.json();
    }).then((responseObj)=>{
      console.log(responseObj)
      // let copyCharObj = {...responseObj}
      let newArrayCharacters = this.state.characters.map((character) => {
        //compare ids of pets with the responseObj id 
        if (character.id === responseObj.id) {
          return responseObj
        } else {
          return character
        }
      })
      //set State so that the array now contains the newObj copy  with new val
      this.setState({
        characters: newArrayCharacters
      })

    })

  }
  
  componentDidMount () {
    fetch('http://localhost:3001/characters')
    .then((res)=>{
      return res.json();
    })
    .then((characters)=>{
      this.setState({characters})
    })
    //can do 2 fetch inside one component did mount 
    fetch('http://localhost:3001/houses')
    .then((res)=>{
      return res.json()
    })
    .then((houses)=>{
      this.setState({houses})
    })
  }

//to Filter make an input box capture the onChange value of the input
//if those letters are included in the characters obj or in the home object
//then return the new arr of characters
  filteredArr = () => {
    return this.state.characters.filter((char)=>{
      return char.name.toLowerCase().includes(this.state.filteredTerm.toLowerCase()) || char.house.toLowerCase().includes(this.state.filteredTerm.toLowerCase());
    })
  }


  render() {
    let renderCreateForm = this.state.addIsClicked ? <CreateForm handleCharacterSubmitFe={this.handleCharacterSubmitFe} houses={this.state.houses}/> : null
    console.log(this.state.filteredTerm)
    return (
      <div className="app">
        <h1>You Can Do This! Search Bar</h1>
        <button onClick={this.handleClickAdd} >Add A Character </button>
        {renderCreateForm} {''}
        Filter: {''}
        <input type="text" name="filteredTerm" value={this.state.filteredTerm} onChange={this.handleChange} />
        <hr />
        <CharacterContainer 
        characters={this.filteredArr()} 
        handleHouseChange={this.handleHouseChange}
        handleDelete={this.handleDelete}/>

          <hr/>
          <HouseContainer 
          characters={this.filteredArr()}
          handleHouseChange={this.handleHouseChange} />   
      </div>
    );
  }
}

export default App;


//first i would have to change the object first 
//so that the array can rerender mapping it 

//i need to get the object
//make a copy 
// and change it to whatever e.target.value is 
//const new array  and map it and inside map create a conditional to check if the object id is === to any obj id in the array
//if there exists a match return aka replace it with the copy of the obj
//else return the obj in the map
//then change the state of charactersArr: to newArr which contains the information