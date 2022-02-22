import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
	const auth = useSelector((state) => state.auth);

	const renderLoggedInUserLinks = () => {
		return (
			<Nav>
				<li className="nav-item">
					<span className="nav-link">Sign Out</span>
				</li>
			</Nav>
		);
	};

	const renderNonLoggedInUserLinks = () => {
		return (
			<Nav>
				<li className="nav-item">
					<NavLink to={"/signin"} className="nav-link">
						Sign In
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to={"/signup"} className="nav-link">
						Sign Up
					</NavLink>
				</li>
			</Nav>
		);
	};

	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={{ zIndex: 999 }}>
				{/* <Container fluid> */}
				<Container>
					<Link className="navbar-brand" to={"/"}>
						File Uploader
					</Link>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						{auth.authenticate ? renderLoggedInUserLinks() : renderNonLoggedInUserLinks()}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
