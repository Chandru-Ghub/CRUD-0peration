import React, { useState } from 'react'
import { useEffect} from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'
import Axios from 'axios'
const Edit = () => {
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [phone,setPhone] =useState('')

    const navigate = useNavigate();
    const {id} = useParams();
    const [val,setVal] = useState({})
    useEffect(()=>{
        Axios.get('http://localhost:8000/employee/'+id)
        // .then(response=>response.json())
        .then((result) => {
            setName(result.data.name)
            setEmail(result.data.email)
           setPhone(result.data.phone)
           
        })
           
    },[])
    var ide = 1;
     
 
    const handleSubmit=(e)=>{
            e.preventDefault();
            console.log({name,email,phone})
          
            fetch('http://localhost:8000/employee/'+id,{
                method:'PUT',
                headers:{'content-type':'application/json'},
                body:JSON.stringify({id,name,email,phone})
                // // .then(response=>response.json()))
                
            }).then((a=> alert('Data saved')
               )).then((a=> navigate('/') ))
        }  
  return (
    <div className='con'>
         <div className='inputCard'>
       
        <h2 className='edit'>Edit Data here!</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Name'
               required value={name} onChange={(e)=>setName(e.target.value)}
            />
            <input type="email" placeholder='Enter EmailId'
            value={email} required onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="tel" placeholder='Enter PhoneNumber'
            value={phone} required onChange={(e)=>setPhone(e.target.value)}
            /><br></br>
            <button type='submit' className='btn btn-primary ab a' >Add</button>
            <Link to='/'><button className='ab b'>Back</button></Link>
        </form>
    </div>
    </div>
  )
}

export default Edit