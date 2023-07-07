import React from 'react'
import Form from '../components/mainpage'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Complete() {
  const location = useLocation();
  console.log('location', location.state.list.deletelist)
  const navigate=useNavigate();
  return (
    <div>
        <Form/>
      <h1>deleted ones:</h1>
      <p>{location.state.list.deletelist}</p>
      <button onClick={()=>navigate(-1)}>back</button>
    </div>
  )
}

export default Complete
