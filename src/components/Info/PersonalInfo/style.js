import styled from 'styled-components'

export const Conatiner=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Top=styled.div`


`
export const Image=styled.div`
width: 80px;
height: 80px;
border-radius: 8px;
background-color: #90d2de;
margin-bottom: 30px;
`
export const Name =styled.p`
font-size: 18px;
font-weight: 700;
margin-bottom: 0px;

`
export const SubName =styled.p`
font-size: 14px ;
font-weight: 600;
color: ${props=>props.theme.boldGrayText};
`
export const Midell=styled.div`
text-align: center;
margin-bottom: 30px;
`
export const Info=styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
align-items: center;
`
export const InfoDiv=styled.div`
display: flex;
flex-direction: column;
`


export const Bottom=styled.div`
display: flex;
justify-content:space-between;
align-items: center;
margin-bottom: 30px;
font-size: 14px;
`
export const BtnView=styled.div`
width: 130px;
text-align: center;
margin-right: 10px;
color: #ffff;
padding: 10px 10px;
border-radius: 8px;
background-color: ${props=>props.theme.blue};
`
export const BtnEdit=styled.div`
width: 130px;
text-align: center;
margin-left: 10px;
padding: 10px 10px;
border: 1px solid ${props=>props.theme.borderGray};
border-radius: 8px;
`
/***********BOX */
export const Box=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;

`


/********Gallary */
export const Gallary=styled.div`
border-radius: 8px;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
padding: 0 10px;
`
export const Photo=styled.div`
border-radius: 8px;
width: 100px;
height: 100px;
background-image: url(${props=>props.bg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
margin: 5px;
`
