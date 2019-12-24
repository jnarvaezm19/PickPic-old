import React from 'react';
import Layout from '../../components/layout';
import './style.css';

function PickPicPages(props){
    const {
        albums,
        onNewAlbum
    } = props;
    return(
        <Layout>
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
                                        <i class="material-icons">clear</i>
                                    </button>
                                    <div className="card-image">
                                        <img src="https://images.freeimages.com/images/large-previews/f07/photo-album-1425192.jpg"/>
                                        <input  type="text"
                                                placeholder="album title" 
                                                className="card-title"/>
                                    </div>
                                    <div className="card-content input-fiel">
                                        <textarea   id="textarea2" 
                                                    class="materialize-textarea" 
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