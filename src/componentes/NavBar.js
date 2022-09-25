import React from "react"
import {Container, Navbar} from 'react-bootstrap';
import ItemListContainer from './ItemListContainer'

const SALUDO = 'Coderhousers'

const NavBar = () => {
    return(
        <Navbar bg="light" variant="light">
            <Container>
                
                <ItemListContainer saludo={SALUDO}></ItemListContainer>
            </Container>
        </Navbar>
    )
}

export default NavBar