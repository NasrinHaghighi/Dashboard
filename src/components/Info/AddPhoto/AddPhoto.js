import React from 'react'
import {Box, First,Sec, Third, Tit, SubTit } from './style'
import {BsCameraVideo ,BsCamera} from 'react-icons/bs'



function AddPhoto({video}) {
  return (
    <Box video={video ? 'video' : ''}>
         <First>x</First>
         <Sec>{video ? <BsCameraVideo/> : <BsCamera />}</Sec>
         <Third>
            <Tit>{video ? 'Video' : 'Photo'}</Tit>
            <SubTit>Click To add {video ? 'Video' : 'Photo'}</SubTit>
         </Third>
    </Box>
  )
}

export default AddPhoto