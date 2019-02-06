import React from "react";
import { Card,Image,Icon } from 'semantic-ui-react';
import UpdateForm from './UpdateForm';
import Button from './Button';

class CharacterCard extends React.Component {
  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    //pass down the houses which should be in app 
    //pass down all the houses array so that we do not have to hard code it 
    console.log(this.props)
    const renderForm = this.state.clicked === true ? <UpdateForm 
    handleHouseChange={this.props.handleHouseChange} 
    characterData={this.props.characterData} /> : null
    
    return  <Card>
        <Image src={this.props.characterData.image1} />
        <Card.Content>
          <Card.Header>{this.props.characterData.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
        <a onClick={this.clickHandler}>
          <Icon name='home' />
          {`House: ${this.props.characterData.house}`}
      </a>
      {renderForm}
      </Card.Content>
        <Button characterData={this.props.characterData} handleDelete={this.props.handleDelete} />
    </Card>
  }
}

export default CharacterCard;
