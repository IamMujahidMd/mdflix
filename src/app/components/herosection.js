import herostyle from '../styles/herosection.module.css';
import styles from '../styles/common.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Herosection = ({ title, imageUrl }) => {
    return (
        <main className={herostyle.main_section}>
            <div className={styles.containers}>
                <div className={styles.grid_two_section}>
                    <div className={herostyle.hero_content}>
                        <h1>{title}</h1>
                        <p>
                            lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.
                            lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <Link href="/movie">
                            <button className={herostyle.btn}>Get Started</button>
                        </Link>
                    </div>
                    <div className={herostyle.hero_img}>
                        <Image src={imageUrl} alt="hero" width={500} height={500} />
                    </div>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1684074414">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>
        </main>
    );
};

export default Herosection;