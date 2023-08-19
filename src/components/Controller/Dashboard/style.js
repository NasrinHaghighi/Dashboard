import styled from 'styled-components'

export const Ul=styled.ul`
list-style:none;
padding: 0;
font-size: 24px;
padding-bottom:30px;
border-bottom: 1px solid ${props=>props.theme.borderGray};
`
export const LiItem=styled.li`
margin-bottom: 45px;
&.active{
    color:${props=>props.theme.black}
}
`
export const Icon=styled.span`
margin-right: 15px;
`
export const Name=styled.span`

`