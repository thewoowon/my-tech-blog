import React from 'react'

const Video= ():JSX.Element => {
  return (
      <video autoPlay muted loop style={{ width: '100%' }}>
        <source src="../videos/AdobeStock_281069318.mov" type="video/mp4"/>
      </video>
    
   )
 }

export default Video;