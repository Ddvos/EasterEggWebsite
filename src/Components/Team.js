import React, { Component } from "react";
import Fade from "react-reveal";

class Team extends Component {
  render() {
    if (!this.props.data) return null;

    //const name = this.props.data.name;
    //const profilepic = "images/" + this.props.data.image;
   // const bio = this.props.data.bio;
    // const street = this.props.data.address.street;
   // const city = this.props.data.address.city;
   // const state = this.props.data.address.state;
   // const zip = this.props.data.address.zip;
    //const phone = this.props.data.phone;
   // const email = this.props.data.email;
   // const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="team">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">

            </div>
            <div className="nine columns main-col">
              <h2>The team</h2>

              <p>The team is hidden but, with a little research you can learn more about them :) </p>
              <div className="row">
                
                <div className="columns download">
                  <p>
                    <a href="/" className="button">
                      Find the team
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Team;
