import React from 'react'
import { Container, Header, Name, Title , ImgDiv} from './style'
import Dashboard from './Dashboard/Dashboard'
import Posts from './Posts/Posts'


function Controller() {
  return (
    <Container>
        <Header>
            <ImgDiv></ImgDiv>
                   <Name>
                <Title>Redwhale</Title>
                <span>Growth & Marketing</span>
            </Name>
        </Header>
         <Dashboard />
         <Posts />
       <Posts fav='fav'/>
    </Container>
  )
}

export default Controller