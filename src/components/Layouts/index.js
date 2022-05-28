import React from "react";
import { Header } from "../Header";
import { List } from "../List";
import { Producto } from "../Producto";
import { Container, Wrapper } from "./styles";


export const Layouts = () => {
    return (
        <Container>
            <Header />
            <Wrapper>
                <List />
                <Producto />
            </Wrapper>
        </Container>
    )
}