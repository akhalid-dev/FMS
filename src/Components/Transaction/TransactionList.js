import React from 'react';
import styles from './TransactionList.module.scss';
export const TransactionList = ({text}) => {
    return (
        <>
            <h3>
                 {text}
            </h3>

            <ul id="transactions" className={styles['transaction-list']}>
                <li className={styles.minus}>
                    Cash <span>-$300</span> 
                    <button className={styles['delete-btn']}>x</button>
                </li>
            </ul>
        </>
    );

}