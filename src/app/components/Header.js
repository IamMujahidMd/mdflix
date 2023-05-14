import Link from "next/link";
import Image from "next/image";
import styles from "/src/app/styles/navbar.module.css"
import React from 'react';
import Nav from "./Nav";

const Header = () => {
    return (

        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <Image src="/logo1.png" alt="logo" width={150} height={100} />
                </Link>
            </div>
            
            <Nav/>
        </header>

    );
};

export default Header;