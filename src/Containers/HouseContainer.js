import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {

  state = {
    houses: [],
    
  }

  componentDidMount() {
    fetch('http://localhost:3001/houses')
      .then((res) => {
        return res.json();
      })
      .then((houses) => {
        this.setState({ houses })
      })
  }
  // create a artificial arr  to pass down as props to house card with all the chara pertaining to each house
    getByHouse = (type) => {
      return this.props.characters.filter((character)=>{
        return character.house === type
      })
    }
  render() {
    let houses = this.state.houses.map((house) => <House key={house} houseData={house} charData={this.getByHouse(house)} handleHouseChange={this.props.handleHouseChange}/>)
    return <ul className="houseContainer">
      {houses}
      </ul>;
  }
}
