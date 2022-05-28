import styled, {css} from "styled-components";
import { FaMedal } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BsChatDotsFill } from "react-icons/bs"
import { FcClock } from "react-icons/fc"


const iconsCss = css`
width: 20px;
height: 20px;
`
const reputacionCss = css`
opacity: .9;
`

export const Container = styled.div`
padding: 32px 16px;
margin: 0 16px;
display: flex;
flex-direction: column;
border: 1px solid var(--border);
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom: none;

`
export const Title = styled.h5`
font-size: 18px;
line-height: 22.5px;
align-items: center;
color: var(--text1);
margin-bottom: 28px;

`
export const Card = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
>div{
    margin-left: 8px;
    >p{
        font-size: 16px;
        line-height: 20px;
        color: var(--text1);
    }
    >strong{
        font-size: 14px;
        color: var(--text2);
        font-weight: normal;
    }
    .platinum{
        color: var(--green);
    }
}
`
export const LocationIcon = styled(HiOutlineLocationMarker)`
opacity: .5;
margin-top: -1.3rem;
${iconsCss};
`
export const PlatinumIcon = styled(FaMedal)`
${iconsCss}
color: var(--green);
margin-top: -1rem;
opacity: .6;
`
export const Reputacion = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const Caja = styled.ol`
list-style: none;
width: 100%;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 0px;
padding: 0 4px;
>li{
    width: 100%;
    height: 8px;
    &:nth-child(1){
        background-color: var(--reputation1);
        ${reputacionCss};
    }
    &:nth-child(2){
        background-color: var(--reputation2);
        ${reputacionCss};
    }
    &:nth-child(3){
        background-color: var(--reputation3);
        ${reputacionCss};
    }
    &:nth-child(4){
        background-color: var(--reputation4);
        ${reputacionCss};
    }
    &:nth-child(5){
        background-color: var(--reputation5);
        ${reputacionCss};
    }
    &.active{
        height: 12px;
    }
}
`
export const Row = styled.div`
margin-top: 10px;
display: flex;
align-items: flex-start;
>div{
    width: 33%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    >strong{
        font-size: 24px;
        font-weight: normal;
        height: 30px;
    }
    >span{
        font-size: 12px;
        color: var(--text1);
    }
    position: relative;
    & + div{
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-50%);
            height: 36px;
            border-left: 1px solid var(--border);
        }
    }
}
`
export const SupportIcon = styled(BsChatDotsFill)`
${iconsCss};
`
export const ClockIcon = styled(FcClock)`
${iconsCss};
`
export const Link = styled.a`
margin-top: 24px;
color: var(--blue2);
text-decoration: none;
font-size: 14px;
line-height: 18.9px;
text-align: start;

`