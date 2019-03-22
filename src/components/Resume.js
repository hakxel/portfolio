import React from 'react'

let Resume = () => {
  return (
    <section id="bio">
      <div className="title">
        <h3>Bio</h3>
      </div>
      <div className="bio-wrapper">
        <div className="bio-text">
          <p>Nulla enim amet dolore est irure anim officia aliqua commodo minim. Culpa nisi aliquip laborum sint labore nulla eiusmod nisi ipsum quis. Cillum deserunt qui voluptate ullamco aliqua ipsum adipisicing minim irure cillum eu. Aute excepteur quis dolor aute. Pariatur fugiat qui laboris aliquip velit exercitation consequat. Ullamco ut fugiat mollit eu aliqua eu exercitation irure velit eu occaecat. Excepteur enim sint aliqua et velit duis.</p>
          <p>Enim elit minim dolor adipisicing officia. Minim in labore esse cillum eiusmod culpa reprehenderit exercitation proident incididunt enim anim in laborum. Occaecat ullamco dolor esse adipisicing ullamco enim irure ex magna sunt exercitation sint deserunt. Non enim consectetur Lorem ad et pariatur est adipisicing. Aute occaecat cillum commodo tempor incididunt laborum. Sint occaecat veniam velit qui.</p>
        </div>
          <img src={process.env.PUBLIC_URL + "/images/Profpic.jpg"} alt="Asiel smiling" />
      </div>
    </section>
  )
}

export default Resume