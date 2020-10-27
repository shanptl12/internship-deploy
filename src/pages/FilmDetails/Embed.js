import React from 'react'

const Embed = ({children}) => {
  return (
    <div className='embed-container'>
      <div className='embed-inner'>
        {children}
      </div>
    </div>
  )
}

export default Embed
