import React from "react";
import { Header } from 'semantic-ui-react'
import CharImage from './CharImage';



class House extends React.Component {

  render () {
    let chars = this.props.charData.map((char) => {return <CharImage key={char.id} characterData={char} handleHouseChange={this.props.handleHouseChange} src={char.image2} size='small' circular />})
    return (
      <div className="list" >
        <Header as='h2' icon='home' content={this.props.houseData} />
        { chars }
      </div>
    )
  }
}

export default House;
