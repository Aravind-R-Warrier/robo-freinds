import Card from "./Card";
import React from 'react'


function CardList({robots}) {
    
  return (
    <div>
{robots.map((user,i)=>{
      return  <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/> 
    })}
    </div>
  )
}

export default CardList
