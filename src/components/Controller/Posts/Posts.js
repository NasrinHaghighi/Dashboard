import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import {AccordionS, AccordionItemS, AccordionHeader, AccordionBody, Tit} from './style'
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import {BiTimeFive, BiBookmarkMinus} from 'react-icons/bi'

function Posts({fav}) {
  return (
    <AccordionS defaultActiveKey="0" className={fav ? 'last' : ''}>
      <AccordionItemS eventKey="0">
        <AccordionHeader>{fav ? 'Favorite Users' :'Posts'} </AccordionHeader>
        <AccordionBody>
        {fav ? '' : <IoCheckmarkDoneCircleOutline />}
       
         <Tit>{fav ? 'Johnny' :'Published'}</Tit>
        </AccordionBody>
        <AccordionBody>
        {fav ? '' : <BiTimeFive />}
        
         <Tit>{fav ? 'Angela' :'Today Scheduled'}</Tit>
        {fav ? '' : <Tit className='bag'>+2</Tit>} 
        </AccordionBody>
        <AccordionBody>
        {fav ? '' :  <BiBookmarkMinus />}
       
         <Tit>{fav ? 'Mikey' :'Bookmarks'}</Tit>
        
        </AccordionBody>
      </AccordionItemS>
    
    </AccordionS>
  )
}

export default Posts