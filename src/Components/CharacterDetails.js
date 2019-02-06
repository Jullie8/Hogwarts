import React from "react";
import { Card, Icon } from 'semantic-ui-react';
import UpdateForm from './UpdateForm'

class CharacterDetails extends React.Component {

  state = {
    img2Clicked: false,
  }


  handleImg2Handle = () => {

    this.setState({
      img2Clicked: !this.state.img2Clicked
    })
  }

  //if the state is true then pass in a function that will render the Update Form 
  render () {
    console.log(this.props)
    console.log(this.state)

    const renderForm = this.state.img2Clicked ? <UpdateForm
    handleHouseChange={this.props.handleHouseChange}
    characterData={this.props.characterData} /> : null
  
   return (<Card>
     <Card.Content header={this.props.characterData.name} />
     <Card.Content description={this.props.characterData.role} />
     <Card.Content description={this.props.characterData.age} />
     <Card.Content extra>
       <a onClick={this.handleImg2Handle}>
         <Icon name='home' />
         {this.props.characterData.house}
       </a>
       {renderForm}
     </Card.Content>
   </Card>)
 }
  
} ;

export default CharacterDetails;

 {/* <h3>{props.char.name}</h3>
  <p>{props.char.house}</p>
  <p>{props.char.role}</p>
  <p>{props.char.age}</p> */}
