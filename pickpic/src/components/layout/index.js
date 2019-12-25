import React from 'react';
import './style.css';

function PickPicPages(props){
    return(
        <div className="App">
            <nav>
              <div className="nav-wrapper grey darken-4 center">
                <a href="#" className="brand-logo">PickPic</a>
              </div>
            </nav>
            <div className="">
                {props.children}
            </div>
        </div>
    );
}

export default PickPicPages;