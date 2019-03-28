import React, {Component} from 'react'
import ProjectsList from '../data/projects.json'
import Project from './Project';

const projectList = ProjectsList.allProjects
class Projects extends Component {
  constructor(){
    super()
    this.state = {
      bitworldBuys: "1.png",
      beatBlender: "1.png",
      sampleApp: "1.png",
      leCSS: "1.png"
    }
  }

  handleMouseIn = (event) => {
    let name = event.target.name
    this.setState({
      [name]: "2.png"
    })
  }

  handleMouseOut = (event) => {
    let name = event.target.name
    this.setState({
      [name]: "1.png"
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
