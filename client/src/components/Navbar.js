import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  {Link} from 'react-router-dom';
import {Logout} from "./Logout.js"

export const NavbarComponent = () =>{

    const navItemStyle = {margin:'10px' , padding:'8px'}

return(

    <>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Recipes</Navbar.Brand>
        <Nav className="me-auto">
            <ul style={{  display: 'flex',   flexDirection: 'row',listStyle:'None' }}>
          <li style={navItemStyle}><Link to="/">Home</Link></li>
          <li style={navItemStyle}><Link to="/signup">Signup</Link></li>
          <li style={navItemStyle}><Link to="/login">Login</Link></li>
          <li style={navItemStyle}><Link to="/create_recipe">Create Recipes</Link></li>
          <Logout/>
          </ul>
        </Nav>
      </Container>
    </Navbar>
  </>
)
}