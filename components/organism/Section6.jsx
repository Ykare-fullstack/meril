import styles from '../../styles/component/Section6.module.css'
import  Image from 'next/image'
import logoInvision2 from '../../public/logoInvision2.png'
import smillingWoman from '../../public/smillingWoman.jpg'
function Section6(){
    return(
        <div className={styles.sectionWrapper}>
            <div className={styles.contentWrapper}>
                <div className={styles.textWrapper}>
                    <p>Meril has everything you need to bring ideas to life and transform how you create digital products. Placing the power of design in everyone's hands</p>
                    <Image src={logoInvision2}  width={200} height={100}/>
                </div>
                <div className={styles.imageWrapper}>
                    <Image src={smillingWoman} layout='fill'/>
                </div>
            </div>
        </div>
    )
}
export default Section6