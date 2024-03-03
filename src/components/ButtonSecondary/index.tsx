import React from 'react';
import Link from 'next/link';
import styles from './ButtonSecondary.module.css'; 

export default function ButtonSecondary({ buttonText, link }) {
    return (
        <>
            <Link href={link}>
                <button className={styles.button}>
                    {buttonText}
                </button>
            </Link>
        </>
    );
};
