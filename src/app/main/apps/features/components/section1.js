import React from 'react'

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#e3ece5"
    },
    innerContainer: {
        width: "60%",
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    titleDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#004b1c",
        marginLeft: 0,
        fontSize: "50px",
        fontWeight: "bold"
    },
}
const Section1 = () => {
    return (
        <div style={styles.container}>
            <div style={styles.innerContainer}>
                <div style={styles.titleDiv}>
                    <h1 style={styles.text}>Features and Benefits</h1>
                </div>
                <div style={{marginTop:"100px"}}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                        <h3 style={{ ...styles.text, fontSize: "30px" }}>Global Reach</h3>
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
                <div style={{marginTop:"30px"}}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                        <h3 style={{ ...styles.text, fontSize: "30px" }}>Inventory Management</h3>
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
                <div style={{marginTop:"30px"}}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                        <h3 style={{ ...styles.text, fontSize: "30px" }}>Analytics Insights</h3>
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
                <div style={{marginTop:"30px"}}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                        <h3 style={{ ...styles.text, fontSize: "30px" }}>Mobile App Access</h3>
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
            </div>
        </div>
    )
}

export default Section1