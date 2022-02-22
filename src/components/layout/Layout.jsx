import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={{ zIndex: 999 }}>
			<Container fluid>
				<Link className="navbar-brand" to={"/"}>
					File Uploader
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Layout;
