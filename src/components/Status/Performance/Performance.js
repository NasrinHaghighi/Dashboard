import React from 'react'
import {Conatiner, Title, CardWrapper,Card, Tit, Value} from './style'
import Bg1 from '../../../images/status1.png'
import Bg2 from '../../../images/status2.png'
import Bg3 from '../../../images/status3.png'
const arr =[
    {id:1, name:'VIEWS', number:'7,482,895' , img:Bg1},
    {id:2, name:'Followers', number:'7,482,895' , img:Bg2},
    {id:3, name:'Likes', number:'7,482,895' , img:Bg3}

]
function Performance() {
  return (
    <Conatiner>
        <Title>30 Days Performance</Title>
        <CardWrapper>
{arr.map((item)=>{
    return <Card bg={item.img}>
        <Tit>{item.name}</Tit>
        <Value>{item.number}</Value>
    </Card>
})}
</CardWrapper>
    </Conatiner>
  )
}

export default Performance