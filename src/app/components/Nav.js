import React from 'react';
import styles from "/src/app/styles/navbar.module.css"
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <div className=''>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/about">
                            About
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/contact">
                            contact
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/movie">
                            movie
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;