import React from 'react'
import {Conatiner ,Top, Midell, Bottom, Image, Name, SubName, Info, InfoDiv,BtnView,BtnEdit, Box, Gallary, Photo} from './style'
import User from '../../../images/user.png'
import AddPhoto from '../AddPhoto/AddPhoto'
import Pic1 from '../../../images/pic1.jpeg'
import Pic2 from '../../../images/pic2.jpeg'
import Pic3 from '../../../images/pic3.jpeg'



function PersonalInfo() {
  return (
    <Conatiner>
        <Top>
            <Image> <img src={User} alt='user' width={80} height={80}/></Image>
        </Top>
        <Midell>
            <Name>AR Shakir</Name>
            <SubName>UI/UX Designer @ Redwhale</SubName>
        </Midell>
        <Info>
{arrInfo.map((item)=>{
    return <InfoDiv>
       <Name>{item.num}</Name>
            <SubName>{item.tit}</SubName>
    </InfoDiv>
})}
        </Info>
        <Bottom>
            <BtnView>View Profile</BtnView>
            <BtnEdit>Edit Profile</BtnEdit>
        </Bottom>
        <Box>
            <AddPhoto video='video'/>
            <AddPhoto />
        </Box>
        <Gallary>
{gallaryPic.map((item)=>{
   return <Photo bg={item.pic}></Photo>
})}
        </Gallary>
    </Conatiner>
  )
}

export default PersonalInfo





const gallaryPic=[
    {id:1 , pic:Pic1 },
   
    {id:3 , pic:Pic3 },
    {id:2 , pic:Pic2 },
    {id:5 , pic:Pic2 },
    {id:6 , pic:Pic3 },
    {id:4 , pic:Pic1 },
]



const arrInfo=[
    {id:1, tit:'Followers', num:'789K'},
    {id:2, tit:'Following', num:'298K'},
    {id:3, tit:'Followers', num:'100K'},
    
]