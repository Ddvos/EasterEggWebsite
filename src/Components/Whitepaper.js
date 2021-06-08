import React, { Component } from "react";
import Fade from "react-reveal";

class Whitepaper extends Component {
  constructor(){
    super();

    this.state={
     lamboState: false,
    }


  }
   showLambo(){

   

    //show and hide lambo image
    if(this.state.lamboState === false){
      this.setState({lamboState: true});
    }else{
      this.setState({lamboState: false});
    }
    
  }
  render() {
    //if (!this.props.data) return null;
    return (
      <section id="whitepaper">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src= "images/easteregg.png"
                alt="Easter Egg Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Tokenomics</h2>

              <p>With Easter Egg we want to set up the largest Easter Eggs world wide that everyone can participate in, online but also in the real world!
                For this we want to collect money with the Easter Egg token. 
                For each transaction we charge a fee of 7%, of which 3% goes to a
                wallet with which we will finance the easter eggs, 2% goes to the liquidity pool and 2% goes back to the holders.</p>

              <h2>Easter Eggs</h2>

              <p>The easter eggs will be hidden both online and in the real world. 
                 The easter eggs can be found by following the correct steps. 
                 The one who finds the easter egg will find very nice <i onClick={()=>this.showLambo()}>prizes!</i></p>  

              <img style={{ display: this.state.lamboState ? "block" : "none" }}  
                className="lambo-pic"
                src= "images/Lambo.jpg"
                alt="Lambo-pic"
              />
              <div className="row">
                <div className="columns download">
                  <p>
                    <a href={"koudekerke"} className="button">
                      <i className="fa fa-download"></i>See full whitepaper
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

export default Whitepaper;
