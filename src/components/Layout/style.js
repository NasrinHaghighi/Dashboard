import styled from 'styled-components'


export const MainContainer =styled.div`

background-color:${props=>props.theme.mainBG} ;
padding: 0 30px 0 30px;
@media (min-width: 19200px) {
    /* Styles for screens larger than or equal to 1200px */
    max-width: 1920px;
  }
`
export const InnerContainer =styled.div`

`
export const Main =styled.div`

display: grid;
grid-template-columns: 1fr 1.5fr 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
`