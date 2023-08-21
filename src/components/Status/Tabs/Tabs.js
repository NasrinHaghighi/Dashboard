import React ,{useState} from 'react'
import {Container, Cart, CardIcon,CardIconConatiner, Title, Pic} from './style'
import {BsCloudSleet, } from 'react-icons/bs'
import {RxActivityLog} from 'react-icons/rx'
import {AiOutlinePause} from 'react-icons/ai'
import Pic3 from '../../../images/pic3.jpeg'


function Tabs() {
  const [activeTab, setActiveTab] =useState(1)
  return (
    <Container>
       {tabArr.map((item)=>{
        return <Cart onClick={()=>setActiveTab(item.id)} key={item.id} className={activeTab === item.id ? 'active' :''}>
   <CardIconConatiner 
          className={activeTab === item.id ? 'active' :''} 
          active={activeTab === item.id ? 'active' :''}>

            <Pic className={activeTab === item.id ? 'active' :''} bg={Pic3}></Pic>
      <CardIcon
     className={activeTab === item.id ? 'active' :''}>
     {activeTab === item.id ? <AiOutlinePause />:  item.icon} 
  </CardIcon>
  </CardIconConatiner>
<Title className={activeTab === item.id ? 'active' :''}>{item.title}</Title>
        </Cart>
       })}
    </Container>
  )
}

export default Tabs










const tabArr=[
  {id:1, title:'Starnge Clouds Formation', subtit:'By Mike Taylor', icon:<BsCloudSleet />},
  {id:2, title:'Scheduled Posts', icon:<RxActivityLog />},
  {id:3, title:'Add Post', icon:<RxActivityLog />},
]