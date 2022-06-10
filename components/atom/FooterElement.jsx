import styles from '../../styles/component/Footer.module.css'
function FooterElement(props){
    return(
        <li className={styles.footerListElement}>
            {props.element}
        </li>
    )
}
export default FooterElement