import React from "react";
import ChartistGraph from "react-chartist";

import {
  Card,
  Col,
} from "react-bootstrap";

const Pie = (props) => {
    return (
      <>
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
                    labels: ["Binod", "Amit", "Suman", "Modi", "Sah"],
                    series: [props.numb1, props.numb2, props.numb3,
                      props.numb4, props.numb5],
                  }}
                  type="Pie"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }



export default Pie;