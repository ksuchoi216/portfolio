import React from 'react'
import profile from '../assets/profile.jpg'
import Timeline from './Timeline'
import Accordion from 'react-bootstrap/Accordion'

function AboutBody() {
  return (
  <div>    
    <div class="container-fluid d-flex justify-content-center align-items-center bg-basis text-white">
      <h3 class="m-1 p-1 fw-bold">ABOUT</h3>
    </div>

    <div class="row featurette   justify-content-center align-items-center">
      <div class="col-md-7 order-md-2  d-flex flex-column justify-content-center align-items-center m-1 p-1">
        <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
        <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
      </div>
      <div class="col-md-5 order-md-1  d-flex justify-content-center align-items-center m-1 p-1">
        <img src={profile} class="rounded" alt="profile" width="70" height="100"></img>
      </div>
    </div>

    <hr class="featurette-divider"></hr>

    <div class='container-fluid d-flex flex-column justify-content-center align-items-center'>
      <h2> Experience </h2>
      <div>
        <Timeline/>
      </div>
    </div>

    <hr class="featurette-divider"></hr>

    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
  )
}

export default AboutBody