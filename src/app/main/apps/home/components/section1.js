import React from 'react'

import config from '../../../../configs/navigation-i18n/en'


const styles = {
    container: {
        position: 'relative',
        height: '40vh',
        width: '100vw',
    },
    textOverlay: {
        position: 'absolute',
        top: '30%',
        left: '20%',
        transform: 'translateY(-50%)',
        color: '#ffffff',
        zIndex: 10,
    },
    buttonOverlay: {
        position: 'absolute',
        top: '60%',
        left: '20%',
        transform: 'translateY(-50%)',
        color: 'white',
        zIndex: 10,
        padding: '20px',
        background: 'rgba(0, 75, 28, 1)',
    },
    imageWrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: "#004b1c"
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.7,
    },
    text: {
        marginLeft: 0,
        fontSize: "50px",
        fontWeight: "bold"
    },
    subtitleText: {
        margin: 0,
        fontSize: "50px",
        fontWeight: "semibold"
    }
};

const Section1 = () => {

    return (
        <div style={styles.container}>
            <div style={styles.textOverlay}>
                <h1 style={styles.text}>Welcome to {config.APPLICATION_NAME}</h1>
                <p style={styles.subtitleText}>Your Ultimate Agros B2B</p>
            </div>
            <div style={styles.buttonOverlay}>
                <button>
                    About us
                </button>
            </div>
            <div style={styles.imageWrapper}>
                {/* <img src="assets/images/new/carouselimage1.jpg" alt="Image" style={styles.image} /> */}
            </div>
        </div>
    )
}

export default Section1