import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Signup = () => {
	return (
		<Container style={{ marginTop: "10px" }}>
			<Form>
				<Row>
					<Col md={{ span: 6, offset: 4 }}>
						<h1>Sign Up Page</h1>
					</Col>
				</Row>
				<Row>
					<Col md={{ span: 3, offset: 3 }}>
						<Form.Group className="mb-3" controlId="formGroupFirstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" placeholder="Enter First Name" />
						</Form.Group>
					</Col>
					<Col md={{ span: 3 }}>
						<Form.Group className="mb-3" controlId="formGroupLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder="Enter First Name" />
						</Form.Group>
					</Col>
				</Row>

				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						<Form.Group className="mb-3" controlId="formGroupEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Email" />
						</Form.Group>
					</Col>
				</Row>

				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						<Form.Group className="mb-3" controlId="formGroupPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
					</Col>
				</Row>

				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						<Form.Group className="mb-3" controlId="formGroupContactNumber">
							<Form.Label>Contact Number</Form.Label>
							<Form.Control type="text" placeholder="Contact Number" />
						</Form.Group>
					</Col>
				</Row>

				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						<Form.Group className="mb-3" controlId="formGroupProfilePicture">
							<Form.Label>Profile Picture</Form.Label>
							<Form.Control type="file" />
						</Form.Group>
					</Col>
				</Row>

				<Row>
					<Col md={{ span: 6, offset: 3 }}>
						<Button variant="primary" type="submit" style={{ width: "100%" }}>
							Submit
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

export default Signup;
