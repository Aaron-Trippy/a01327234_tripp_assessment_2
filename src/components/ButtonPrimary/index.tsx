import React from 'react';
import Link from 'next/link';
import styles from './ButtonPrimary.module.css'; 

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ buttonText, link }) => {
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

export default ButtonPrimary;
