import React, {Component} from 'react';
import PickPic from '../pages/pickpic';
import $ from 'jquery';

class PickPicContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            albums: [],
            createAlbum: false
        }
        this.onNewAlbum = this.onNewAlbum.bind(this);
        this.onAddNewAlbum = this.onAddNewAlbum.bind(this);
    }
    
    //Method to add new album
    onNewAlbum(){
        this.setState({
            albums:[
                ...this.state.albums,
                {
                    albumId: Date.now(),
                    albumName: 'Album test',
                    albumDateCreated: Date.now(),
                    isEditing: false
                }
            ],
            createAlbum: false 
        });
    }
    
    //method to show the form to add new album
    onAddNewAlbum(){
        this.setState({
            createAlbum: !this.state.createAlbum
        });
    }

    render(){
        const {
            albums,
            createAlbum
        } = this.state;
        return(
            <PickPic
                albums={albums}
                createAlbum={createAlbum}
                onNewAlbum={this.onNewAlbum}
                onAddNewAlbum={this.onAddNewAlbum}
            />
        );
    }
}

export default PickPicContainer;