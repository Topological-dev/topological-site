import React from "react"

const Video = ({url, title}) => {
  return (
    <div style={{textAlign: "center"}}>
      <iframe
        className="video"
        src={`${url}?rel=0"`}
        title={title || Math.floor(Math.random()* 10000000)}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video
