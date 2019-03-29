import React from 'react'

let Resume = () => {
  return (
    <section id="bio">
      <div className="title">
        <h3>Bio</h3>
      </div>
      <div className="bio-wrapper">
        <div className="bio-text">
          <p>Hello, my name is Asiel, and I am an independent website developer. I was born and raised in Cuba, and currently live and work in Florida, United States. From a very young age, I was an avid reader with a curious mind, an explorer of all advanced technology within my reach, and a rather unsuccessful aspiring writer (all of which still remain true). As I grew up, I developed an aptitude for English, and decided to pursue a degree in foreign languages. I graduated with honors from the University of Havana in 2014, with a Bachelor of Arts in French and English language (the equivalent of a B.A. in Translation, by american standards), and a minor in Japanese.</p>
          <p>After moving to the United States two years later, I was able to experience the full potential of the internet and its endless possibilities. To subsequently fall in love with computer programming was just an online course away, which I eventually took, and I realized coding was the perfect way to bring together my shared passion for languages, technology and creativity. There was no coming back from that realization. I applied myself individually for several months, and finally decided to attend a coding bootcamp to accelerate my learning. I graduated as a full stack web developer three months after.</p>
        </div>
        <aside className="bio-right">
          <img src={process.env.PUBLIC_URL + "/images/Profpic.jpg"} className="bio-image" alt="Asiel smiling" />
          <a href="#" className="resume">Resume</a>
        </aside>
      </div>
    </section>
  )
}

export default Resume