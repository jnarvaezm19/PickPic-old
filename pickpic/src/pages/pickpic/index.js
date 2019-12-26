import React from 'react';
import Layout from '../../components/layout';
import './style.css';
import {findDOMNode} from 'react-dom';

function PickPicPages(props){
    const {
        albums,
        createAlbum,
        onNewAlbum,
        showGalery,
        onAddNewAlbum,
        photos,
        onNewPhoto,
        onAddNewPhoto,
        onShowGalery,
        createPhoto,
        onRemovePhoto
        //modalAddPhoto
    } = props;
    
    //Begin Load Materialize components
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
        var materialbox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialbox, {});
        var datepicker = document.querySelectorAll('.datepicker');
        M.Datepicker.init(datepicker, {});
        //var modal = document.querySelectorAll('.modal');
        //var modalInst = M.Modal.init(modal, {});
    });
    //End load Materialize components 
    return(
        <Layout>
            <div className="row">
            <div className="div-albums col s4">
                <div className="center">
                    <h5>Albums</h5>
                </div>
                <div className="item-list container row center">
                    <div className="item center col s12 m6 l4">
                        <button className=" btn-floating 
                                            btn-large 
                                            waves-effect 
                                            waves-light 
                                            white 
                                            hoverable 
                                            pulse"
                                title="Create Album"
                                onClick={onAddNewAlbum}>
                            <i className="material-icons">add</i>
                        </button>
                    </div>
                    {albums.map((album, i) =>
                        album.albumName !== "" ?
                            <div className="item center col s12 m6 album-item card"
                                key={album.albumId} onClick={onShowGalery}>
                                <div className="card album-content">
                                    <div className="card-image">
                                        <img src="https://images.freeimages.com/images/large-previews/843/grunge-floral-1154276.jpg"/>
                                        <span className="card-title album-title">{album.albumName}</span>
                                    </div>
                                </div>   
                            </div>
                        :
                        <React.Fragment></React.Fragment>
                    )}
                </div>
                <div className=" form-group ">
                    {createAlbum &&
                        <div className="card col s12">
                            <div className="center">
                                <h6>Create An Album</h6>
                            </div>
                            <div className="input-field div-create-album">
                                <input  type="text"
                                        id="txtAlbumName"/>
                                <label htmlFor="txtAlbumName">Album Name</label>
                                <button className="waves-effect waves-light btn-small blue"
                                        onClick={onNewAlbum}>
                                    <i className="material-icons">save</i>
                                </button>
                            </div>
                        </div> 
                    }
                </div>
            </div>
            <div className="div-galery col s8">
                <div className="center">
                    <h5>Galery</h5>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">search</i>
                        <input  type="text" 
                                className="form-control " 
                                placeholder="Search by description or title" 
                                id="txtSearch"/>
                    </div>
                    <div className="input-field col s6">
                        <input  type="text" 
                                className="datepicker" 
                                placeholder="Search by date"/>
                    </div>
                </div>
                <div className="">
                    {showGalery &&
                        <React.Fragment>
                            {createPhoto ?
                                <div className="container center">
                                    <div className="card card-addPhoto row">
                                        <div className="col s12 m5">
                                    </div>
                                    <div className="col s12 m7">
                                        <h5>
                                            Add New Photo
                                        </h5>
                                        <div className="input-field">
                                            <i className="material-icons prefix">title</i>
                                            <input  id="photoTitle" 
                                                    type="text" 
                                                    className="validate"/>
                                            <label htmlFor="photoTitle">Photo Title</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">mode_edit</i>
                                            <textarea id="textarea3" 
                                                    className="form-control txaPhotoDescription
                                                    materialize-textarea" 
                                                    data-length="145" 
                                                    ></textarea>
                                            <label htmlFor="textarea3">Write the Album description</label>
                                        </div>
                                        <div className="file-field">
                                            <div className="btn red darken-4">
                                                <i className="material-icons">add_a_photo</i>
                                                <input  type="file" 
                                                        multiple/>
                                            </div>
                                            <div className="file-path-wrapper">
                                                <input  className="file-path validate" 
                                                        type="text" 
                                                        placeholder="Upload one or more files"
                                                        accept="image/*"/>
                                            </div>
                                        </div>
                                        <div className="btn-group">
                                            <button className="btn col s6 form-group"
                                                    onClick={onNewPhoto}>
                                                Updload
                                            </button>
                                            <button className="btn col s6 form-group"
                                                    onClick={onAddNewPhoto}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>                                        
                            </div> 
                            :
                            <React.Fragment>
                                <div className="col s12">
                                    <button className="btn-floating btn-large waves-effect waves-light red"
                                            onClick={onAddNewPhoto}>
                                        <i className="material-icons">add</i>
                                    </button>
                                </div>
                            </React.Fragment>
                            }
                          {photos.map(photo =>
                                <div className="col s12 m6 l4 container-fluid" key={photo.photoId}>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={photo.photoUrl}
                                                className="materialboxed"/>
                                            <span className="card-title">
                                                <input  type="text" 
                                                        value={photo.photoDescription}
                                                        className="browser-default inputpb" 
                                                        placeholder="album title"/>
                                            </span>
                                        </div>
                                        <div className="card-content carditem">
                                            <textarea id="textarea2" 
                                                    className=" albumdescription" 
                                                    data-length="145" 
                                                    value={photo.photoName}
                                                    placeholder="Write the Album description"></textarea>
                                            <label htmlFor="textarea2">Description</label>
                                        </div>
                                        <div className="card-action center">
                                            <button className="btn-floating waves-effect waves-light red"
                                                    onClick={() => onRemovePhoto(photo)}>
                                                <i className="material-icons hoverable">delete</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    }
                </div>
            </div>
            </div>
        </Layout>
    );
}

export default PickPicPages;