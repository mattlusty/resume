import { Component } from "react";
// style
import "../styles/css/Page.css";
// components
import Header from "./Header";
import Contact from "./Contact";
import Statement from "./Statement";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Education from "./Education";
import Extra from "./Extra";
import Hobbies from "./Hobbies";

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <Header />
        <Contact />
        <Statement />
        <div className="cols">
          <div className="n1">
            <Portfolio />
            <Experience />
          </div>
          <div className="n2">
            <Skills />
            <Education />
            <Extra />
            <Hobbies />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
