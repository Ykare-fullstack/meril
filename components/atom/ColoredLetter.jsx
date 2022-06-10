import styled from "styled-components"

const ColoredLetter = styled.span`
   color: var(--meril-color${props => `${props.index}`});
   font-family: 'PT Serif', serif;
   font-weight: bold;
   font-size: 40px;
`
export default  ColoredLetter

