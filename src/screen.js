import './App.css';
import React from 'react';
import Home from './Home';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import MyMusic from './MyMusic';
import Artists from './Artists';

class Screen extends React.Component {
    render() {
        return (
            <div className='screen' id='screen-container'>
                {this.props.activePage === 'Home' ? <Home activeItem={this.props.activeItem} /> : null}
                {this.props.activePage === 'Music' ? <Music activeItem={this.props.activeItem} /> : null}
                {this.props.activePage === 'Games' ? <Games /> : null}
                {this.props.activePage === 'Settings' ? <Settings /> : null}
                {this.props.activePage === 'MyMusic' ? <MyMusic audio={this.props.audio} /> : null}
                {this.props.activePage === 'Artists' ? <Artists /> : null}
            </div>
        );
    }
}

export default Screen;