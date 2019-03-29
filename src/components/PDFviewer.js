import React, { Component } from 'react';

class PDFviewer extends Component {
  render(){
    return (
      <section className="pdf-viewer">
        <article id="viewer" style={{ width: '100vw', height: '100vh'}}>
          <p>Hello from PDFviewer</p>
        </article>
      </section>
    )
  }
}

export default PDFviewer