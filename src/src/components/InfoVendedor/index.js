import React from "react";
import { Container, Title, Card, LocationIcon, PlatinumIcon, Reputacion, Caja, Row, SupportIcon, ClockIcon, Link } from "./styles";

export const InfoVendedor = () => {
    return (
        <Container>
            <Title>
                Información sobre el vendedor
            </Title>
            <Card>
                <LocationIcon />
                <div>
                    <p>Ubicación</p>
                    <strong>San Nicolás, Capital Federal</strong>
                </div>
            </Card>

            <Card>
                <PlatinumIcon />
                <div>
                    <p className="platinum">MercadoLíder Platinum</p>
                    <strong>¡Es uno de los mejores del sitio!</strong>
                </div>
            </Card>
            <Reputacion>
                <Caja>
                    <li />
                    <li />
                    <li />
                    <li />
                    <li className="active" />
                </Caja>
            </Reputacion>
            <Row>
                <div>
                    <strong>1916</strong>
                    <span>Ventas en los últimos 60 días</span>
                </div>
                <div>
                    <strong>
                        <SupportIcon />
                    </strong>
                    <span>Brinda buena atención</span>
                </div>
                <div>
                    <strong>
                        <ClockIcon />
                    </strong>
                    <span>Despacha sus productos a tiempo</span>
                </div>
            </Row>
            <Link href="#">Ver más datos de este vendedor</Link>
        </Container>
    )
}