import React from 'react'
import Project from './Project';
import ProjectsList from '../data/projects.json'

// import RorSampleApp from '../images/RoR_sample_app.png'
// import CodeDangerously from '../images/code_dangerously.png'
// import PalindromeApp from '../images/palindrome_app.png'
// import JacqueFresco from '../images/tribute_jacque_fresco.png'
// import ExpenseTracker from '../images/expense_tracker_app.png'
// import BullsAndCows from '../images/bulls_and_cows.png'

const imgSource = '../images/'

const projectList = ProjectsList.allProjects
let Projects = () => {
  return(
    <section id="profile">
      <h3>My Projects</h3>
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
