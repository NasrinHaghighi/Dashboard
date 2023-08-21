import styled from 'styled-components'


export const Container=styled.div`
max-width: 450px;
display: flex;
justify-content: space-between;
`
export const Cart=styled.div`
background-color: #fff;
margin: 0 5px;
width: 130px;
transition:all  0.5s ease-in-out;
text-align: center;
border-radius: 8px;
padding: 20px;
&.active{
    background-color:${props=>props.theme.purple}; 
    width: 180px;
    text-align: left;
}

`
export const CardIconConatiner=styled.div`
margin-bottom:25px;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.3s ease-in-out;
&.active{
width: 100%;
    
    justify-content: space-between;
}

`
export const CardIcon=styled.div`
color: #fff;
width: 30px;
height: 40px;
background-color: ${props=>props.theme.ligthBlue};
border-radius:40%;
display: flex;
justify-content: center;
align-items: center;


&.active{
    background-color:${props=>props.theme.darkPurple}; 
   
}
`
export const Title=styled.div`
font-size: 13px;
transition: all 0.3s ease-in-out;
&.active{
    font-weight: 600;
}
`

export const Pic=styled.div`
display: none;
width: 50px;
height: 50px;
opacity: 0;
border-radius: 8px;
background-image: url(${props => props.bg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
transition: all 0.3s ease-in-out;
&.active{
    opacity: 1;
    width: 50px;
height: 50px;
   display: block;
   background-color: blanchedalmond;
}
`
