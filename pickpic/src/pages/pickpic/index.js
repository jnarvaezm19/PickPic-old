import React from 'react';
import Layout from '../../components/layout';
import './style.css';

function PickPicPages(props){
    const {
        albums,
        createAlbum,
        onNewAlbum,
        onAddNewAlbum,
    } = props;
    return(
        <Layout>
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
            <div className="container-fluid row">
                <div className="col xs12 s4 card albums">
                    <div>
                        <h5>Albumnes</h5>
                    </div>
                    <div>
                        <div>
                            <button className="waves-effect waves-light btn blue"
                                    type="submit"
                                    name="albumAction"
                                    onClick={onNewAlbum}>
                                <i className="material-icons left">add</i>
                                Create
                            </button>
                        </div>
                        <div className="input-field col s6">
                            <input id="search" type="text" className="validate"/>
                            <label >Search album</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="date" className="datepicker"/>
                            <label ></label>
                        </div>
                    </div>
                    <div className="albums-list row">
                        {albums.map(album =>
                            <div className="col s12 m6" key={album.albumId}>
                                <div className="card hoverable albumItem">
                                    <button className="transparent">
                                        <i className="material-icons">clear</i>
                                    </button>
                                    <div className="card-image">
                                        <img src="https://images.freeimages.com/images/large-previews/4cb/photo-film-1187745.jpg"/>
                                        <input  type="text"
                                                placeholder="album title" 
                                                className="card-title"/>
                                    </div>
                                    <div className="card-content input-fiel">
                                        <textarea   id="textarea2" 
                                                    className="materialize-textarea" 
                                                    data-length="120"
                                                    placeholder="Album Description"></textarea>
                                    </div>
                                </div>
                            </div>
                        )

                        }
                    </div>
                    <div className="albums-list row">
                        
                    </div>
                </div>
                <div className="col xs12 s8 card">
                    <h5>Fotos</h5>
                </div>
            </div>
        </Layout>
    );
}

export default PickPicPages;