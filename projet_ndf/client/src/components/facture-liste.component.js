import React, { Component } from 'react';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
export default class Facture extends Component {

    render() {
        return (
          <Col md={4}>
          <Card className='my-3 p-3 rounded'>
          <Col md={12}>
              <Card.Img src={`http://localhost:8080/${this.props.obj.image}`} variant='top' />
              </Col>
            <Card.Body>
            <Col md={12}>
                <Card.Title as='div'>
                  <strong>{this.props.obj.name}</strong>
                </Card.Title>
                </Col>
                <Col md={12}>
              <Card.Text as='h3'>{this.props.obj.userId}</Card.Text>
              </Col>
            </Card.Body>
          </Card>
          </Col>
        );
    }
}

