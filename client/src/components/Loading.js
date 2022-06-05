import React from 'react'
import { Spinner } from "react-bootstrap";


const Loading = () => {
  return (
    <div >
        <Spinner animation="border" role="status" style={{height:'100px' , width:'100px' , marginTop:'100px',display:'flex'}}>
  <span className="visually-hidden">Loading...</span>
</Spinner>
    </div>
  )
}

export default Loading
