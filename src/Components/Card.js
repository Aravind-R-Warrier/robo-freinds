import './Card.css'
import React from 'react'

function Card({name,id,email}) {
    
  return (
    <div className='tc bg-light-green dib grow pa3 ma2 br3 bw2 shadow-5 card'>
      <img style={{height:"200px"}} alt='robots' src={`https://robohash.org/${id}`}/>
<div>
      <h2>{name}</h2>
      <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
