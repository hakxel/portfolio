import React, {Component} from 'react'
import * as emailjs from 'emailjs-com'

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      visitorName: '',
      visitorEmail: '',
      visitorMessage: '',
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

  //   if(!this.state.visitorName) {
  //     errors.name = "Name can't be empty"
  //     this.setState({
  //       hasErrors: true
  //     })
  //   }

  //   if(!this.state.visitorEmail) {
  //     errors.email = "Email can't be empty"
  //     this.setState({
  //       hasErrors: true
  //     })
  //   }

  //   if(!this.state.visitorEmail.match(pattern)) {
  //     errors.email = "Please enter a valid email"
  //     this.setState({
  //       hasErrors: true
  //     })
  //   }

  //   if(!this.state.visitorMessage) {
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
      "from_name": this.state.visitorName,
      "reply_to": this.state.visitorEmail,
      "message_html": this.state.visitorMessage
    }
    
    let user_id = "user_ZbJB2sANcI7G9tMw4uHh2"
    let service_id = "default_service"
    let template_id = "portfolio_messages"
    emailjs.send(service_id, template_id, template_params, user_id)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      alert("Your message was sent")
    }, (err) => {
      console.log('FAILED...', err)
      alert("Message not sent")
    })

    this.setState({
      visitorName: '',
      visitorEmail: '',
      visitorMessage: ''
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
            <input type="text" className="form-control" name="visitorName" required="required" value={this.state.visitorName} onChange={this.handleChange}/>

            <label>Email</label>
            <input type="email" className="form-control" name="visitorEmail" required="required" value={this.state.visitorEmail} onChange={this.handleChange}/>
            
            <label>Message</label>
            <textarea id="message" className="form-control" name="visitorMessage" rows="20" required="required" value={this.state.visitorMessage} onChange={this.handleChange}/>

            <button className="ui button">Contact me!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact