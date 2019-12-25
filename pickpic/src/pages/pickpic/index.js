import React from 'react';
import Layout from '../../components/layout';
import './style.css';
import $ from 'jquery';
import {findDOMNode} from 'react-dom';

function PickPicPages(props){
    const {
        albums,
        createAlbum,
        onNewAlbum,
        onAddNewAlbum,
        //conponentDidMount
    } = props;
    
    //Begin Load Materialize components
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
        var materialbox = document.querySelectorAll('.materialboxed');
        var materialboxInst = M.Materialbox.init(materialbox, {});
        var datepicker = document.querySelectorAll('.datepicker');
        var datepickerInst = M.Datepicker.init(datepicker, {});
    });
    //End load Materialize components 
    return(
        <Layout>
            <div className="row">
            <div className="div-albums">
                <div className="center">
                    <h5>Albums</h5>
                </div>
                <div className="item-list container row center">
                    <div className="item center col s3">
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
                            <div className="item center col s3 album-item card"
                                key={album.albumId}>
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
                <div className="container form-group row">
                    {createAlbum &&
                        <div className="card col s4">
                            <div className="center">
                                <h6>Create An Album</h6>
                            </div>
                            <div className="input-field div-create-album">
                                <input  type="text"
                                        id="txtAlbumName"/>
                                <label for="txtAlbumName">Album Name</label>
                                <button className="waves-effect waves-light btn-small blue"
                                        onClick={onNewAlbum}>
                                    <i className="material-icons">save</i>
                                </button>
                            </div>
                        </div> 
                    }
                </div>
            </div>
            <div className="div-galery">
                <div className="center">
                    <h5>Galery</h5>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <i class="material-icons prefix">search</i>
                        <input  type="text" 
                                className="form-control " 
                                placeholder="Search by description or title" 
                                id="txtSearch"/>
                    </div>
                    <div className="input-field col s6">
                        <input  type="text" 
                                class="datepicker" 
                                placeholder="Search by date"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 m3">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://free-images.com/lg/9f13/jumping_happy_people_female.jpg"
                                    className="materialboxed"/>
                                <span className="card-title">
                                    <input  type="text" 
                                            className="browser-default inputpb" 
                                            placeholder="album title"/>
                                </span>
                            </div>
                            <div class="card-content carditem">
                                <textarea id="textarea2" 
                                          class=" albumdescription" 
                                          data-length="145" 
                                          placeholder="Write the Album description"></textarea>
                                <label for="textarea2">Description</label>
                            </div>
                            <div className="card-action center">
                                <button className="btn-floating waves-effect waves-light red">
                                    <i className="material-icons hoverable">delete</i>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            </div>
        </Layout>
    );
}

export default PickPicPages;