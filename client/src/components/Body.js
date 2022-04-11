import React from 'react'
import profile from '../assets/profile.jpg'
import project from '../assets/project.png'
import { VscGraph } from "react-icons/vsc";
import { GrChat } from "react-icons/gr";
import { GoDatabase } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { MdEngineering } from "react-icons/md";
import { BsCameraFill } from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel'


export default function Body() {
  return (
    <div>
      <div class="container-fluid d-flex justify-content-center align-items-center bg-basis text-white">
        <h3 class="m-1 p-1 fw-bold">HOME</h3>
      </div>
      <div class="container py-4">
        <div class="row align-items-center d-flex flex-row justify-content-center align-items-center">
          <div class="col-md-8 p-6 mb-4 bg-light rounded-3 align-items-center">
            <div class="container-fluid py-5">
              <h4 class="text-start">I am</h4>
              <h3 class="text-start display-5 fw-bold">Kyungsu Choi</h3>
              <p class="text-start col-md-8 fs-6">Enjoyable and progmatic data analytist inspired by though problems</p>
              <button class="btn btn-primary btn-sm" type="button">My Portfolio</button>
            </div>
          </div>
          <div class="col-md-4 align-items-center d-flex flex-row justify-content-center align-items-center">
            <figure>
              <img src={profile} class="rounded" alt="profile" width="200" height="300"></img>
            </figure>
          </div>
        </div>

        <div class="align-items-md-stretch">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
              <h2 class='text-start'>SELF INTRODUCTION</h2>
              <p class='text-start'>
                I am a <b><i>professional problem solver</i></b> with 4 years engineering experience. <br></br>
                I worked as an engineer for 4 years. During this period I logically solved +400 engineering problems(projects) to meet various customers' requirements, so I could improve my problem-solving skill and learn how to logically think about problems.

              </p>
              <button class="btn btn-primary btn-sm" type="button">About me</button>
            </div>
        </div>

        <div>
            <div class="h-100 p-5 bg-light border rounded-3 d-flex flex-column justify-content-center align-items-center">
              <div class="d-flex flex-column justify-content-center align-items-center">
                <h2>Areas of Interest</h2>
                <p>Take a look at some of the things I love working on.</p>
              </div>
              <div class="row mb-3 m-1">
                <div class="col-sm-4 themed-grid-col">
                  <p><VscGraph/></p>
                  <p class='fw-bold'>Data Analytics</p>
                  <div>
                    I love telling a story. Getting to the heart of a problem and coming up with a solution.
                  </div>
                </div>
                <div class="col-sm-4 themed-grid-col">
                  <p><BsCameraFill/></p>
                  <p class='fw-bold'>Computer Vision</p>
                  <div>
                    I enjoy learning cutting edge theory about computer vision.
                  </div>
                </div>
                <div class="col-sm-4 themed-grid-col">
                  <p><GrChat/></p>
                  <p class='fw-bold'>NLP</p>
                  <div>
                    I apply text analytics to some of the hardest questions in business.
                  </div>
                </div>
              </div>
              <div class="row mb-3 m-1">
                <div class="col-sm-4 themed-grid-col">
                  <p><CgWebsite/></p>
                  <p class='fw-bold'>Full Stack</p>
                  <div>
                    
                  </div>
                </div>
                <div class="col-sm-4 themed-grid-col">
                  <p><GoDatabase/></p>
                  <p class='fw-bold'>Machine Learning</p>
                  <div>
                    I am passionate about learning the theory that is pushing the cutting edge of ML.
                  </div>
                </div>
                <div class="col-sm-4 themed-grid-col">
                  <p><MdEngineering/></p>
                  <p class='fw-bold'>Engineering</p>
                  <div>
                    I am also interested in improving efficiency or optimiztion about engineering and factories.
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div>
          <Carousel>
            <Carousel.Item>
              <div class="row featurette">
                <div class="col-md-7">
                  <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                  <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div>
                <div class="col-md-5">
                  <img src={project} alt="First pic" width="200" height="300"></img>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
              </div>
              <div class="col-md-5">
                <img src={project} alt="First pic" width="200" height="300"></img>
              </div>
            </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
