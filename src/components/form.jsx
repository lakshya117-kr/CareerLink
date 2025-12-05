import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function CareerlinkForm(prop) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setValidated(true);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
        event.preventDefault();
        let userName    = event.currentTarget[0].value; 
        let proffession = event.currentTarget[2].value; 
        let details     = event.currentTarget[3].value; 
        prop.addRowData([userName,proffession,details]);
        form.reset();
            setValidated(false);
    }
  };

  return (
    <Container className="text-light">
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="m-4">
          <Form.Group className="mb-3" id="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" required/>
          </Form.Group>

          <Form.Group className="mb-3" id="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required/>
          </Form.Group>

          <Form.Group className="mb-3" id="profession">
            <Form.Label>Profession</Form.Label>
            {/*<Form.Control type="text" placeholder="Password" required/> */}
            <Form.Select required>
                <option selected disabled value="">Select</option>
                <option>AI Engineer</option>
                <option>Student</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Teacher</option>
                <option>Software Developer</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" id="details">
            <Form.Label>Other details</Form.Label>
            <Form.Control type="text" placeholder="Details" required/>
          </Form.Group>

          <Form.Group className="mb-3" id="termsandconds">
            <Form.Check type="checkbox" label="Agree to terms and conditions" required/>
          </Form.Group>
          <div className="text-center">
          <Button variant="primary" type="submit" className="mx-auto">
            Submit
          </Button>
          </div>

        </Form>
    </Container>
  );
}

export default CareerlinkForm;
