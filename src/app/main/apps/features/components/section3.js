import React from 'react'

const styles = {
    text: {
        color: "#004b1c",
        marginLeft: 0,
        fontSize: "30px",
        fontWeight: "bold"
    },
}

const Section3 = () => {
    return (
        <div style={{ paddingBottom: "30px", paddingTop: "30px", backgroundColor: "#ffffff" }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h3 style={styles.text}>Analytics Insights</h3>
                <p style={{
                    width: "90%",
                    lineHeight: "35px",
                    fontSize: "20px",
                    letterSpacing: "0.2px",
                    wordBreak: "keep-all",
                    overflowWrap: "break-word",
                    textAlign: "center",
                }}>
                    With Agros Hub, geographical boundaries are no longer a limitation. Farmers and businesses can access a global market and connect with potential partners from all around the world. This expanded reach opens up new opportunities for growth and collaboration, fostering a diverse and interconnected agro community.
                </p>
            </div>
        </div>
    )
}

export default Section3