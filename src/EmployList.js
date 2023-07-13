import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';
import Createnew from './Createnew';
var ide = 11;

const EmployList = () => {
    const navigate = useNavigate()
    const [employe,setEmploye] =useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3000/employee')
        // .then(response=>response.json())
        .then(result=>setEmploye(result.data))

    },[])
 
    const detailData=(id)=>{
        navigate('/employee/detail/'+id)
    }
    const editData=(id)=>{
        navigate('/employee/edit/'+id)
    }
    const deleteData=(id)=>{
        // navigate('/employee/delete/'+id)
        if(window.confirm('want to delete')){
            Axios.delete('http://localhost:3000/employee/'+id)
                // .then(response=>response.json())
                .then(result=>{
                    alert('Data removed sucessfully')
                    window.location.reload()
                })
        
        }
    }
  
  
  return (
    <div className='container'>
        <div className='incon'>
        <h3>CRUD Operation</h3>
        <Link to='employee/createnew'><button className='btn btn-success adbtn'>Add New</button></Link>
        
        </div>
       
        <div className='card'>
            <div className="card-title">
               
                <div className="card-body">
                    <table className="table table-bordered" >
                        <thead   className='
                        '>
                            <tr> 
                                <td>ID</td>
                                <td>NAME</td>
                                <td>EMAIL</td>
                                <td>PHONE</td>
                                <td >ACTION</td>                              
                            </tr>
                        </thead>
                        {employe && employe.map((e,i)=>   
                                  
                                    
                        <tbody key={i}>
                            <tr>
                            <th>{e.id}</th>
                            <th>{e.name}</th>
                            <th>{e.email}</th>
                            <th>{e.phone}</th>
                            <th>
                                <button onClick={()=>{editData(e.id)}} className='btn btn1'>Edit</button>
                                <button onClick={()=>{deleteData(e.id)}} className='btn'>Delete</button>
                                <button onClick={()=>{detailData(e.id)}} className='btn yw'>Details</button>
                            </th>
                            </tr>
                        </tbody>
                          )}
                     </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployList