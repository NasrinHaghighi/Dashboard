import styled from 'styled-components'


export const MainContainer =styled.div`

background-color:${props=>props.theme.mainBG} ;

width: 100wh;
`

export const Main =styled.div`
display: grid;
grid-template-columns: 1fr 2fr 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
`