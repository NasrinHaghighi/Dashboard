import React from 'react'
import { MainContainer, Main, InnerContainer
} from './style'



function Layout({children}) {
  return (
    <MainContainer>
   <InnerContainer>
    <Main>{children}</Main>
    </InnerContainer>
         
      </MainContainer>
  )
}

export default Layout