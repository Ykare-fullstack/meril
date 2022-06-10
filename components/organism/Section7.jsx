import styles from '../../styles/component/Section7.module.css'
import {useState} from'react'

function Section7(){
    const [email,setEmail] = useState('Write Your Email')
    console.log(email)
    return(
        <div className={styles.sectionWrapper}>
            <p>Ready to get started?</p>
            <div className={styles.inputArea}>
                <input type='textearea' id='emailInput' value={email} onChange={(e) =>
                                setEmail(e.target.value)
                            } className={styles.userEmailInput}></input>
                <label htmlFor="emailInput" className={styles.inputLabel}>
                    <button type='submit'
                            maxLength="500"
                            className={styles.submitEmailButton}>
                                
                        GET STARTED
                            
                    </button>
                </label>
            </div>
        </div>
    )
}
export default Section7