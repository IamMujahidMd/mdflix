import Image from 'next/image';
import styles from '../styles/common.module.css';
import Link from 'next/link';


const MovieCard = (curElem) => {

    const { id, image, title, synopsis } = curElem.jawSummary;
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={300} height={300} />
                </div>
                <div className={styles.card_content}>
                    <h2 className={styles.card_title}>{title.substring(0,20)}</h2>
                    <p className={styles.card_text}>{`${synopsis.substring(0,70)} ...` }</p>
                    <Link href={`/movie/${id}`}>
                        <button className={styles.btn}>Read More</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MovieCard;