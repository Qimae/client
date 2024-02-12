import Accordion from "react-bootstrap/Accordion";

function Faq() {
  return (
    <div id="FAQ">
      <div className="fq-content">
      <h1>Frequently Asked Questions</h1>
        <Accordion defaultActiveKey="0" id="accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How long does it take to get reply from a school?</Accordion.Header>
            <Accordion.Body>
             Depending on the backlog, it might take 24hrs before a request is replied.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Is this site comissioned by the government?</Accordion.Header>
            <Accordion.Body>
            This site is registered under the Ministry of Education.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Is this service free of charge?</Accordion.Header>
            <Accordion.Body>
             This is an approved site for the ministry of education so it is free of charge.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
