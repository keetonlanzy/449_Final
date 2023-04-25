import React from "react";

import Accordion from 'react-bootstrap/Accordion';
import KitchenSinkExample from "./KitchenSink";


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
          <ul className="fs-8">
            <li>Wireless Installations & Site Surveys</li>
            <li>Security Systems: Cameras, Surveillance, Video</li>
            <li>Phone System Installations & Repair</li>
            <li>Network Infrastructure Design and Consulting</li>
            <li>Cable Testing, Documentation, and Certification</li>
            <li>CAT5E/CAT6 Horizontal Ethernet Installations</li>
            <li>Wiring Closet Installations, Upgrades and Troubleshooting</li>
            <li>Speaker Installation and Maintenance</li>
            <li>Tagging and Toning Cabling Identification</li>
            <li>Grounding and Bonding</li>
            <li>Fire Stopping</li>
            <li>Fiber Optic Diagnostics and Troubleshooting</li>
            <li>Fiber Optic Installations Singlemode and Multimode</li>
            <li>Fiber Optic Fusion Splicing</li>
          </ul>
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