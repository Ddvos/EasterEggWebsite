import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    // const project = this.props.data.project;
    // const github = this.props.data.github;
    // const name = this.props.data.name;
    // const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#whitepaper">
                Whitepaper
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#roadmap">
                Roadmap
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#team">
                Team
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#footer">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Easter Egg Token</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>Find the first Easter Egg and claim your free Airdrop.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="/"className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href="https://testnet.bscscan.com/address/0x8eb4cf9b579d84a834a7fe420cb081006a32d1cd#code" className="button btn github-btn">
                  <i className="fa fa-github"></i>Contract
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#whitepaper">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
