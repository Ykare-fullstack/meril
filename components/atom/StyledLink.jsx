
import { useRouter } from 'next/router'

function StyledLink(props){
    const router = useRouter()
    const style = {
      marginRight: 10,
      borderBottom: router.asPath === props.href ?'solid 2px var(--light-blue)': "none",
      color: router.asPath === props.href ? 'var(--light-blue)' : 'black',
    }
    const handleClick = (e) => {
      e.preventDefault()
      router.push(props.href)
    }
    return(
        <a href={props.href} onClick={handleClick} style={style}>
            {props.children}
        </a>
    )
}
export default StyledLink