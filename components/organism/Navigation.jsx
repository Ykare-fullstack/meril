import styles from '../../styles/component/Banner.module.css'
import NavBarButton from '../atom/NavBarButton'
function Navigation(){
    const navStore = [{
            title:"Home",
            destination:"/"
        },{
            title:"About us",
            destination:"/about"
        },{
            title:"Features",
            destination:"/features"
        },{
            title:"Fees",
            destination:"/fees"
        },{
            title:"Contact us",
            destination:"/contact"
        } 
    ]
    return(
        <div className={styles.navBarFrame}>
            {
                navStore.map((element,index) => (
                    <NavBarButton content={element.title} href={element.destination} key={index} />
                ))
            }
        </div>
    )
}
export default Navigation