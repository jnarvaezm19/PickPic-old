import React, {Component} from 'react';
import PickPic from '../pages/pickpic';
import $ from 'jquery';

class PickPicContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            albums: [],
            createAlbum: false,
            showGalery: false,
            photos: [],
            createPhoto: false
        }
        this.onNewAlbum = this.onNewAlbum.bind(this);
        this.onAddNewAlbum = this.onAddNewAlbum.bind(this);
        this.onNewPhoto = this.onNewPhoto.bind(this);
        this.onAddNewPhoto = this.onAddNewPhoto.bind(this);
        this.onShowGalery = this.onShowGalery.bind(this);
        this.onRemovePhoto = this.onRemovePhoto.bind(this);
    }

    onNewPhoto(){
        this.setState({
            showGalery: true,
            createPhoto: false,
            photos:[
                ...this.state.photos,
                {
                    photoId: Date.now(),
                    albumId: this.state.albums.albumId,
                    photoName: 'Album test',
                    photoDescription: 'album description',
                    photoUrl: 'https://free-images.com/lg/9f13/jumping_happy_people_female.jpg',
                    photoDateCreated: Date.now(),
                    isEditing: false
                }
            ]
        });
    }

    //Method to add new album
    onNewAlbum(){
        this.setState({
            showGalery: true,
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
            createAlbum: !this.state.createAlbum,
            showGalery: false
        });
    }

    //method to show the form to add new album
    onAddNewPhoto(){
        this.setState({
            createPhoto: !this.state.createPhoto
        });
        console.log('createPhoto: ' + this.state.createPhoto);
    }

    //method to show the form to add new album
    onShowGalery(){
        this.setState({
            showGalery: !this.state.showGalery
        });
    }

    onRemovePhoto(photo){
        const { photos } = this.state;
        const photoIndex = photos.findIndex(n => n.photoId === photo.photoId);
        if(photoIndex === -1){
            return;
        }
        const newPhotos = photos.slice();
        newPhotos.splice(photoIndex,1);

        this.setState({
            photos: newPhotos
        });
    }

    render(){
        const {
            albums,
            createAlbum,
            photos,
            createPhoto,
            showGalery
        } = this.state;
        return(
            <PickPic
                albums={albums}
                createAlbum={createAlbum}
                showGalery={showGalery}
                photos={photos}
                createPhoto={createPhoto}
                onNewAlbum={this.onNewAlbum}
                onAddNewAlbum={this.onAddNewAlbum}
                onShowGalery={this.onShowGalery}
                onNewPhoto={this.onNewPhoto}
                onAddNewPhoto={this.onAddNewPhoto}
                onRemovePhoto={this.onRemovePhoto}
            />
        );
    }
}

export default PickPicContainer;