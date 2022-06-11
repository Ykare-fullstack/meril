import styled from 'styled-components'

const SearchButton = styled.button`
    width:50px;
    margin-left: 15px;
    font-size:20px;
    color: white;
    padding:1rem;
    border:0;
    border-radius: var(--free-trial-button-radius);
    background-color: var(--light-blue);

    @media screen and (max-width: 600px){
        width: 40px;

        font-size:15px;
    }
`
export default SearchButton