import React from 'react'
import { Ul, LiItem , Icon, Name} from './style'
import {FaRegEnvelopeOpen} from 'react-icons/fa'
import {RxActivityLog} from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'



const arr=[
    {id:1, icon:<FaRegEnvelopeOpen/>,title:'Dashboard'},
    {id:2, icon:<RxActivityLog/>,title:'Activity'},
    {id:3, icon:<FiSettings/> ,title:'Setting'},


]
function Dashboard() {
  return (
   <Ul>
    
  {arr.map(item =>{
        return  <LiItem className={item.id === 1 ? 'active' : ''}>
            <Icon>{item.icon}</Icon>
            <Name>{item.title}</Name>
            </LiItem>
    })}   
   
   </Ul>
  )
}

export default Dashboard