import styles from '../../styles/component/Section2.module.css'
import TitleWrapper from '../atom/TitleWrapper'
import Thumbnail from '../mollecule/Thumbnail'
import Separator from '../atom/Separator'
import Image from 'next/image'
import thumbnail1 from '../../public/thumbnail1.png'
import thumbnail2 from '../../public/thumbnail2.png'
import thumbnail3 from '../../public/thumbnail3.png'

function Section2(){

    const thumbnailsData=[
    {
        title:"Asset Management",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempos incidunt ut",
        link:"#",
        image:thumbnail1
    },
    {
        title:"Dashboard",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempos incidunt ut",
        link:"#",
        image:thumbnail2
    },
    {
        title:"User Management",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempos incidunt ut",
        link:"#",
        image:thumbnail3
    }
    ]
    return(
        <div className={styles.sectionWrapper}>
            <div className={styles.sectionWrapperTop}>
                <TitleWrapper>
                    <h2>Our Product</h2>
                </TitleWrapper>
                <Separator/>
            </div>

                {thumbnailsData.map((thumbnail, index)=>(
                    <Thumbnail title={thumbnail.title} text={thumbnail.text} link={thumbnail.link} image={thumbnail.image} key={index}/>
                    ))
                }    

        </div>
    )
}
export default Section2