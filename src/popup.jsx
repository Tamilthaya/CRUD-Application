import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function PopUpfun(abc){
    console.log(abc,"###")
    const updateData=()=>{
      
fetch(`https://67d7ed1b9d5e3a10152c9b67.mockapi.io/student/detail/${abc.file.id}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(abc.file),
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  abc.setref(!abc.ref)
  alert("success.......")
}).catch(error => {
  // handle error
})


    };
  const createUser=()=>{
         
          
          fetch('https://67d7ed1b9d5e3a10152c9b67.mockapi.io/student/detail', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify(abc.file)
          }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
          }).then(task => {
            // do something with the new task
            alert("Added Successfuly.........")
            abc.setref(!abc.ref)
          }).catch(error => {
            // handle error
          })
          abc.boxclose();
        }

return(
        <>
        <Modal show={abc.boxshow} onHide={abc.boxclose}>
        <Modal.Header closeButton>
          {abc.file.id ? <Modal.Title>Edit Data</Modal.Title> :
          <Modal.Title>New User</Modal.Title>}
          
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name*</Form.Label>
              <Form.Control
                type="name"
                placeholder="name"
                autoFocus
                defaultValue={abc.file.name}
                onChange={(e)=>abc.setfile({...abc.file,name:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address*</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                defaultValue={abc.file.email}
                onChange={(e)=>abc.setfile({...abc.file,email:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PhoneNo*</Form.Label>
              <Form.Control
                type="Tell"
                placeholder="PhoneNo"
                autoFocus
                defaultValue={abc.file.phoneNo}
                onChange={(e)=>abc.setfile({...abc.file,phoneNo:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Current Location"
                autoFocus
                defaultValue={abc.file.location}
                onChange={(e)=>abc.setfile({...abc.file,location:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="Qualification"
                autoFocus
                defaultValue={abc.file.qualification}
                onChange={(e)=>abc.setfile({...abc.file,qualification:e.target.value})}
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={abc.boxclose}>
            Close
          </Button>
          {abc.file.id ? <Button variant="primary" onClick={updateData}>
            Save Changes
          </Button> : <Button variant='success' onClick={createUser}> Create</Button>} 
          
        </Modal.Footer>
      </Modal>
    </>
    )
}