import React from 'react';
import Link from 'next/link';
import styles from './Card.module.css'; 
import Spline from "@splinetool/react-spline";
import ButtonPrimary from '@/components/ButtonPrimary';

const Card: React.FC<CardProps> = ({ title, desc, spline, cta }) => {
    return (
        <>
            <main>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                    </div>
                    <div className={styles.spline} >
                        <Spline scene={spline} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                    </div>
                    <div className={styles.cta}>
                        <ButtonPrimary buttonText={cta} link="/" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Card;
