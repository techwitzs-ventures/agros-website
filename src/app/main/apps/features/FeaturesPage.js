import React from 'react'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'


const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#e3ece5"
  },
  innerContainer: {
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

const FeaturesPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.titleDiv}>
          <h1 style={styles.text}>Features and Benefits</h1>
        </div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  )
}

export default FeaturesPage