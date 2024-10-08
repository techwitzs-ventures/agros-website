import React from 'react'

const styles = {
    text: {
        color: "#004b1c",
        marginLeft: 0,
        fontSize: "30px",
        fontWeight: "bold"
    },
}
const Section1 = () => {
    return (

        <div style={{ marginTop: "70px", paddingBottom: "30px", paddingTop: "30px", backgroundColor: "#ffffff" }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h3 style={styles.text}>Global Reach</h3>
                <p style={{
                    width: "90%",
                    lineHeight: "35px",
                    fontSize: "20px",
                    letterSpacing: "0.2px",
                    wordBreak: "keep-all",
                    overflowWrap: "break-word",
                    textAlign: "center",
                }}>
                    Agros Hub's mobile app ensures that users stay connected and responsive even while on the go. Farmers can manage their listings, suppliers can respond to inquiries, and buyers can complete transactions from the convenience of their smartphones. The app offers a seamless user experience, enhancing accessibility and usability for all.
                </p>
            </div>
        </div>
    )
}

export default Section1