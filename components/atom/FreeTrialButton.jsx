import styled from 'styled-components'

const FreeTrialButton = styled.button`
    background-color: ${prop => prop.inverted?"white":'var(--light-blue)'};
    color: ${prop => prop.inverted?'var(--light-blue)':'white'};
    border: solid 1px var(--light-blue);
    border-radius: var(--free-trial-button-radius);
    width:100%;
    font-size:18px;
    font-weight:bold;
    letter-spacing:0.05rem;
    padding: 1rem 2rem;
    z-index: 1;
    @media screen and (max-width: 600px){
        width: 200px;
        height: 50px;
        font-size:12px;
    }
`
export default FreeTrialButton