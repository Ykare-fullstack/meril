import  styles from '../../styles/component/Section3.module.css'
import Image from 'next/image'
import DottedCircle from '../atom/DottedCircle'
import Circle from '../atom/Circle'
import Triangle from '../atom/Triangle'
import QualityList from '../mollecule/QualityList'
import pencilLady2 from '../../public/pencilLady2.png'
function Section3(){

    return(
        <div className={styles.sectionWrapper}>
                <div className={styles.shapesWrapper}>
                <DottedCircle/>
                <Circle/>
                <Triangle/>
                </div>
                <QualityList/>
                <div className={styles.imageWrapper}>
                    <Image src={pencilLady2} alt="dessin d'une femme tenant un crayon géant avec un vase posé au sol" layout='fill' objectFit='contain'/>
                </div>
        </div>
    )
}
export default Section3