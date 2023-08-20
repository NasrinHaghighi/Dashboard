import React from 'react'
import { Box ,Title,ImgDiv, Icons, Item, Icon, Tit} from './style'
import Circle from '../../../../images/circle.png'
import {AiOutlineHeart} from 'react-icons/ai'
import {RiCodeView} from 'react-icons/ri'



function Distribution() {
  return (
    <Box>
        <Title>Last 30 Days Performance</Title>
        <ImgDiv><img src={Circle} /></ImgDiv>
        <Title value='value'>Events DISTRIBUTION</Title>
<Icons>
    {distArr.map((item)=>{
        return <Item>
            
            <Icon style={{ backgroundColor: item.color }}>{item.icon}</Icon>
            <Tit>{item.title}</Tit>
        </Item>
    })}
</Icons>
    </Box>
  )
}

export default Distribution


const distArr=[
    {id:1, title:'Likes', icon:<AiOutlineHeart/>, color:'#f29244'},
    {id:2, title:'Views', icon:<RiCodeView/>, color:'#83e8f4'},
    {id:3, title:'Follows', icon:<AiOutlineHeart/> , color:'#ffbc65'},
    {id:4, title:'Shares', icon:<AiOutlineHeart/>, color:'#52459e'},
]