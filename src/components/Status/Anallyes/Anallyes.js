import React from 'react'
import {AnallyesContainer, Left, LeftContent, Rigth,  } from './style'
import {Title} from '../Performance/style'
import Circle from '../../../images/circle.png'
import LineChart from './LineChart/LineChart'
import Tabs from '../Tabs/Tabs'


function Anallyes() {
  return (
    <AnallyesContainer>
    
        <Left>
            <Title>Analitics</Title>
          <LeftContent>
            <LineChart />
            <Tabs />
     </LeftContent>
        </Left>
        <Rigth>
        <Title>Events Distribution</Title>
        <img src={Circle}/>
        </Rigth>
    </AnallyesContainer>
  )
}

export default Anallyes