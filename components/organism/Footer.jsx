import styles from "../../styles/component/Footer.module.css";
import FooterList from "../mollecule/FooterList";
import StyledMeril from "../mollecule/StyledMeril";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusG} from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'

function Footer(){
    const lists=[
        {
            title:'COMPANY',
            elements:["About","Security & Privacy","Careers","Blog"]
        },
        {
            title:'PRODUCT',
            elements:["Features","Explore","Pricing","Apps","For iOS"]
        },
        {
            title:'ABOUT',
            elements:["Stories","About Us","Blog","Careers"]
        },
        {
            title:'BITS',
            elements:["Help Center","Enterprise","Terms of Service","Privacy","Security"]
        }
    ]
    return(
        <div className={styles.footerWrapper}>
            <div className={styles.footerContactWrapper}>
                <StyledMeril />
                <span className={styles.legalText}>2018 © All rights reserved</span>
                <div className={styles.footerBrandContactWrapper}>
                    <div className={styles.footerIconWrapper}><FontAwesomeIcon icon={faFacebook} size='1x' color='blue'/></div>
                    <div className={styles.footerIconWrapper}><FontAwesomeIcon icon={faGooglePlusG} size='1x'color="red"/></div>
                    <div className={styles.footerIconWrapper}><FontAwesomeIcon icon={faTwitter} size='1x'color='var(--light-blue)'/></div>
                    <div className={styles.footerIconWrapper}><FontAwesomeIcon icon={faYoutube} size='1x'color="red"/></div>
                </div>
            </div>

                {lists.map((list,index)=>(
                <FooterList list={list} key={index}/>
            ))}
        </div>
    )
}
export default Footer