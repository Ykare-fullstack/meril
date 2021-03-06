import styles from '../../styles/component/Footer.module.css'
import FooterElement from '../atom/FooterElement'
function FooterList(props){
    return(
        <div className={styles.footerListWrapper}>
            <p>{props.list.title}</p>
            <ul className={styles.footerList}>
                {props.list.elements.map((element,index)=>(
                    <FooterElement element={element} key={index}/>
                ))}
            </ul>
        </div>
    )
}
export default FooterList