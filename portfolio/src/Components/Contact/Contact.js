import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Header from '../Footer'
import { Form, Button } from 'react-bootstrap'

export default function ContctForm() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        <Header/>
        <Form>
  <Form.Group controlId="formBasicName">
    <Form.Label>Name </Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group controlId="formBasicContact">
    <Form.Check type="text" label="Contact" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Container>
    </React.Fragment>
  );
}
