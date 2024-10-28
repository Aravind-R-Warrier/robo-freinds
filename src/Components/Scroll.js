import React from 'react'

function Scroll(robots) {
  return (
    <div style={{overflowY:"scroll", border:"3px solid black",height:"600px"}}>
      {robots.children}
    </div>
  )
}

export default Scroll
