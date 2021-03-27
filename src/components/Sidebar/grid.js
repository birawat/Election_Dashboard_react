import React, { Component } from "react";

import {
    Card,
    Table,
    Col,
  } from "react-bootstrap";

class Grid extends React.Component{

    constructor(props){
      super(props);
    }
    render() {
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
                      <button><i class="fa fa-thumbs-up text-info" aria-hidden="true" onClick={this.props.inc}></i></button>
                      <button><i class="fa fa-thumbs-down text-danger" aria-hidden="true" onClick={this.props.dec}></i></button>
                      </>
                      <td>Binod Rawat</td>
                      <td>{this.props.num}</td>
                    </tr>
                    <tr>
                    <>
                    <button><i class="fa fa-thumbs-up text-info" aria-hidden="true" onClick={this.props.inc1}></i></button>
                    <button><i class="fa fa-thumbs-down text-danger" aria-hidden="true" onClick={this.props.dec1}></i></button>
                      </>
                      <td>Amit kumar chaurasia</td>
                      <td>{this.props.num1}</td>
                    </tr>
                    <tr>
                    <>
                    <button> <i class="fa fa-thumbs-up text-info" aria-hidden="true" onClick={this.props.inc2}></i></button>
                    <button><i class="fa fa-thumbs-down text-danger" aria-hidden="true" onClick={this.props.dec2}></i></button>
                      </>
                      <td>Suman Sourav</td>
                      <td>{this.props.num2}</td>
                      
                    </tr>
                    <tr>
                    <>
                      <button><i class="fa fa-thumbs-up text-info" aria-hidden="true" onClick={this.props.inc3}></i></button>
                      <button><i class="fa fa-thumbs-down text-danger" aria-hidden="true" onClick={this.props.dec3}></i></button>
                      </>
                      <td>Narendra Modi</td>
                      <td>{this.props.num3}</td>
                      
                    </tr>
                    <tr>
                    <>
                    <button><i class="fa fa-thumbs-up text-info" aria-hidden="true" onClick={this.props.inc4}></i></button>
                    <button><i class="fa fa-thumbs-down text-danger" aria-hidden="true" onClick={this.props.dec4}></i></button>
                      </>
                      <td>Amit Sah</td>
                      <td>{this.props.num4}</td>
                      
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
        </Col>
        
    </>
  );
}
}
export default Grid;