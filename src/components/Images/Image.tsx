import React from 'react'

function Image(props) {
    const { src, alt, size, className } = props;


  return (
    <div><img src={src} alt={alt} className={`${size} ${className}`}/></div>
  )
}

export default Image