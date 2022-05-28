import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 12px;

`

export const Panel = styled.div`
background-color: var(--white);
box-shadow: var(--panel);
display: grid;
grid-template-columns: 67fr 33fr;
`

export const Column = styled.div`
`

export const Galeria = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 500px;
weight: 446px;

>img{
    height: 75%;
}
`

export const Description = styled.div`
border-top: 1px solid var(--border);
width: 88%;
margin: 0 auto;
padding: 40px 0;
>h2{
    color: var(--text1);
    font-size: 24px;
    margin-bottom: 32px;
}

>p, span{
    font-size: 20px;
    color: var(--text3);
    line-height: 27px;
}


`

export const Section = styled.div`
padding: 32px 16px;
margin: 0 16px;
border: 1px solid var(--border);
border-bottom: none;

>h5{
    font-size: 18px;
    line-height: 22.5px;
    margin-bottom: 28px;
    color: var(--text1);
}

>div{
    display: flex;
    flex-direction: column;
    line-height: 18.9px;

    >span{
        margin-bottom: 24px;
    }
    .title{
        font-size: 16px;
        color: var(--text1);
        line-height: 21.6px;
        margin-bottom: 12px;
    }
    .description{
        font-size: 14px;
        line-height: 18.9px;
        color: var(--text2);
    }
    >a{
        font-size: 14px;
        line-height: 18.9px;
        color: var(--blue2);
        text-decoration: none;
    }
}

`