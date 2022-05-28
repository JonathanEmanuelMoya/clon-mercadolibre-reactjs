import React from "react";
import { Container, Panel, Column, Galeria, Description, Section } from "./styles"

export const Producto = () => {
    return (
        <Container>
            <Panel>
                <Column>
                    <Galeria>
                        <img src="https://http2.mlstatic.com/D_NQ_NP_830611-MLA40426919304_012020-F.webp" alt="Bateria" />
                    </Galeria>
                    <Info />
                </Column>
                <Column>
                    {/* <ProductoEnVenta />
                    <InfoVendedor /> */}
                    <Garantia />
                </Column>
            </Panel>
        </Container>
    )
}

const Info = () => {
    return (
        <Description>
            <h2>Descripción</h2>
            <p>
                <br />
                <span>BAIRES ROCKS - Instrumentos Musicales, Audio e Iluminación Profesional</span>
                <br />
                <br />
                <span>Pearl Export 22" Smokey Chrome</span>
                <br />
                <br />
                Código del producto: EXX725SBR/C21 <br />
                Modelo: Set completo <br />
                Configuración: Batería Fusion <br />
                Bombo: 22" x 18" <br />
                Tom: 10" x 7" <br />
                Tom: 12" x 8" <br />
                Tom base 1: 16" x 16" <br />
                Caja: 14" x 5,5" <br />
                Material casco: Álamo / Caoba <br />
                Herrajes cascos: Cromado <br />
                Superfície casco: Laminada <br />
                Color: Smokey Chrome <br /> <br />
                <span>¿Los productos cuentan con garantía?</span> <br />
                Todos nuestros productos cuentan con 6 meses de garantía Oficial del fabricante. <br /> <br />
                <span>¿Los productos publicados tienen stock?</span> <br />
                Todos nuestros productos tienen rotación constante de stock, para evitar posibles demoras te pedimos que consultes antes de comprar. <br /> <br />
                <span>¿Cuáles son los medios de pago disponibles?</span> <br />
                En nuestro showroom podes abonar con todos los medios de pago (tarjetas de crédito y débito, depósitos y transferencias bancarias, efectivo y mercado pago). Si realizas la compra por Mercado Libre, podrás pagar únicamente con Mercado Pago. <br /> <br />
                <span>¿Cuál es el tiempo estimado?</span> <br />
                Escogiendo Mercado Envíos, podrás estimar la fecha de recepción en la parte superior de esta publicación, ingresando tu código postal. En caso de acordarlo con nosotros, el tiempo estimado es de 72 a 96 horas hábiles. Luego de haber realizado tu compra, podrás realizar el seguimiento de tu envío por Mercado Envíos a través del link que aparecerá en tu compra. En caso de haberlo acordado con nosotros, te enviaremos un mail indicándote el transporte utilizado y el número de guía del envío. <br /> <br />
                Gracias por tu visita.
            </p>
        </Description>
    )
}

const Garantia = () => {
    return(
        <Section>
            <h5>Garantía</h5>
            <div>
                <span>
                    <p className="title">Compra Protegida con Mercado Pago</p>
                    <p className="description">Recibí el producto que esperabas o te devolvemos tu dinero</p>
                </span>
                <span>
                    <p className="title">Garantía del vendedor</p>
                    <p className="description">Garantía de fábrica: 6 meses</p>
                </span>
                <a href="#">Conocer más sobre garantía</a>
            </div>
        </Section>
    )
}