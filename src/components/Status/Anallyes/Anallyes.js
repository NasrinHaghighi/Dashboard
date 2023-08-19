import React from 'react'
import {AnallyesContainer, Left,Rigth,  } from './style'
import Circle from '../../../images/circle.png'
import LineChart from './LineChart/LineChart'
import Tabs from '../Tabs/Tabs'


function Anallyes() {
  return (
    <AnallyesContainer>
        <Left>
    <LineChart />
     <Tabs />
        </Left>
        <Rigth>
      <img src={Circle}/>
        </Rigth>
    </AnallyesContainer>
  )
}

export default Anallyes