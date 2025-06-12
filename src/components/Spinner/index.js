import React, {Fragment} from 'react';
import './Loader.scss';
// import { SquareLoader } from "react-spinners";

// const override = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

const Spinner = () => {

    return (
        // <div style={{display: "flex", justifyContent: "center", background: "#fff", position: "fixed", left: "0", top: "0", zIndex: "99999", alignItems: "center", width: "100%", height: "100vh"}}>
        //    <SquareLoader
        //         color={"#f10000"}
        //         loading={true}
        //         cssOverride={override}
        //         size={80}
        //         aria-label="Loading Spinner"
        //         data-testid="loader"
        //     /> 
        // </div>
          <div className="abacies-loader">
      <div className="loader-container">
        {/* Modern animated logo/brand animation */}
        <div className="loader-logo">
          <div className="logo-animation">
            <div className="loader-circles">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
            </div>
            <div className="loader-pulse"></div>
          </div>
        </div>
        
        {/* Loading progress bar */}
        <div className="loader-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
        
        {/* Animated text */}
        <div className="loader-text">
          <div className="text-animation">
            <span className="letter" data-letter="A">A</span>
            <span className="letter" data-letter="B">B</span>
            <span className="letter" data-letter="A">A</span>
            <span className="letter" data-letter="C">C</span>
            <span className="letter" data-letter="I">I</span>
            <span className="letter" data-letter="E">E</span>
            <span className="letter" data-letter="S">S</span>
          </div>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Spinner