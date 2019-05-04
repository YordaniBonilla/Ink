import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import ReactCalendar from './ReactCalendar.jsx'
import DatePicker from 'react-date-picker';
require("babel-polyfill");

class Book extends Component{
  constructor (){
    super()

    this.state = {
      name: '',
      email: '',
      message: '',
      dropdownOpen: false,
      date: new Date(),
      bodyPart: 'Body Part',
    }
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onChange = date => this.setState({ date })

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value })
  }
    
  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, message, date, bodyPart } = this.state

    const from = await axios.post('/api/form', {
      name,
      date: date.toDateString(),
      email,
      bodyPart,
      message
    })
}
  render(){
    return(
      <Form onSubmit={this.handleSubmit} style={{ width: '600px'}}>
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
        <FormGroup>
          <Label for='name'>Name:</Label>
          <Input
            type='name'
            name='name'
            onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for='email'>Email:</Label>
          <Input
            type='email'
            name='email'
            onChange={this.handleChange} />
        </FormGroup>   
     <select
        name='bodyPart'
        value={this.state.bodyPart}
        onChange={this.handleChange}
        >   
            <option value='Body Part'>Body Part</option>
            <option value='Calf'>Calf</option>
            <option value='Chest'>Chest</option>
            <option value='Foot'>Foot</option>
            <option value='Fore Arm'>Fore Arm</option>
            <option value='Full Back'>Full Back</option>
            <option value='Full Sleeve'>Full Sleeve</option>
            <option value='Half Sleeve'>Half Sleeve</option>
            <option value='Leg'>Leg</option>
            <option value='Lower Back'>Lower Back</option>
            <option value='Ribs'>Ribs</option>
            <option value='Stomach'>Stomach</option>
            <option value='Upper Arm'>Upper Arm</option>
            <option value='Upper Back'>Upper Back</option>
            <option value='Lower Arm'>Lower Arm</option>
            <option value='Hip'>Hip</option>
            <option value='Wrist'>Wrist</option>
            <option value='Ankle'>Ankle</option>
            <option value='Other'>Other</option>
        </select>
        <FormGroup>
          <Label for='message'>Message:</Label>
          <Input
            type='textarea'
            name='message'
            onChange={this.handleChange} />
        </FormGroup>
        <Button>SUBMIT</Button>
      </Form>
    );
  }
}

export default Book;


