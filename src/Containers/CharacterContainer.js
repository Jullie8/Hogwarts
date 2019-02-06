import React from "react";
import CharacterCard from '../Components/CharacterCard'
//needs classcontainer className
export default class CharacterContainer extends React.Component {

  render() {
    let characterCardArr = this.props.characters.map(character => <CharacterCard key={character.id} characterData={character} handleHouseChange={this.props.handleHouseChange} handleDelete={this.props.handleDelete} />)
    return <div className="band"> 
                {characterCardArr}  
          </div>;
  }
}
