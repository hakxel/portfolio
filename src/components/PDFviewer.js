import React, { Component } from 'react';

class PDFviewer extends Component {
  constructor(props){
    super(props)
    this.viewerRef = React.createRef()
    this.backend = new props.backend()
  }

  componentDidMount(){
    let {src} = this.props
    let element = this.viewerRef.current
    this.backend.init(src, element)
  }
  render(){
    return (
      <section id="viewer" ref={this.viewerRef} style={{width: "100vw", height: "100vh"}}>
      </section>
    )
  }
}

export default PDFviewer