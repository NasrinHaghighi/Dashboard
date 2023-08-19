import React from 'react'

import {Container, Header, Name, Hi, Message, Icons, IconDIv} from './style'
import {AiOutlineMessage, AiOutlineBell} from 'react-icons/ai'
import PersonalInfo from './PersonalInfo/PersonalInfo'


function Info() {
  return (

    <Container>
        <Header>
           <Name>
            <Hi>Hi Shakir</Hi>
            <Message>Good Morning !</Message>
           </Name>
           <Icons>
            <IconDIv ><AiOutlineMessage /></IconDIv>
            <IconDIv className='bell'> <AiOutlineBell /></IconDIv>
             
           </Icons>

        </Header>
        <PersonalInfo />
    </Container>
  )
}

export default Info