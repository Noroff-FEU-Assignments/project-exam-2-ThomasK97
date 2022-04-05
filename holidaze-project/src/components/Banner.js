import React from 'react'

function Banner({children, title}) {
  return (
    <div className="banner">
        <h1>{title}</h1>
       
        {children}
    </div>
  )
}

export default Banner;