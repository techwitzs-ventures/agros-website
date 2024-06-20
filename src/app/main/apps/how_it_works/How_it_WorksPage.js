import React from 'react'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#e3ece5",
    fontSize: "30px",
    color: "#004b1c"
  }
}

const HowItWorks = () => {
  return (
    <div style={styles.container}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}

export default HowItWorks