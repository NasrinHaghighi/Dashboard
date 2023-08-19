import React from 'react'
import { MainContainer, Main } from './style'



function Layout({children}) {
  return (
    <MainContainer>
   
         
    <Main>{children}</Main>
    
      </MainContainer>
  )
}

export default Layout