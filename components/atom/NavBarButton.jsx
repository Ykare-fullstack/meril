import styles from '../../styles/component/Banner.module.css'
import { useRouter } from 'next/router'

function NavBarButton(props){
    const router = useRouter()
    console.log('comparaison pour',props.content)
    console.log(props.href)
    console.log(router.asPath)
    const style = {
        color: router.asPath === props.href ? 'var(--light-blue)' : 'black',
        borderBottom: router.asPath === props.href ? 'solid 2px var(--light-blue)' : 'black'
    }
    const handleClick = (e) => {
        e.preventDefault()
        router.push(props.href)
      }
    
    return(
        <button onClick={handleClick} style={style} className={styles.navBarButton}>
            {props.content}
        </button>
    )
}
export default NavBarButton