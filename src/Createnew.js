import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'

const Createnew = () => {
    var ide = 1;
     
 
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [phone,setPhone] =useState('')
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
            e.preventDefault();
            console.log({name,email,phone})
            
            fetch('http://localhost:3000/employee',{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify({name,email,phone})
                // // .then(response=>response.json()))
                
            }).then((a=> alert('Data saved')
               )).then((a=> navigate('/') ))
           
    }

  return (
    <div className="con">
    <div className='inputCard'>
       
        <h2>Add Data here!</h2>
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
            <Link to='/'><button  className='ab b'>Back</button></Link>
        </form>
    </div>
    </div>
  )
}

export default Createnew