import React from 'react'

const styles = {
    text: {
        color: "#004b1c",
        marginLeft: 0,
        fontSize: "30px",
        fontWeight: "bold"
    },
}

const Section4 = () => {
    return (

        <div style={{ paddingBottom: "30px", paddingTop: "30px" }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h3 style={styles.text}>Mobile App Access</h3>
                <p style={{
                    width: "90%",
                    lineHeight: "35px",
                    fontSize: "20px",
                    letterSpacing: "0.2px",
                    wordBreak: "keep-all",
                    overflowWrap: "break-word",
                    textAlign: "center",
                }}>
                    Data-driven decisions lead to better outcomes. Agros Hub provides comprehensive analytics and insights, offering valuable information about market trends, popular products, and customer preferences. With access to such data, users can identify opportunities, strategize effectively, and stay ahead in the competitive agricultural market.
                </p>
            </div>
        </div>
    )
}

export default Section4