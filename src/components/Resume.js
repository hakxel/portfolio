import React, { Component } from 'react';
import PDFviewer from './PDFviewer'
import PDFJSBackend from '../backends/PDFJS'
class Resume extends Component {
  render(){
    return(
      <PDFviewer 
        backend={PDFJSBackend}
        src="/AsielMontes_Resume.pdf" />
    )
  }
}

export default Resume