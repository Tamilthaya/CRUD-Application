import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ResponsiveBreakpointsExample(bcd) {
    const[tableData,setTableData]=useState(null);

    
    console.log(bcd,"555")
    useEffect(()=>{
        fetch('https://67d7ed1b9d5e3a10152c9b67.mockapi.io/student/detail', {
            method: 'GET',
            headers: {'content-type':'application/json'},
          })
          .then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
          })
          .then(tasks => {
          setTableData(tasks.reverse())
          })
          .catch(error => {
            console.log(error)
          })
    },[bcd.ref])
    console.log(tableData)

    const deleteUser=(id)=>{
      
    fetch(`https://67d7ed1b9d5e3a10152c9b67.mockapi.io/student/detail/${id}`, {
    method: 'DELETE', 
    }).then(res => {
    if (res.ok) {
      return res.json();
   }
    // handle error
  }).then(task => {
    // Do something with deleted task
    alert("Deleted successfully.....");
    bcd.setref(!bcd.ref)

  }).catch(error => {
    // handle error
    console.log(error)
  })

    }

    

    return (
      <div>
        <Button variant={"warning"} className='fs-5 mb-3' onClick={()=>bcd.boxclick()}> Add Data</Button>
        <Table responsive="sm"  variant='info'>
          <thead className='fs-4'>
            <tr>
              <th className='p-3'>S.No</th>
              <th className='p-3'>Name</th>
              <th className='p-3'>Email</th>
              <th className='p-3'>Location</th>
              <th className='p-3' style={{ width: '25%' }}>Phone No</th>
              <th className='p-3'>Qualification</th>
              <th className='p-3' style={{ width: '25%' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData&&tableData.map((crr,index)=>{
                return (
                 <tr>
              <td className='p-3'>{index+1}</td>
              <td className='p-3'>{crr.name}</td>
              <td className='p-3'>{crr.email}</td>
              <td className='p-3'>{crr.location}</td>
              <td className='p-3'>{crr.phoneNo}</td>
              <td className='p-3'>{crr.qualification}</td>
              <td className='p-3'>
              <Button variant="primary" className='me-2' onClick={()=>bcd.boxclick(crr)}>Edit</Button>

              <Button variant="info" onClick={()=>deleteUser(crr.id)}>Remove</Button>
              </td>
            </tr>   
            
        )
            })
            }
          </tbody>
        </Table>
       
      </div>
    );
  }
  
  export default ResponsiveBreakpointsExample;