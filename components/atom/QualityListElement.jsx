import styles from '../../styles/component/Section3.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


function QualityListElement(props) {
    return(
        <div className={styles.qualityListElement}>
            <div className={styles.qualityListElementIconFrame}>
                <div className={styles.qualityListElementIconShaper}>
                    <FontAwesomeIcon icon={faCheck} size='2x'/>
                </div>
            </div>
            <div className={styles.qualityListElementText}>   
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
export default QualityListElement