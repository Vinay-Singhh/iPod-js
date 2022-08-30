import React from 'react';
import { ListGroup } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
            <div style={styles.homeScreen} id='home-screen'>
                <div style={styles.menuList} id='menu-list'>
                    <div style={styles.titleBar} id='title-bar'>iPod.js</div>
                    <ListGroup style={{ borderRadius: '0' }}>
                        <ListGroup.Item style={{ border: '0', padding: '0.7rem 0.6rem' }} className={this.props.activeItem === 'NowPlaying' ? 'active' : ''}>
                            Now Playing {this.props.activeItem === 'NowPlaying' ? <span style={{ float: 'right', fontWeight: 'bold' }}>&gt;</span> : ''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ border: '0', padding: '0.7rem 0.6rem' }} className={this.props.activeItem === 'Music' ? 'active' : ''}>
                            Music {this.props.activeItem === 'Music' ? <span style={{ float: 'right', fontWeight: 'bold' }}>&gt;</span> : ''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ border: '0', padding: '0.7rem 0.6rem' }} className={this.props.activeItem === 'Games' ? 'active' : ''}>
                            Games {this.props.activeItem === 'Games' ? <span style={{ float: 'right', fontWeight: 'bold' }}>&gt;</span> : ''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{ border: '0', padding: '0.7rem 0.6rem' }} className={this.props.activeItem === 'Settings' ? 'active' : ''}>
                            Settings {this.props.activeItem === 'Settings' ? <span style={{ float: 'right', fontWeight: 'bold' }}>&gt;</span> : ''}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div style={styles.imageContainer} id='image-container'></div>
            </div>
        );
    }

}

const styles = {
    homeScreen: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirecton: 'row'
    },
    menuList: {
        backgroundColor: 'white',
        borderRadius: '12px 0px 0px 12px',
        //border:'1px solid black',
        height: '100%',
        width: '50%',
        boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex: '1'
    },
    imageContainer: {
        //border:'1px solid black',
        height: '100%',
        width: '50%',
        backgroundImage: 'url("https://images.unsplash.com/photo-1529912626516-e58b23f44f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0 11px 11px 0'
    },
    titleBar: {
        height: '10%',
        width: '100%',
        borderRadius: '12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding: '1px 5px 10px 8px',
        display: 'flex',
        flexDirecton: 'row',
        justifyContent: 'space-between'
    }
}

export default Home;