import styled from 'styled-components'

export const Conatiner=styled.div`
margin-bottom: 30px;

`
export const Title=styled.h6`
font-weight: 700;
margin-bottom: 20px;
`

export const CardWrapper=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const Card=styled.div`
width: 210px;
padding: 10px;
height: 80px;
border-radius: 10px;
background-image: url(${props => props.bg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;

line-height: 1;
`
export const Tit=styled.p`
font-weight: 600;
color: ${props=>props.theme.boldGrayText};
`
export const Value=styled.p`
color: #fff;
`