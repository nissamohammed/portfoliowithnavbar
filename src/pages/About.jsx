import React from 'react'
import Header from '../components/Header'
import doc1 from '../assets/doc1.pdf'
function About() {
  return (
    
    <>
    <Header/>
          <div className="p-5 homediv" style={{ minHeight: '95vh' }}>
              <div className="text-center py-5 mt-5 ms-5 homediv1 w-50">
                  <h1 className='fw-bolder text-primary '>About Me</h1>
                  <p className='fs-5' style={{textAlign:'justify'}}>A Skilled MEARN Stack Developer with expertise in building full-stack web applications using MongoDB, Express.js, React, and Node.js.</p>
                  <p className='fs-5' style={{textAlign:'justify'}}>  Adept at developing responsive and dynamic user interfaces with React, managing server-side logic and RESTful APIs with Node.js and Express, and handling scalable data management with MongoDB.
                  </p>
                 <a id="download" href={doc1} download target="_blank"><button className='btn btn-dark rounded-5 py-2'>Download CV</button></a> 
              </div>
          </div>
      </>
  )
}

export default About