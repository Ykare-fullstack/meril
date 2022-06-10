import styles from '../../styles/component/Banner.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import FreeTrialButton from '../atom/FreeTrialButton'
import SearchButton from '../atom/SearchButton'

function SearchMenu(){
    return(
        <div className={styles.searchMenuWrapper}>
            <FreeTrialButton inverted={true}>
                START FREE TRIAL
            </FreeTrialButton>
            <SearchButton>
                <FontAwesomeIcon icon={faMagnifyingGlass} size='1x'/>
            </SearchButton>
        </div>
    )
}

export default SearchMenu