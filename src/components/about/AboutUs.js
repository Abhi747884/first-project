import React from 'react'
import Contant from './Contant'
import Cardlist from './Cardlist'
import styled from 'styled-components'

const Container = styled.div`
    color: #fff;
    background-repet: no-repete;
    @media (max-width: 900px) {
        padding: 70px 30px;
    }
    @media (max-width: 400px) {
        padding-bottom: 70px;
    }
`;

const AboutUs = () => {
    return (
        <Container>
            <Contant />
            <Cardlist />
        </Container>
    )
}

export default AboutUs
