import styles from '../../styles/component/Section3.module.css'
import QualityListElement from "../atom/QualityListElement"
function QualityList(){
    const qualityList =[
        {
            title:"Asset Management",
            text:"Best in class asset management comes standard"
        },
        {
            title:"User Management",
            text:"Define  user groups, and optionally allow public user registration"
        },
        {
            title:"Dashboard",
            text:"Bug fixes, and security enhancements with one-click updating."
        },
        {
            title:"Account Management",
            text:"Lorem ipsum dolor sit amlet, consectetur adipiscing elit, sed do."
        }
    ]
    return(
        <div className={styles.qualityListWrapper}>
            {qualityList.map((quality,index)=>(
                <QualityListElement title={quality.title} text={quality.text} key={index}/>
            ))}
        </div>
    )
}
export default QualityList