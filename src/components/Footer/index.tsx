import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css'; 

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Link href="https://github.com/cartervandekamp/3109-final-project"><p className={styles.link}>Culinary Compass</p></Link>
            <p>&copy; Aaron Tripp, MDIA-3109</p>
        </div>
    );
};