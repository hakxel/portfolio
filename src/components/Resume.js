import React, { Component } from 'react';
import ResumePDF from '../data/AsielMontes_Resume.pdf'

class Resume extends Component {
  render(){
    return(
      <object data={ResumePDF} type="application/pdf" style={{width: "100vw", height: "100vh"}}>
        <iframe src={ResumePDF} style={{width: '100vw', height: '100vh'}}></iframe>
      </object>
    )
  }
}

export default Resume