import  styles from '../../styles/component/Section4.module.css'
import FreeTrialButton from '../atom/FreeTrialButton'

function Section4(){
    return(
        <div className={styles.sectionWrapper}>
            <div className={styles.imagePortfolio}>
                <div className={styles.firstRow}>
                    <div className={styles.image1}></div>
                    <div className={styles.image2}></div>
                </div>
                
                <div className={styles.secondRow}>
                    <div className={styles.image3}></div>
                    <div className={styles.image4}></div>
                    <div className={styles.image5}></div>
                </div>
                
            </div>
            <div className={styles.sectionDescriptionWrapper}>
                <h2>Secure, Scalable And Supported</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor quis nostrud</p>
                <div className={styles.buttonWrapper}>
                <FreeTrialButton>
                    START FREE TRIAL
                </FreeTrialButton>
                </div>
                
            </div>
        </div>
    )
}
export default Section4