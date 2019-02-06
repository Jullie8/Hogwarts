import React from "react";

class UpdateForm extends React.Component {

  state = {
    houseVal: ''
  }
  handleChange = (e) =>{
    //goal of this function is to setState val of new House
    this.setState({
      houseVal:e.target.value
    })
  }
  handleSubmit = (e) =>{
    // alert('Your favorite flavor is: ' + this.state.houseVal);
    e.preventDefault();
    this.props.handleHouseChange(this.props.characterData,this.state.houseVal)
  }

  render() {
    console.log(this.state.houseVal)
    return <div> 
         <h3>Update Your House</h3>

         <form onSubmit={this.handleSubmit}>
           <label>
             New Address:
          <select name="type" id="type" onChange={this.handleChange}>
               <option value=""></option>
               <option value="Gryffindor">Gryffindor</option>
               <option value="Slytherin">Slytherin</option>
               <option value="HufflePuff">HufflePuff</option>
               <option value="Ravenclaw">Ravenclaw</option>
             </select>
           </label>
           <input type="submit" value="Submit" />
         </form>

    </div>
  }
}

export default UpdateForm;