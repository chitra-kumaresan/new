//It displays input field of employee component.

import React,{useEffect, useState} from 'react'
import { createEmployees } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployee,updateEmployee } from '../services/EmployeeService';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const {empId}=useParams();
  const navigator=useNavigate();

//it update the field using getAPI using useParams()
  useEffect(()=>{
    const fetchData=async()=>{
        try {
            await getEmployee(empId).then((response)=>{
                const fetch=response.data;
                setFirstName(fetch.firstName);
                setLastName(fetch.lastName);
                setJoinedDate(fetch.joinedDate);
                setEmail(fetch.email);
                setMobileNumber(fetch.mobileNumber);
    
            })
            
        } catch (error) {
            console.error(error);
            
        }
       
    }

fetchData();
  },[empId])

  //it add new employee using Post API
  const addOrUpdateEmployee=async(e)=>{
     e.preventDefault();
    const employee={firstName,lastName,joinedDate,email,mobileNumber};
    console.log(employee);
    if(empId){
    await updateEmployee(empId,employee);
    alert("updated sucessfully");

    }else{
      await createEmployees(employee).then((response)=>{
            console.log(response.data);
          alert("Employee added successfully")
           setFirstName("");
                setLastName("");
                setJoinedDate("");
                setEmail("");
                setMobileNumber("");
            }) }
            navigator("/list")
    }
    
    
 const pageTitle = () => {
return empId ? <h2 className='text-center'> Update Employee </h2> : <h2  className='text-center'>Add Employee</h2>
}



  return (
    <div>
    <div className="offset-lg-3">
<form className="container">
    <div className='card'>
 <div className="card-header ">
      {pageTitle()}
</div>
            <div className="card-body"> 

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>First Name <span className="errmsg">*</span></label>
                            <input value={ firstName} onChange={e => setFirstName(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Last Name <span className="errmsg">*</span></label>
                            <input value={ lastName}  onChange={e => setLastName(e.target.value)} className="form-control"></input>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Joined Date <span className="errmsg">*</span></label>
                            <input type='date' value={joinedDate} onChange={e => setJoinedDate(e.target.value)} className="form-control"></input>
                        </div>

                    </div>
                    
            
            <div className="col-lg-6">
                        <div className="form-group">
                            <label>Email <span className="errmsg"></span></label>
                            <input   value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    
            <div className="col-lg-6">
                        <div className="form-group">
                            <label>Mobile Number <span className="errmsg">*</span></label>
                            <input placeholder="98765432" value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} className="form-control"></input>
                        </div>
           </div>
            
            <div className="card-footer"> 
              <button type="submit" className="btn btn-primary" onClick={ addOrUpdateEmployee}>Save</button> 
              <div class="vr"></div>
              <button type="submit" className="btn btn-danger" onClick={()=>navigator("/list")}>Back</button> 
              </div> 
             
           </div>
           </div>
           </div>
           </form>
           </div>
           </div> 
        )
}

export default EmployeeComponent;