import React from "react";
import ChartistGraph from "react-chartist";

import {
    Card,
    Container,
    Row,
    Col,
  } from "react-bootstrap";

  class Line extends React.Component{

    constructor(props){
      super(props);
    }
    render() {
    return (
      <>
            <Container fluid>
                <Row>
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Election Line Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="ct-chart" id="chartHours">
                                    <ChartistGraph
                                        data={{
                                            labels: [
                                                "Binod",
                                                "Amit",
                                                "Suman",
                                                "Modi",
                                                "Sah"
                                            ],
                                            series: [
                                                [this.props.num,this.props.num1,this.props.num2,
                                                    this.props.num3,this.props.num4],
                                            ],

                                        }}
                                        type="Line"
                                        options={{
                                            low: 0,
                                            high: 200,
                                            showArea: false,
                                            height: "245px",
                                            axisX: {
                                                showGrid: false,
                                            },
                                            lineSmooth: true,
                                            showLine: true,
                                            showPoint: true,
                                            fullWidth: true,
                                            chartPadding: {
                                                right: 50,
                                            },
                                        }}
                                        responsiveOptions={[
                                            [
                                                "screen and (max-width: 640px)",
                                                {
                                                    axisX: {
                                                        labelInterpolationFnc: function (value) {
                                                            return value[0];
                                                        },
                                                    },
                                                },
                                            ],
                                        ]}
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

export default Line;