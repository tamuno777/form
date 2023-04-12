import React, { Component } from 'react'
import  Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './leftForm.css';
import Background from './background';



class LeftForm extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName:'',
         lastName:'',
         email:'',
         phoneNumber:'',
         message:'',
         showComponent: false
      }
      // this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleFirstnameChange = (event) => {
        this.setState({
            firstName : event.target.value
        })
    }
    handleLastnameChange = (event) => {
        this.setState({
            lastName : event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email : event.target.value
        })
    }
    handlePhoneNumberChange = (event) => {
        this.setState({
            phoneNumber : event.target.value
        })
    }
    handleMessageChange = (event) => {
        this.setState({
            message : event.target.value
        })
    }
    handleSubmit = (event) => {
      let name = this.state.firstName + this.state.lastName
      let email = this.state.email
      let phoneNumber =this.state.phoneNumber
      let message = this.state.message
      const data = `client: ${name} , email: ${email} ,tell: ${phoneNumber} ,message : ${message}`
      console.log (data)


      event.preventDefault()
      
      this.setState({
        showComponent: true,
      })
    }

    render(){
      if(this.state.showComponent){return <Background/>}
        return (
            < >
              <Form className='m-3 p-3 container' onSubmit={this.handleSubmit}>
              <h1 className='text-center m-3'> Send Us A Message</h1>
      
              <Form.Group className="mb-3 box" controlId="formBasicText">
                <Form.Label className='control' >TELL US YOUR NAME *</Form.Label>
                <div className='d-flex label justify-content-around'>
                <Form.Control type="text" placeholder="First name" className='me-1' value={this.state.firstName} onChange={this.handleFirstnameChange} required="true" />
                <Form.Control type="text" placeholder="Last name" value={this.state.lastName} onChange={this.handleLastnameChange} required="true" />
                </div>
                
              </Form.Group>
              
              <Form.Group className="mb-3 box" controlId="formBasicEmail">
                <Form.Label className='control' >ENTER YOUR EMAIL *</Form.Label>
                <div className='label'>
                <Form.Control type="email" placeholder="Eg.example@email.com" value={this.state.email} onChange={this.handleEmailChange} required="true" />
      
                </div>
                
              </Form.Group>
        
              <Form.Group className="mb-3 box" controlId="formBasicTel">
                <Form.Label className='control' >ENTER YOUR PHONE NUMBER</Form.Label>
                <div className='label'>
                <Form.Control type="tel" placeholder="Eg. +18000000" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} required="true"/>
      
                </div>
              </Form.Group>
      
              <Form.Group className="mb-3 box" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='control' > MESSAGE *</Form.Label>
                <div className='label'>
                <Form.Control as="textarea" rows="5" value={this.state.message} onChange={this.handleMessageChange} required="true"/>
                </div>
              </Form.Group>
              <Button variant="primary" size='md' type="submit" className='btn text-center' >
                SEND MESSAGE
              </Button>
            </Form>
            
            </>
          );

    }
    
  }
  
  export default LeftForm;