import React, { Component } from 'react'
import styled from 'styled-components';
import Menubar from '../menubar/MenuBar';

const Container = styled.div`
    background-image: src(${require('../../assets/img/hero-bg.jpg')});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 14px;
    .padding-left {
        padding-left: 8px; 
    }
    .padding-right {
        padding-right: 5px;
        color: rgb(217, 186, 133);
    }
`;

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Menubar />
            </Container>
        )
    }
}

export default NavBar
