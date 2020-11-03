import React from 'react';
import styles from './Balance.module.scss';

export const Balance = () => {
    return (
        <>
            <h4 className={styles.h4}>
                Your Balance
            </h4>

            <h1 id="balance" className={styles.h1}>
                $0.00
            </h1>
        </>
    )
}

