import React from 'react';
import artistImage from './assets/dragon.jpg';

class Artists extends React.Component {

    render() {
        return (
            <div style={styles.artistsContainer}>

                <div style={styles.titleBar}>
                    <p style={{ fontWeight: 'bold' }}>iPod.js</p>
                </div>

                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>

                    <div style={styles.subInfo}>
                        <h4 style={{ marginBottom: '0.5rem' }}>IPod.js <span><img style={styles.image} src="https://img.freepik.com/free-vector/illustration-ipod_53876-5562.jpg?w=740&t=st=1661522397~exp=1661522997~hmac=92b029fb7cd8cc63720e0028d50e822c5b9876ca696dd451ecd09fef29f33c17" alt="dragon"/></span></h4>
                        <p style={{ marginBottom: '0' }}> Functionality</p>
                        <p>coming soon...</p>
                    </div>

                </div>

                <div style={styles.info2}>
                    <h5 style={{ alignSelf: 'center' }}>Thanks for visiting...!!</h5>
                </div>
            </div>
        );
    }

}

const styles = {
    artistsContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    imageContainer: {
        height: '65%',
        width: '35%',
        borderRadius: '50%',
        backgroundImage: `url(${artistImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf: 'center'
    },
    image: {
        width: '3.5rem',
        height: '3.5rem'
    },
    info: {
        height: '70%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    info2: {
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    subInfo: {
        alignSelf: 'center'
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

export default Artists;