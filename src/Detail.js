import React, { useState } from 'react'
import { useEffect} from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'
import Axios from 'axios'
const Detail = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [val,setVal] = useState({})
    useEffect(()=>{
        Axios.get('http://localhost:8000/employee/'+id)
        // .then(response=>response.json())
        .then(result=>setVal(result.data))
           
    },[])
  return (
    <div className='detail'>
        <p>Detail of Employee!</p>
        <div className="dt">
            <h2>NAME: {val.name}</h2>
            <h2>EMAIL ID: {val.email}</h2>
            <h2>PHONE NO: {val.phone}</h2>
        </div>
        <button onClick={()=>navigate('/')}> Back to list</button>
        {/* <Link to='/'>Back</Link> */}
    </div>
  )
}

export default Detail