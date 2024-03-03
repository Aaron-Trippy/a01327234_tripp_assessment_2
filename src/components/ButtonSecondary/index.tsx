import React from 'react';
import Link from 'next/link';
import styles from './ButtonSecondary.module.css'; 

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ buttonText, link }) => {
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

export default ButtonSecondary;
