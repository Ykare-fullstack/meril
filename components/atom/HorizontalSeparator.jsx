import styled from 'styled-components'

const HorizontalSeparator = styled.div`
    height:2px;
    border-radius:25px;
    width:${props => props.width};
    background-color:var(--light-blue);
    color: var(--light-blue);
    margin-top:10px;
`
export default HorizontalSeparator