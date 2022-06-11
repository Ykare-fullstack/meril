import styled from 'styled-components'

const Triangle = styled.div`
    position: absolute;
    top: -90px;
    left: -20px;
    width: 180px;
    height: 180px;
    background-color: var(--light-yellow);
    clip-path: polygon(0% 100%,0% 0%,100% 100%)
`
export default Triangle