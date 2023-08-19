import styled from 'styled-components'



export const Box=styled.div`
background-color: ${props=>props.video ? '#f2e8ff' : '#fef3f1'};
color:${props=>props.video ? '#555d8e' : '#ab6656'};
width: 180px;
height: 200px;
margin: 0 10px;
border-radius: 8px;
padding: 10px;
display: grid;

grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;

`
export const First=styled.div`
text-align: right;
`
export const Sec=styled.div`
font-size:40px;
`
export const Third=styled.div``
export const Tit=styled.p`
font-weight:700;
font-size: 28px;
margin-bottom: 0;
`
export const SubTit=styled.p`
font-size: 14px;
`


