import React from "react";
import ChartistGraph from "react-chartist";

import {
    Card,
    Col,
} from "react-bootstrap";

const Line = (props) => {
        return (
            <Col md="12">
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
                                        [props.numb1, props.numb2, props.numb3,
                                        props.numb4, props.numb5],
                                    ],

                                }}
                                type="Line"
                                options={{
                                    low: 0,
                                    high: 100,
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
        );
}

export default Line;