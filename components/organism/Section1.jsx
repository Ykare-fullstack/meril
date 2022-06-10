import styles from '../../styles/component/Section1.module.css'
import FreeTrialButton from '../atom/FreeTrialButton'
import Image from 'next/image'
import mainImage from '../../public/mainImage.png'
function Section1(){
    return(
        <div className={styles.sectionWrapper}>
            <div className={styles.section1NoteWrapper}><p>Secure, Scalable And Supported</p></div>
            <div className={styles.section1TitleWrapper}><h1>Beautiful & Intuitive</h1></div>
            <div><FreeTrialButton inverted={false}>START FREE TRIAL</FreeTrialButton></div>
            <Image src={mainImage} alt="Contenu décoratif de fond"/>
        </div>
    )
}
export default Section1