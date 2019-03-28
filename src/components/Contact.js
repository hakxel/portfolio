import React, {Component} from 'react'
import * as emailjs from 'emailjs-com'

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
      // validationErrors: {
      //   name: '',
      //   email: '',
      //   message: '',
      // },
      // hasErrors: false,
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    const fieldName = event.target.name
    const fieldValue = event.target.value
    this.setState({
      [fieldName]: fieldValue
    })
  }

  // invalidForm = () => {
  //   let errors = {}
  //   let hasErrors = false
  //   let pattern = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/"

  //   if(!this.state.name) {
  //     errors.name = "Name can't be empty"
  //     this.setState({
  //       hasErrors: true
  //     })
  //   }

  //   if(!this.state.email) {
  //     errors.email = "Email can't be empty"
  //     this.setState({
  //       hasErrors: true
  //     })
  //   }

  //   if(!this.state.email.match(pattern)) {
  //     errors.email = "Please enter a valid email"
  //     this.setState({
  //       hasErrors: true
  //     })
  //   }

  //   if(!this.state.message) {
  //     errors.message = "Please enter a message"
  //     this.setState({
  //       hasErrors: true
  //     })
  //   }

  //   this.setState({
  //     validationErrors: errors
  //   })

  //   return hasErrors
  // }

  

  sendEmail = (event) => {
    event.preventDefault()
    // if(this.invalidForm) {
    //   console.log("Form is not valid")
    //   return
    // }

    let template_params = {
      "from_name": this.state.name,
      "reply_to": this.state.email,
      "message_html": this.state.message
    }
    
    let user_id = "user_ZbJB2sANcI7G9tMw4uHh2"
    let service_id = "default_service"
    let template_id = "portfolio_messages"
    emailjs.send(service_id, template_id, template_params, user_id)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      alert("Your message was sent")
      this.setState({
        name: '',
        email: '',
        message: ''
      })
    }, (err) => {
      console.log('FAILED...', err)
      alert("Message not sent")
    })
  }

  render(){

    return (
      <div id="contact">
        <div className="title">
          <h3>Contact me</h3>
        </div>
        <div className="contact-wrapper">
          <form onSubmit={this.sendEmail}>
              <label>Name</label>
              <input type="text" className="form-control" name="name" placeholder="Your Name" value={this.state.name} onChange={this.handleChange} autoComplete="off" required="required"/>

              <label>Email</label>
              <input type="email" className="form-control" name="email" placeholder="example@email.com" value={this.state.email} onChange={this.handleChange} autoComplete="off" required="required" />

              <label>Message</label>
              <textarea className="form-control message" name="message" rows="20" placeholder="Enter your message here..." value={this.state.message} onChange={this.handleChange} autoComplete="off"></textarea>

            <button className="ui button">Contact me!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact