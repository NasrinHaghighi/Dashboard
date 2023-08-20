import styled from 'styled-components'



export const Box=styled.div`
width: 350px;

border-radius: 8px;
background-color: ${props=>props.month ? '#52459f' :'#ffff'};
color:  ${props=>props.month ? '#f6f5f8' :'#080808'};;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`
export const Info=styled.div`

`
export const Title=styled.div`
font-size: 18px;
font-weight: 700;
margin-bottom: 10px;
`
export const Subtit=styled.div`
font-size:14px;

`
