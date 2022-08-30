import React from 'react';

class Games extends React.Component {

    render() {
        return (
            <div style={styles.settings} >
                <div style={styles.titleBar}>
                    <p style={{ fontWeight: 'bold' }}>iPod.js</p>
                </div>
                <div style={{ width: '100%', height: ' 90%'}}>
                    <img style={styles.image} src="https://img.freepik.com/free-vector/game-streamer-concept-elements-illustrated_23-2148932487.jpg?w=740&t=st=1661521917~exp=1661522517~hmac=57ed5c919123e911debd08c7bf528bf1a28c97cbfe6a7ac6dcd4bbc3e0a632d4" alt="game" />
                </div>

            </div>
        );
    }

}

const styles = {
    settings: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    image: {
        width: '90%',
        height: '100%',
        marginLeft: '10px',
        // alignSelf: 'center',
        borderRadius: '0 0 12px 12px'
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

export default Games;