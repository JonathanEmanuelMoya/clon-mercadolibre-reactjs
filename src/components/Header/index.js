import React from "react";
import { Container, Wrapper, Row } from "./styles";


export const Header = () => {
    return (
        <Container>
            <Wrapper>
                <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus@2x.png" alt="Logo" />
            </Wrapper>
            <Row>
                <a href="#">Categorias</a>
                <a href="#">Ofertas</a>
                <a href="#">Historial</a>
                <a href="#">Supermercado</a>
                <a href="#">Moda</a>
                <a href="#">Vender</a>
                <a href="#">Ayuda</a>
            </Row>
        </Container>
    )
}