import styles from "../../styles/component/Footer.module.css";
import FooterList from "../mollecule/FooterList";

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
            {lists.map((list,index)=>(
            <FooterList list={list} key={index}/>
            ))}
        </div>
    )
}
export default Footer