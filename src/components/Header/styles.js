import styled from "styled-components";


export const Container = styled.header`
width: 100vw;
height: 100px;
background-color: var(--yellow);



`


export const Wrapper = styled.nav`
max-width: 1184px;
height: 77px;
padding: 8px 8px;
margin: 0 auto;
img{
    width: 134px;
    height: 34px;
}


`
export const Row = styled.div`
max-width: 785px;
max-height: 36px;
margin: 0 auto;
>a{
    font-size: 14px;
    line-height: 22px;
    text-alling: left;
    text-decoration: none;
    color: #333333;
    opacity: 60%;
    padding: 3px 0;

    & + a{
        padding-left: 10px;
        margin-left: 10px;
    }
}

`