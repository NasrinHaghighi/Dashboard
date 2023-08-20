import React from 'react'
import {Container} from './style'
import Followers from './Followers/Followers'
import Performance from './Performance/Performance'
import Anallyes from './Anallyes/Anallyes'
import Static from './Static/Static'

function Status() {
  return (
    <Container>
        <Followers />
        <Performance/>
        <Anallyes />
        <br/>
        <Static />
    </Container>
  )
}

export default Status