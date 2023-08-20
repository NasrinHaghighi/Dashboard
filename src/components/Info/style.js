import styled from 'styled-components'


export const Container =styled.div`
padding:50px 10px 50px 50px;
max-width: 300px;

`
export const Header =styled.div`
margin-bottom: 70px;
display: flex;
justify-content: space-between;

`
export const Name =styled.div`



`
export const Hi =styled.div`
font-size:20px ;
font-weight: 700;

`
export const Message =styled.div`
color: ${props=>props.theme.boldGrayText};


`
export const Icons =styled.div`
font-size: 24px;
display: flex;
justify-content: space-between;

`
export const IconDIv =styled.div`

padding: 5px 8px;
border-radius: 8px;
margin: 0 5px ;
color: ${props=>props.theme.boldGrayText};
position: relative;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
&.bell{
    &::after{
width: 8px;
height: 8px;
content: '';
position: absolute;
background-color:${props=>props.theme.pink};
right: 13px;
top:12px;
border-radius:50%;


    }
}
`