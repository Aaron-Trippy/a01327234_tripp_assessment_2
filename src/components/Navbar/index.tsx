import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; 

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Link href="/"><img src="/icons/logo.svg" alt="Logo" /></Link>
                    <Link href="/"><p className={styles.cc}>Culinary Compass</p></Link>
                </div>
                <div className={styles.navLinks}>
                    <Link href="/">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};