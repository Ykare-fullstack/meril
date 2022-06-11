import styles from '../../styles/component/Section1.module.css'
import FreeTrialButton from '../atom/FreeTrialButton'
import Image from 'next/image'
import mainImage from '../../public/mainImage.png'
function Section1(){
    return(
        <div className={styles.sectionWrapper}>
            <div className={styles.section1NoteWrapper}><p>Secure, Scalable And Supported</p></div>
            <div className={styles.section1TitleWrapper}><h1>Beautiful & Intuitive</h1></div>
            <div className={styles.section1ButtonWrapper}><FreeTrialButton inverted={false}>START FREE TRIAL</FreeTrialButton></div>
            <div className={styles.section1ImageWrapper}><Image src={mainImage} alt="Contenu décoratif de fond de lapremière section"/></div>
        </div>
    )
}
export default Section1