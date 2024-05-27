import React from 'react'

const styles = {
    container: {
        marginTop: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height:"350px",
        backgroundColor:"#e3ece5"
    },
    innerContainer: {
        display: "flex",
        width: "60%",
    },
    leftSidePanel: {
        display: "flex",
        flexDirection: "column",
        width: "60%",
    },
    leftSidePaneldiv1: {
        display: "flex",
        justifyContent: "center",
        backgroundColor:"#ffffff"
    },
    leftSidePaneldiv2: {
        display: "flex",
        justifyContent: "center",
        fontSize: "20px",
        paddingTop: "50px",
    },
    rightSidePanel: {
        display: "flex",
        justifyContent: "center",
        width: "40%"
    },
    text: {
        color: "#004b1c",
        marginLeft: 0,
        fontSize: "50px",
        fontWeight: "bold"
    },
}
const Section2 = () => {
    return (
        <div style={styles.container}>
            <div style={styles.innerContainer}>
                <div style={styles.leftSidePanel}>
                    <div style={styles.leftSidePaneldiv1}>
                        <h1 style={styles.text}>Get To Know Us</h1>
                    </div>
                    <div style={styles.leftSidePaneldiv2}>
                        {/* <p style={{
                            width: "90%",
                            lineHeight: "35px",
                            letterSpacing: "0.2px",
                            wordBreak: "keep-all",
                            overflowWrap: "break-word",
                            textAlign: "justify",
                        }}>
                            Agriculture is the backbone of our society, and at Agros Hub, we are committed to empowering farmers, suppliers, and buyers in the agricultural industry. Our advanced and user-friendly Agros Hub Software Platform is designed to bring together all the key players in the agros ecosystem, fostering collaboration and promoting sustainable growth. With Agros Hub, we aim to bridge the gap between traditional farming practices and modern digital solutions, offering a seamless online hub where farmers can showcase their products, suppliers can connect with a global customer base, and buyers can find a diverse range of agricultural products and services.
                        </p> */}
                    </div>
                </div>
                <div style={styles.rightSidePanel}>
                    {/* <video src="assets/gif/agroshubgif.mp4" autoPlay loop muted style={{ width: '90%', height: '857px' }}>
                        Your browser does not support the video tag.
                    </video> */}
                </div>
            </div>
        </div>
    )
}

export default Section2