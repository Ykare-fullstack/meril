import styles from '../../styles/component/Section5.module.css'
import HorizontalSeparator from '../atom/HorizontalSeparator'
import FreeTrialButton from '../atom/FreeTrialButton'


function ThumbnailTemplate() {
    return(<div className={styles.TTWrapper}>
            <div className={styles.TTTopWrapper}>
                <div className={styles.TTTextWrapper}>
                    <div className={styles.TTSeparatorWrapper}>
                    <HorizontalSeparator width="35px" />
                    <HorizontalSeparator width="20px" />
                    </div>
                    
                    <p>Secure, Scalable And Supported</p>
                    <h2>Beautiful & Intuitive</h2>
                </div>
                <div className={styles.TTButtonWrapper}>
                    <FreeTrialButton>START FREE TRIAL</FreeTrialButton>
                </div>
            </div>
            <div className={styles.TTImageHolder}></div>
        </div>)
}
export default ThumbnailTemplate