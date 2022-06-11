import styles from '../../styles/component/Banner.module.css'
import StyledMeril from '../mollecule/StyledMeril'
import SearchMenu from '../mollecule/SearchMenu'
import Navigation from './Navigation'

function Banner(){
    return(
        <header className={styles.banner}>
            <div className={styles.merilWrapper}>
                <StyledMeril />
            </div>
            <Navigation />
            <SearchMenu />
        </header>
    )
}
export default Banner