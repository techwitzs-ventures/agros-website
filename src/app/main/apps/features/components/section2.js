import React from 'react'

const styles = {
    text: {
        color: "#004b1c",
        marginLeft: 0,
        fontSize: "30px",
        fontWeight: "bold"
    },
}

const Section2 = () => {
    return (
        <div style={{ paddingBottom: "30px", paddingTop: "30px" }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h3 style={styles.text}>Inventory Management</h3>
                <p style={{
                    width: "90%",
                    lineHeight: "35px",
                    fontSize: "20px",
                    letterSpacing: "0.2px",
                    wordBreak: "keep-all",
                    overflowWrap: "break-word",
                    textAlign: "center",
                }}>
                    Efficient inventory management is critical for any agricultural business. Agros Hub's intuitive tools help farmers and suppliers keep track of their stock levels, receive notifications for low inventory, and optimize their product offerings based on market demand. Streamlining inventory management saves time and resources, ensuring businesses can focus on meeting customer needs.
                </p>
            </div>
        </div>
    )
}

export default Section2