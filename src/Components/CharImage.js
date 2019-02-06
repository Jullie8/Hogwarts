import React from 'react';
import { Image } from 'semantic-ui-react';
import CharacterDetails from './CharacterDetails'

class CharImage extends React.Component {
    state = {
        isImgClicked: false
    }

    handleImgClick = () => {
        this.setState({
            isImgClicked: !this.state.isImgClicked
        })
    }

    render() {
         let renderMoreDetails = this.state.isImgClicked === true ? 
             <CharacterDetails characterData={this.props.characterData} handleHouseChange={this.props.handleHouseChange} /> :null

        return (
            <div> <Image onClick={this.handleImgClick} key={this.props.characterData.id} src={this.props.characterData.image2} size='small' circular />
            {renderMoreDetails}
            </div>
        )
    }
}

export default CharImage;