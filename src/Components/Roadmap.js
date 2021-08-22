import React, { Component } from "react";
import Slide from "react-reveal";

class Roadmap extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null; 

    return (
      <section id="roadmap">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Step 01</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">  
                <h3>{"Launch Easter Egg Token"}</h3>
                  <p className="info">
                    {""} <span>&bull;</span>
                    <em className="date">Okt 2021</em>
                  </p>
                  <p>DX presale, Launch of token</p></div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>step 02</span>
              </h1>
            </div>

            <div className="nine columns main-col">
            <h3>First Easter eggs</h3>
                <p className="info">
                  <span>&bull;</span> <em className="date">Nov 2021</em>
                </p>
                <p>Several Easter eggs will be distributed, the largest of which has a value of 20% of the dev wallet!</p>
            
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Step 03</span>
              </h1>
            </div>

            <div className="nine columns main-col">
            <h3>Launch NFT Easter Egg Platform</h3>
                <p className="info">
                  <span>&bull;</span> <em className="date">Dec 2021</em>
                </p>
                <p>We will be launching a platform where the community can share information about the Easter eggs. Sharing is caring</p>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Roadmap;
