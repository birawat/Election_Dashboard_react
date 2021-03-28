import React, { Component } from "react";

import {
  Card,
  Table,
  Col,
} from "react-bootstrap";

const Grid = (props) => {
     
    return (
      <>
        <Col md="12">
          <Card className="strpied-tabled-with-hover">
            <Card.Header>
              <Card.Title as="h4">Election Status</Card.Title>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover table-striped">
                <thead>
                  <tr>
                    <th className="border-0">Vote</th>
                    <th className="border-0">Candidate Name</th>
                    <th className="border-0">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <>
                      <button><i class="fa fa-thumbs-up text-info" aria-hidden="true" onClick={props.inc1}></i></button>
                      <button><i class="fa fa-thumbs-down text-danger" aria-hidden="true" onClick={props.dec1}></i></button>
                    </>
                    <td>Binod Rawat</td>
                    <td>{props.numb1}</td>
                  </tr>
                  <tr>
                    <>
                      <button><i class="fa fa-thumbs-up text-info" aria-hidden="true" onClick={props.inc2}></i></button>
                      <button><i class="fa fa-thumbs-down text-danger" aria-hidden="true" onClick={props.dec2}></i></button>
                    </>
                    <td>Amit kumar chaurasia</td>
                    <td>{props.numb2}</td>
                  </tr>
                  <tr>
                    <>
                      <button> <i class="fa fa-thumbs-up text-info" aria-hidden="true" onClick={props.inc3}></i></button>
                      <button><i class="fa fa-thumbs-down text-danger" aria-hidden="true" onClick={props.dec3}></i></button>
                    </>
                    <td>Suman Sourav</td>
                    <td>{props.numb3}</td>

                  </tr>
                  <tr>
                    <>
                      <button><i class="fa fa-thumbs-up text-info" aria-hidden="true" onClick={props.inc4}></i></button>
                      <button><i class="fa fa-thumbs-down text-danger" aria-hidden="true" onClick={props.dec4}></i></button>
                    </>
                    <td>Narendra Modi</td>
                    <td>{props.numb4}</td>

                  </tr>
                  <tr>
                    <>
                      <button><i class="fa fa-thumbs-up text-info" aria-hidden="true" onClick={props.inc5}></i></button>
                      <button><i class="fa fa-thumbs-down text-danger" aria-hidden="true" onClick={props.dec5}></i></button>
                    </>
                    <td>Amit Sah</td>
                    <td>{props.numb5}</td>

                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

      </>
    );
  }
export default Grid;