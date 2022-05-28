import React from "react"
import { Container, Estado, Row, HeartIcon, Price, Card, CheckIcon, Color, Stock, Cantidad, ButtonCart, Button, Beneficios, ShieldIcon, CupIcon, MedalIcon } from "./styles"

export const ProductoEnVenta = () => {
    return (
        <Container>
            <Estado>Nuevo  |  1 vendido</Estado>
            <Row>
                <h1>Bateria Pearl Export 5 Cuerpos Bombo 22 Fp21 Cuotas</h1>
                <HeartIcon />
            </Row>
            <Price>$145.658</Price>
            <Card>
                <CheckIcon />
                <div>
                    <span className="title">Envío gratis a todo el país</span>
                    <span className="detalle">San Nicolás, Capital Federal</span>
                    <a href="#" className="costoEnvio">Ver costos de envío</a>
                </div>
            </Card>
            <Color>Color : <strong>Smokey chrome</strong></Color>
            <Stock><strong>Stock disponible</strong></Stock>
            <Cantidad>
                <p>Cantidad</p>
                <strong>1 unidad</strong>
                <input type="number" value="" />
                <span>(5 disponibles)</span>
            </Cantidad>
            <ButtonCart>
                <Button className="text">Comprar ahora</Button>
            </ButtonCart>
            <Beneficios>
                <li>
                    <ShieldIcon />
                    <p>Compra Protegida, <span>recibí el producto que esperabas o te devolvemos tu dinero.</span></p>
                </li>
                <li>
                    <CupIcon />
                    <p>Mercado puntos. <span>Sumás 2080 puntos.</span></p>
                </li>
                <li>
                    <MedalIcon />
                    <p><span>6 meses de garantía de fábrica.</span></p>
                </li>
            </Beneficios>
        </Container>
    )
} 