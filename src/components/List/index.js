import React from "react";
import {Container, Row} from "./styles"

export const List = () => {
    return(
        <Container>
            <Row>
                <a href="#" className="volverListado">Volver al listado</a>
                <a href="#">Instrumentos Musicales</a>
                <a href="#">Baterías y Percusión</a>
                <a href="#">Baterías</a>
                <a href="#">Baterías Acústicas</a>
            </Row>
            <Row>
            <a href="#">Compartir</a>
            <a href="#">Vender uno igual</a>
            </Row>
        </Container>
    )
}