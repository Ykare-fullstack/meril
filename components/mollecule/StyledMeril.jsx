import styles from '../../styles/component/mollecule/styledMeril.module.css'
import ColoredLetter from '../atom/ColoredLetter'
function StyledMeril(){
    const textStore = "Meril".split('')
    return(
        <div className={styles.styledMerilWrapper}>
            {textStore.map((letter,index) => (
                <ColoredLetter index={index} key={index}>
                    {letter}
                </ColoredLetter>
            ))
            }
        </div>
    )
}
export default StyledMeril