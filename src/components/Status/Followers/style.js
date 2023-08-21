import styled from 'styled-components'
import UserIcon from '../../../images/user.png'


export const Container=styled.div`
display: flex;
justify-content: start;
margin-bottom: 100px;

`
export const User=styled.div`
margin-bottom: 7px;
  width: 50px; 
  height:50px; 
  background-image: url(${UserIcon});
  background-size: cover; 
  background-repeat: no-repeat;
  position: relative;
 &::before {
    content: "+";
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    font-weight: 600;
  padding: 1px 2px;
  width: 20px;
  height: 17px;
    background-color: ${props=>props.theme.blue};
    z-index: 1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

     
  }

`
export const Follower=styled.div`

display: flex;
justify-content: start;
margin-left: 10px;
`
export const ItemDiv=styled.div`
margin-left: 20px;
display: flex;
flex-direction: column;
align-items: center;

`
export const Tag=styled.div`
font-size: 12px;

`
export const FollowerImg=styled.div`
margin-bottom: 7px;
font-size: 30px;
border: 1px solid ${props=>props.color};
text-align: center;
border-radius: 50%;
width: 50px;
height: 50px;
color: ${props => props.color};
`

export const DivUser=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`