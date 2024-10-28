import React from 'react'

function SearchBox({SearchChange}) {
  return (
    <div className='pa3'>
     <input className='pa3 ba bg-lightest-blue ' type='search' placeholder='Search Your Robot' onChange={SearchChange}/>
    </div>
  )
}

export default SearchBox
