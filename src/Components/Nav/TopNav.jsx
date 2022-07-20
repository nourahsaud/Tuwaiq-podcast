import React, {useState} from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaHeadphonesAlt } from "react-icons/fa";
import './Nav.css';

const TopNav = () => {
    const menuData = [
        {
            path:'/Home',
            name:'Home'
        },
        {
            path:'/About',
            name:'About'
        },
        {
            path:'/Programs',
            name:'Programs'
        },
        {
            path:'/Team',
            name:'Team'
        },
        {
            path:'/Contact',
            name:'Contact'
        }
    ]

    const [color, setColor] = useState(false);
    const changebg = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changebg); 

    const navigate = useNavigate();

    const navToSubscribe = () => {
        navigate('/Subscribe');
    }

    return (
        <Navbar className={color ? 'navbar-bg sticky-top' : 'navbar'} expand="lg">
            <Container>
            
                <Navbar.Brand href="#home" className="brand"> <FaHeadphonesAlt /> <span>POD</span> Tuwaiq</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            menuData.map(item => (
                                <LinkContainer to={item.path} key={item.name}>
                                    <Nav.Link className="list_item">{item.name}</Nav.Link>
                                </LinkContainer>
                            ))
                        }
                    </Nav>
                    <Nav className="ms-auto">
                        <Button className="btn" onClick={navToSubscribe}>Subscribe</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNav;
