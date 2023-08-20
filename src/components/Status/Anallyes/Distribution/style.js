import styled from 'styled-components'

export const Box=styled.div`
background-color: #fff;
border-radius: 8px;
padding: 20px;
text-align: center;
`
export const Title=styled.div`
color: ${props=>props.theme.blue};
font-weight: 700;
font-size:${props=> props.value ? '12px': '14px'} ;
margin-bottom: 10px;
`
export const ImgDiv=styled.div`
margin-bottom: 20px;
`
export const Icons=styled.div`
margin: 10px 0;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 15px;
grid-row-gap: 15px;
`
export const Item=styled.div`
text-align: left;
`
export const Icon=styled.span`
margin-right:2px;
border-radius: 50%;
width: 25px;
height: 25px;
font-size: 12px;
padding: 3px 5px;

color:#fff;


`
export const Tit=styled.span`
font-size: 10px;
font-weight: 700;
`