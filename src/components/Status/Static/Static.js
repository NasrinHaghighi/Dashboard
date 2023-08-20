import React from 'react'
import {Title} from '../Performance/style'
import {Box} from './style'
import Target from './Target/Target'
function Static() {
  return (
    <>
    <Title>Statistics</Title>
    <Box>
       <Target percentage={80}  />
       <Target  percentage={50} month='month'/>
    </Box>
    </>
  )
}

export default Static