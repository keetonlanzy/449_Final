import React from "react";

import Accordion from 'react-bootstrap/Accordion';
import KitchenSinkExample from "./KitchenSink";

import { getServices } from './list';
let val = getServices(); 



function BasicExample() {
  return (
<div>
  <div className="container text-center rounded-pill p-3 mb-5 mt-3" style={{background: 'grey'}}>
    <div className="row align-items-center">
      <div className="col-1">
          <nav className="navbar navbar-light bg-none">
          <div className="container text-center">
              <a className="navbar-brand d-flex fs-1" href="#">
                  <img src="SLlogo.png"
                      height="70"
                      alt="S&L Logo"
                      loading="lazy"/>
              </a>
          </div>
          </nav>
      </div>
    <div className="fs-1 col-10" style={{background: 'grey', color: 'navy', fontFamily: 'Georgia'}}>
      <strong>S&L Cabling Solutions</strong>
    </div>
    </div>
  </div>


    <div className="container px-4">
    <Accordion defaultActiveKey="0" alwaysOpen flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Services</Accordion.Header>
        <Accordion.Body>
          <table id="services"></table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>About</Accordion.Header>
        <Accordion.Body>
        S&L Cabling Solutions, LLC is a leading communications contractor in the field of structured cabling.  Whether your requirements are voice, data, video, or fiber optic, our staff of well-trained professionals is here to ensure a quality installation. Over the last decade we have built a reputation on QUALITY, SERVICE, and DEPENDABILITY.  Our mission is to provide our customers with solutions that will meet their needs today and in the future.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Contact Us</Accordion.Header>
        <Accordion.Body>
          <KitchenSinkExample />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </div>
  );
}

export default BasicExample;