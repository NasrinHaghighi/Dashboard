import styled from 'styled-components'
import ControllerImg from '../../images/controller.png'

export const Container =styled.div`
padding:50px 30px 0 30px;
max-width: 300px;
color: ${props=>props.theme.grayText};
position: relative;
@media (min-width: 1920px) {
    /* Styles for screens larger than or equal to 1200px */
   margin-left: 90px;
  }

`
export const Header =styled.div`
display: flex;
align-items: center;
margin-bottom: 100px;

`
export const ImgDiv =styled.div`
width: 60px;
height: 60px;
border-radius: 10px;
background-image: url(${ControllerImg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;


`
export const Name =styled.div`
display: flex;
flex-direction: column;
margin-left: 15px;
line-height: 0.5 px;


`
export const Title=styled.div`
font-size: 22px;
font-weight: 600;
color: ${props=>props.theme.boldGrayText};
`
export const Invite=styled.div`
font-size: 20px;
font-weight: 600;
color: ${props=>props.theme.boldGrayText};
position: absolute;
  bottom: 100px;
`