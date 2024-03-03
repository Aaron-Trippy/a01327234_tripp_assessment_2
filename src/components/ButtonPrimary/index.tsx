import React from 'react';
import Link from 'next/link';
import styles from './ButtonPrimary.module.css'; 

export default function ButtonPrimary({ buttonText, link }) {
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
