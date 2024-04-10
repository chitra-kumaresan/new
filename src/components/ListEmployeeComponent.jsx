//it display list of employees using getAll API

import React, { useState,useEffect } from 'react'
import { deleteEmployee, getAllEmployees } from '../services/EmployeeService'
import  {useNavigate } from 'react-router-dom';
import { isAdminUser, isLoggedInUser, isUsers } from '../services/AuthService';

const ListEmployeeComponent = () => {
  const navigator=useNavigate();
  const isAdmin=isAdminUser();
  const isUser=isUsers();

    const [employees,setEmployees] = useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
        try {
        const response=await getAllEmployees();
        
        const employee=response.data;
        console.log(employee);
        setEmployees(employee);
        }catch(error){
        console.error(error);
        }
        }
        fetchData();
        },[])

        const addEmp=async()=>{
          navigator("/add-emp")
        }
        const viewEmp=async(empId)=>{
          navigator(`/view/${empId}`);
        }

        const updateEmployee=(empId)=>{
          navigator(`/update-emp/${empId}`);

        }
        const deleteEmp=async(empId)=>{
          try{
          await deleteEmployee(empId);
        
          getAllEmployees();
          }catch(error){
            console.error(error);
          }
        }
        

  return (
<div className='container'>
<h1 className='text-center'>Employees Database</h1>
{isAdmin && (
<button className="btn btn-primary" onClick={addEmp}>Add Employee</button>)}
<table className='table table-striped table-bordered'>
<thead>
<tr>
<th>Employee Id</th>
<th>First Name</th>
<th>Last Name</th>
<th>Joined Date</th>
<th>Email</th>
<th>Mobile Number</th>
<th>Actions</th>
</tr>

</thead>
<tbody>{
  employees.map(employee=> 
<tr key={employee.empId}>
<td>{employee.empId}</td>
<td>{employee.firstName}</td>
<td>{employee.lastName}</td>
<td>{employee.joinedDate}</td>
<td>{employee.email}</td>
<td>{employee.mobileNumber}</td>
<td>
  {isAdmin && (
<button className="btn btn-info" onClick={()=>updateEmployee(employee.empId)}>Update</button>)}
<div class="vr"></div>
<div class="vr"></div>
{isAdmin && (
<button className="btn btn-danger" onClick={()=>deleteEmp(employee.empId)}>Delete</button>)}
{isUser && (
<button className="btn btn-success" onClick={()=>viewEmp(employee.empId)}>View</button>)}

</td>
</tr>
)}            
</tbody>
</table>
</div>
 )
}

export default ListEmployeeComponent;