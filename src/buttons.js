import React from 'react';
import "./App.css"

class Buttons extends React.Component {
    render() {
        return (
            <div className="controller-container">
                {/* <div className="square"> */}
                <div className="button-container" id="button-container" onMouseOver={this.props.rotateWheel}>
                    <button className="menu-button" onClick={this.props.changePageToHomeScreen}>< i className="fas fa-bars"></i></button>
                    <button className="center-circle" onClick={this.props.changePage}></button>
                    <button className="left-button"><i className="fas fa-backward"></i></button>
                    <button className="right-button"><i className="fas fa-forward"></i></button>
                    <button className="play-pause" onClick={this.props.toggle}><i className="fa-solid fa-play"></i><i className="fa-solid fa-pause"></i></button>
                </div>
                {/* </div> */}
            </div>
        );
    }
}

export default Buttons;

