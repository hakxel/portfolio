import React from 'react'

let Contact = () => {
  return (
    <div id="contact">
      <div className="title">
        <h3>Contact me</h3>
      </div>
      <div className="contact-wrapper">
        <form>
          <h2>Name</h2>
          <input type="text" />
          <h2>Email</h2>
          <input type="text" />
          <h2>Message</h2>
          <textarea className="message" type="text"/>
          <button className="ui button">Contact me!</button>
        </form>
      </div>
    </div>
  )
}

export default Contact