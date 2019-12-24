import React, {Component} from 'react';
import PickPic from '../pages/pickpic';
import $ from 'jquery';

class PickPicContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            albums: []
        }
        this.onNewAlbum = this.onNewAlbum.bind(this);
    }
    
    //Method to prepare the field of the new album
    onNewAlbum(){
        this.setState({
            albums:[
                ...this.state.albums,
                {
                    albumId: Date.now(),
                    albumName: '',
                    albumDateCreated: Date.now(),
                    isEditing: true
                }
            ]
        });
    }

    render(){
        const {
            albums
        } = this.state;
        return(
            <PickPic
                albums={albums}
                onNewAlbum={this.onNewAlbum}
            />
        );
    }
}

export default PickPicContainer;