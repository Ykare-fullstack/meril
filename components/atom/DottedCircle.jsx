import styled from 'styled-components'

const DottedCircle = styled.div`
    --d:4deg; /* distance between dashes */
    --n:30;   /* number of dashes */
    --c:var(--strong-salmon); /* color of dashes */
    width: 180px;
    height: 180px;
    display:inline-block;
    border-radius:50%;
    border:2px solid transparent; /* control the thickness of border*/
    background: 
        linear-gradient(var(--strong-orange),var(--strong-orange)) padding-box padding-box,
    repeating-conic-gradient(
      var(--c)    0 calc(360deg/var(--n) - var(--d)), 
      transparent 0 calc(360deg/var(--n)) 
  ) border-box;
`
export default DottedCircle