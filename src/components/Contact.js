import React from 'react'

let Contact = () => {
  return (
    <div id="contact">
      <div className="title">
        <h1>Contact me</h1>
      </div>
      <div className="contact-wrapper">
        <form>
          <h2>Name</h2>
          <input type="text" />
          <h2>Email</h2>
          <input type="text" />
          <h2>Message</h2>
          <textarea className="message" type="text"/>
          <button className="ui blue button">Contact me!</button>
        </form>
      </div>
    </div>
  )
}

export default Contact