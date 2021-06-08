import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import Whitepaper from "./Components/Whitepaper";
import Roadmap from "./Components/Roadmap";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Resume from "./Components/Resume";
//import Contact from "./Components/Contact";
//import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <Whitepaper data={this.state.resumeData.main} />
        <Roadmap data={this.state.resumeData.resume} />
        <Team data={this.state.resumeData.main} />
        {/* <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} /> */}
        {/* <Contact data={this.state.resumeData.main} /> */}
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
