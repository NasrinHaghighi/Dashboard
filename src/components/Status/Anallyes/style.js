import styled from 'styled-components'


export const AnallyesContainer=styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 30px;
grid-row-gap: 0px;
height: 300px;

`
export const Left=styled.div`
padding: 0 0px;
`
export const LeftContent=styled.div`
display: grid;
grid-template-columns: 2fr;
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 10px;
`
export const Rigth=styled.div`
padding: 0 10px;
width: 250px;

`

