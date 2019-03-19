import React from 'react'
import ProjectsList from '../data/projects.json'
import Project from './Project';

// import SampleApp from '../images/SampleApp.png'
// import LECSS from '../images/LECSS.png'
// import PalindromeApp from '../images/palindrome_app.png'
// import JacqueFresco from '../images/tribute_jacque_fresco.png'
// import ExpenseTracker from '../images/expense_tracker_app.png'
// import BullsAndCows from '../images/bulls_and_cows.png'

const imgSource = process.env.PUBLIC_URL

const projectList = ProjectsList.allProjects
let Projects = () => {
  console.log(imgSource)
  return(
    <section id="projects">
      <div className="projects-title">
        <h3>Projects</h3>
      </div>
      <div class="projects-wrapper">
        {projectList.map( project =>
          <Project 
            key={project.name}
            class={project.class}
            href={project.href}
            image={project.image}
            alt={project.alt}
            description={project.description}
          />
        )}
      </div>
    </section>
  )
}

export default Projects
