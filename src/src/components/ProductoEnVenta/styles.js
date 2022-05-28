import styled, {css} from "styled-components"
import { AiOutlineHeart } from "react-icons/ai";
import { FaShuttleVan } from "react-icons/fa";
import { GiRibbonMedal, GiTrophyCup } from "react-icons/gi";
import { BsShieldCheck } from "react-icons/bs";


const iconsStyle = css`
width: 20px;
height: 20px;
opacity: .6;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 32px 16px;
margin: 16px;
border: 1px solid var(--border);
border-radius: 5px;
`
export const Estado = styled.div`
font-size: 14px;
margin-bottom: 10px;
color: var(--text2);
`
export const Row = styled.div`
display: flex;
justify-content: space-between;
>h1{
    width: 100%;
    font-size: 22px;
    line-height: 25.96px;
    color: var(--text1);
    font-weight: 550;
}
`
export const HeartIcon = styled(AiOutlineHeart)`
width: 28px;
height: 28px;
color: var(--blue1);
cursor: pointer;
margin-left: 16px;
` 
export const Price = styled.div`
font-size: 36px;
line-height: 36px;
padding: 24px 0;
font-weight: inherit;
color: var(--text1);
`
export const Card = styled.div`
display: flex;
margin-buttom: 2rem;
>div{
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    .title{
        font-size: 16px;
        line-height: 20.8px;
        opacity: .9;
        margin-top: 5px;
        color: var(--green);
    }
    .detalle{
        margin-top: 5px;
        font-size: 14px;
        color: var(--text2);
    }
    .costoEnvio{
        margin-top: 5px;
        font-size: 14px;
        text-decoration: none;
        color: var(--blue3);
        line-height: 18.9px;
    }
}
`
export const CheckIcon = styled(FaShuttleVan)`
width: 20px;
height: 20px;
color: var(--green);
opacity: .7;
margin-top: 5px;
`
export const Color = styled.div`
font-size: 16px;
color: var(--text1);
padding-top: 1rem;
`

export const Stock = styled.div`
margin-top: 3rem;
display: flex;
justify-content: start;
align-items: center;
color: var(--text1);
font-size: 16px;
>strong{
    margin: 0 .1rem;
`
export const Cantidad = styled.div`
margin-top: 3rem;
display: flex;
justify-content: start;
align-items: center;
color: var(--text1);
font-size: 16px;
>span{
    color: var(--text2);
    margin: 0 .5rem;
}
>strong{
    margin: 0 .5rem;
}
>input{
    width: 20px;
    color: var(--blue1);
    border-left: 1px solid var(--blue2);
    border-right: 1px solid var(--blue2);
    outline: 0;
}
`
export const ButtonCart = styled.div`
margin-top: 16px;
display: flex;
flex-direction: column;
`
export const Button = styled.div`
margin-top: 16px;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
border-radius: 4px;
padding: 12px 10px;
outline: 0;
cursor: pointer;
transition: all 300ms ease-in-out;
&.text{
    background-color: var(--blue3);
    color: var(--white);
    font-size: 16px;
}
&.text:hover{
    background-color: var(--blue2);
}
`
export const Beneficios = styled.div`
margin-top: 16px;
list-style: none;
display: flex;
flex-direction: column;
>li{
    display: flex;
    margin-top: 1rem;
    p{
        margin-left: 10px;
        font-size: 14px;
        color: var(--blue3);
        span{
            color: var(--text2);
        }
    }
}
`
export const ShieldIcon = styled(BsShieldCheck)`
width: 30px;
height: 20px;
opacity: .6;
`
export const CupIcon = styled(GiTrophyCup)`
${iconsStyle};
`
export const MedalIcon = styled(GiRibbonMedal)`
${iconsStyle};
`