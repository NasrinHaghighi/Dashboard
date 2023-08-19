import React from 'react'
import {Container,User,Follower,ItemDiv,Tag,FollowerImg} from './style'
import {FaUserAlt} from 'react-icons/fa'
const arr=[
    {id:1, name:'John' , icon:<FaUserAlt /> , color:'#fa896b'},
    {id:2, name:'Angle' , icon:<FaUserAlt /> , color:'#84e9f5'},
    {id:3, name:'Mikey' , icon:<FaUserAlt /> , color:'#4f46bb'},
    {id:4, name:'Sara' , icon:<FaUserAlt /> , color:'#EB5757'},
    {id:5, name:'Ali' , icon:<FaUserAlt /> , color:'#27AE60'}
]



function Followers() {
  return (
    <Container>
     <User></User>
     <Follower>
        {arr.map((item)=>{
            return <ItemDiv>
                <FollowerImg color={item.color}>
                    {item.icon}
                </FollowerImg>
                <Tag> {item.name}</Tag>
            </ItemDiv>
        })}
     </Follower>
    </Container>
  )
}

export default Followers