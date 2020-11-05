import React, {useContext} from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import { Transaction } from './Transaction.js';

import styles from './TransactionList.module.scss';

export const TransactionList = ({text}) => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);
    return (
        <>
            <h3 className={styles.h3}>
                 {text}
            </h3>
            
            <ul className={styles['transaction-list']}>

                {
                    transactions.map( transaction => (

                        <Transaction key={ transaction.id } transaction={transaction}/>
                      
                    ))
                }                
                
            </ul>
        </>
    );

}