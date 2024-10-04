import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useAuth } from "../contexts/AuthContext"; // Ensure the path is correct
import { MessageCustom } from "@/components/navbar/NavigationBar.styles.jsx";

function NavigationBar() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  useEffect(() => {
    const authStatus = localStorage.getItem("authStatus");
    if (authStatus === "loggedIn" && !isAuthenticated) {
      setMessage("Login successful!");
      setMessageColor("green");
      setShowMessage(true);
      localStorage.setItem("authStatus", "loggedOut");
    } else if (authStatus === "loggedOut" && isAuthenticated) {
      setMessage("Logout successful!");
      setMessageColor("purple");
      setShowMessage(true);
      localStorage.setItem("authStatus", "loggedIn");
    }
    const timer = setTimeout(() => setShowMessage(false), 3000);
    return () => clearTimeout(timer);
  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    localStorage.setItem("authStatus", "loggedOut");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="https://legion-post84-assets.s3.us-west-1.amazonaws.com/images/legion-emblem-transparent.png"
              alt="Brand Logo"
              width="60"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Legion
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/membership">
                <Nav.Link>Membership</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/programs">
                <Nav.Link>Programs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/events">
                <Nav.Link>Events</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sponsors">
                <Nav.Link>Sponsors</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/scholarship">
                <Nav.Link>Scholarship</Nav.Link>
              </LinkContainer>
              {isAuthenticated ? (
                <LinkContainer to="/" onClick={handleLogout}>
                  <Nav.Link>Logout</Nav.Link>
                </LinkContainer>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showMessage && (
        <div className="auth-message">
          <MessageCustom $isSuccess={messageColor === "green"}>
            {message}
          </MessageCustom>
        </div>
      )}
    </>
  );
}

export default NavigationBar;
