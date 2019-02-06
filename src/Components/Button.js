import React from 'react'; 

class Button extends React.Component {
   
    //need a function that will tell it that it has been click through state
    handleClick = () => {
        //purpose of this func is to set state and call back function that tells it which obj it is being clicked on
        console.log("delete")
        this.props.handleDelete(this.props.characterData)
        
    }
    render() {
        console.log(this.props)
        return (
            <button onClick={this.handleClick}> DELETE ME </button>
        )
    }
}

export default Button;