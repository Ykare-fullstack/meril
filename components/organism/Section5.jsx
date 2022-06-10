import styles from '../../styles/component/Section5.module.css'
import ThumbnailTemplate from '../mollecule/ThumbnailTemplate'
import Image from 'next/image'
import logoSketch from '../../public/logoSketch.png'
import logoFigma from '../../public/logoFigma.png'
import logoInvision from '../../public/logoInvision.png'
import logoMistery from '../../public/logoMistery.png'
function Section5(){
    return(
        <div className={styles.sectionWrapper}>
            <div className={styles.background}></div>
            <div className={styles.logoFigma}><Image src={logoFigma}/></div>
            <div className={styles.logoInvision}><Image src={logoInvision}/></div>
            <div className={styles.logoMistery}><Image src={logoMistery}/></div>
            <div className={styles.logoSketch}><Image src={logoSketch}/></div>
            <ThumbnailTemplate />

        </div>
    )
}
export default Section5