import React from "react";
import ChartistGraph from "react-chartist";

import {
    Card,
    Container,
    Row,
    Col,
  } from "react-bootstrap";

  class Pie extends React.Component{

    constructor(props){
      super(props);
    }
    render() {
    return(
      <>
      <Container fluid>
        <Row>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Election Pie Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["Binod", "Amit" , "Suman" , "Modi", "Sah"],
                      series: [this.props.num,this.props.num1,this.props.num2,this.props.num3,this.props.num4],
                    }}
                    type="Pie"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
  }


export default Pie;