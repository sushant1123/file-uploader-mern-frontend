import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { signInUser } from "../../redux/auth/auth.asyncActions";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/UI/Input";
import { Navigate } from "react-router-dom";
// import Layout from "../../components/layout/Layout";
import Header from "../../components/header/Header";

const Signin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const auth = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const handleSignInRequest = (e) => {
		e.preventDefault();
		const user = {
			email,
			password,
		};
		// console.log(user);
		dispatch(signInUser(user));
	};

	if (auth.authenticate) {
		return <Navigate to={"/"} />;
	}

	return (
		<Header>
			<Container style={{ marginTop: "10px" }}>
				<Form onSubmit={handleSignInRequest}>
					<Row>
						<Col md={{ span: 6, offset: 4 }}>
							<h1 style={{ marginBottom: "18px" }}>Sign In Page</h1>
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 6, offset: 3 }}>
							<Input
								type="text"
								label="Email address"
								placeholder="Enter email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								id="formGroupEmail"
							/>
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 6, offset: 3 }}>
							<Input
								type="password"
								label="Password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								id="formGroupPassword"
							/>
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
		</Header>
	);
};

export default Signin;
