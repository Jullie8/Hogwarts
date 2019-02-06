import React from 'react'

class CreateForm extends React.Component {
    state={
        name:'',
        age: 0,
        house: 'Gryffindor',
        role: '',
        image1: '',
        image2: '',
    }

    handleChange = (e) =>{
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    //function to iterate over houses and create options
    renderOptionsHouse = () =>{
        return this.props.houses.map( house => (<option key={house} value={house}>{house} </option>))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleCharacterSubmitFe(this.state)
    }
    //onsubmit of the for do what to the front end 
    //I want to add the newWizard from saved on the state  
    //add by first creating a copy of the array of object [...this.state.arr, newWizard];
    //then set state so that charactersArr: then becomes the copiedArr;
    //onSubmit call this function make sure to fetch so that is goes to the backend 

    render() {
        return (
            <React.Fragment> 
                <form onSubmit={this.handleSubmit}>
                    Full Name: <input type="text" value={this.state.name} name="name" onChange={this.handleChange} /> {''} 
                    Role: <input type="text" value={this.state.role} name="role" onChange={this.handleChange} /> {''}
                    Age: <input type="text" value={this.state.age} name="age" onChange={this.handleChange} /> {''}
                    
                     <br />
                    Image1: <input type="text" value={this.state.image1} name="image1" onChange={this.handleChange} />  {''}
                    Image2: <input type="text" value={this.state.image2} name="image2" onChange={this.handleChange} />  {''}
                    <select>
                        {this.renderOptionsHouse()}
                    </select>

                    <input type='submit' />
                </form>
            </React.Fragment>
        )
    }
}

export default CreateForm;

// Have a form to add characters on submit
// Do this optimistically (without using fetch)