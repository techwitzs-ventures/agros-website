import React from 'react'
import config from 'src/appConfig';


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
        color: '#004b1c',
        zIndex: 10,
    },
    buttonOverlay: {
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translateY(-50%)',
        color: 'white',
        zIndex: 10,
        padding: '20px',
        background: 'rgba(0, 75, 28, 1)',
    },
    imageWrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: "#e3ece5"
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
                <h1 style={styles.text}>Welcome to {config.application_name}</h1>
                <p style={styles.subtitleText}>Your Ultimate Agros B2B</p>
            </div>
            <div style={styles.imageWrapper}>
                <img src="assets/images/new/carouselimage1.jpg" alt="Image" style={styles.image} />
            </div>
        </div>
    )
}

export default Section1