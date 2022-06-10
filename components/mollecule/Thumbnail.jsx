import styles from '../../styles/component/Section2.module.css'
import Image from 'next/image'

function Thumbnail(props){
    return(
        <div className={styles.thumbnail}>
            <div className={styles.thumbnailImageWrapper}>
                <Image src={props.image}></Image>
            </div>
            <div className={styles.thumbnailTextWrapper}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <a href={props.link}>learn more...</a>
            </div>
        </div>
    )
}

export default Thumbnail