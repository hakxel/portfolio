import React, {Component} from 'react'
import ProjectsList from '../data/projects.json'
import Project from './Project';

const projectList = ProjectsList.allProjects
class Projects extends Component {
  constructor(){
    super()
    this.state = {
      bitworldBuys: "1.jpg",
      hakxelMole: "1.jpg",
      beatBlender: "1.jpg",
      sampleApp: "1.jpg",
      leCSS: "1.jpg"
    }
  }

  handleMouseIn = (event) => {
    let name = event.target.name
    this.setState({
      [name]: "2.jpg"
    })
  }

  handleMouseOut = (event) => {
    let name = event.target.name
    this.setState({
      [name]: "1.jpg"
    })
  }

  render(){
      
      return(
        <section id="projects">
          <div className="title">
            <h3>Projects</h3>
          </div>
          <div className="projects-wrapper">
            {projectList.map( (project, index) =>
              <Project 
                key={index}
                name={project.name}
                class={project.class}
                href={project.href}
                image={project.image + this.state[project.name]}
                onHoverIn={this.handleMouseIn}
                onHoverOut={this.handleMouseOut}
                alt={project.alt}
                description={project.description}
              />
            )}
          </div>
        </section>
      )
    }
  }

export default Projects
