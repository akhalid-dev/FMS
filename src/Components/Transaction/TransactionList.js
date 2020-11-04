import React from 'react';
import styles from './TransactionList.module.scss';

export const TransactionList = ({text}) => {
    return (
        <>
            <h3 className={styles.h3}>
                 {text}
            </h3>

            <ul className={styles['transaction-list']}>
                <li className={styles.minus}>
                    Cash <span>-$300</span> 
                    <button className={styles['delete-btn']}>x</button>
                </li>

                <li className={styles.plus}>
                    Cash <span>+$1000</span> 
                    <button className={styles['delete-btn']}>x</button>
                </li>
            </ul>
        </>
    );

}