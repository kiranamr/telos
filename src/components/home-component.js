import React, { Component } from "react";
import "../App.css";
import { Slide } from "react-slideshow-image";
const slideImages = [
  require("../../src/images/1 (1).jpg"),
  "../../src/images/1 (2).jpg",
  "../../src/images/1 (3).jpg"
];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (1).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (2).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (3).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (4).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (5).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (6).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (7).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (8).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (9).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (10).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (11).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (12).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (13).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>

            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (15).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (16).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (17).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (18).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (19).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            {/*  <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (20).jpg")}
                  height="10%"
                  width="100%"
                />
              </div>
            </div> */}
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (21).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (22).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (23).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (24).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (25).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (26).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (27).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (28).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (29).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (30).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (31).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (32).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (33).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (34).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (35).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (36).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (37).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (38).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (39).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (40).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (41).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (42).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (43).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img
                  src={require("../images/1 (44).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          </Slide>
        </div>
        {/*    <div className="col-md-12">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (1).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (2).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (3).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (4).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (5).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (6).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (7).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (8).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (9).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (10).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (11).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (12).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (13).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (14).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (15).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (16).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (17).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (18).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (19).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (20).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (21).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (22).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (23).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (24).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (25).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (26).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (27).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (28).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (29).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (30).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (31).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (32).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (33).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (34).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (35).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (36).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (37).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (38).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (39).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (40).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (41).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (42).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (43).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="col-md-3" style={{ marginTop: "20px" }}>
                <img
                  src={require("../images/1 (44).jpg")}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
     */}{" "}
        <br></br>
        <br></br>
        <h5>
          <div className="container bg-primary">
            We are co-existed with the contemporary applied sciences and
            engineering mechanics.
          </div>
          <br></br>
          <div className="container">
            Telos technologies is having an association with world’s largest
            distributor of electronics and maintenance products, RS Components.
            We are actively carried out university programs, lab setups,
            trainings internships across India with positive feedbacks.{" "}
          </div>
          <br></br>
          <br></br>
          <div className="container bg-primary">What we incubate?</div>
          <br></br>
          <div className="container">
            Telos is allied in governing universities, colleges, corporate and
            individuals to elevate the standard of being known for the
            engineering technologies.
            <br></br>
            Technology is an unseen basket of circuits, softwares, proportions,
            appropriations and some more. Telos eases you in extracting those
            credentials with the art of deploying them to make an entity and to
            be understood the techniques necessitated.
          </div>

          <br></br>
          <br></br>
        </h5>
        <br></br>
        <h5>
          <div className="container bg-primary"> Specifically?</div>
        </h5>
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <h6>
                  <br></br>
                  Internet of Things (IoT)
                  <br></br>
                  Artificial Intelligence
                  <br></br>
                  Deep learning
                  <br></br>
                  Machine learning
                  <br></br>
                  PCBDesign
                  <br></br>
                  Programming and realization
                  <br></br>
                  Field-Programmable Gate Array (FPGA)
                </h6>
              </div>
              <div className="col-md-6">
                <h6>
                  <br></br>
                  Linear Integrated Circuits
                  <br></br>
                  Embedded Systems
                  <br></br>
                  Very-Large-Scale Integration (VLSI)
                  <br></br>
                  Robotics and Animations
                  <br></br>
                  Big Data and Cloud
                  <br></br>
                  Enterprise Provisions in Academics
                  <br></br>
                  Application Management and Solutions
                  <br></br>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
