import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState.js';

import styles from './Transaction.module.scss';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext( GlobalContext );
    const sign = transaction.amount > 0 ? '+' : '-';
    const money_style = transaction.amount > 0 ? styles.plus : styles.minus; 


    return (

        <li className={ `${money_style}` }>
            {transaction.text} <span>{sign}${ Math.abs(transaction.amount) }</span> 
            <button onClick={() => deleteTransaction(transaction.id)} className={styles['delete-btn']}>x</button>
        </li>
    )
}