import React from 'react'
import {Container} from './style'
import Followers from './Followers/Followers'
import Performance from './Performance/Performance'
import Anallyes from './Anallyes/Anallyes'

function Status() {
  return (
    <Container>
        <Followers />
        <Performance/>
        <Anallyes />
    </Container>
  )
}

export default Status