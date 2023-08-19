import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion';


export const AccordionS=styled(Accordion)`
   padding-bottom: 30px;
   border-bottom:1px solid ${props=>props.theme.borderGray};
   &.last{
    border: none;
   }

`
export const AccordionItemS=styled(Accordion.Item)`
    border: none !important;
`
export const AccordionHeader=styled(Accordion.Header)`
    border-bottom: none !important;
 
`
export const AccordionBody=styled(Accordion.Body)`
    font-size: 20px;
color: ${props=>props.theme.boldGrayText};
`
export const Tit=styled.span`
    margin-left: 12px;
&.bag{
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 18px;
    border:1px solid ${props=>props.theme.borderGray}
}
`




