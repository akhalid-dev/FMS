import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

import styles from './IncomeExpenses.module.scss';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    
    const income = amounts
        .filter(amount => amount > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = amounts
        .filter(amount => amount < 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    return ( 
        <React.Fragment>
            <div className={styles['inc-exp-container']}>
                <div className={`${styles.lineBorder} ${styles.boxPadding}`}>
                    <h4> 
                        Income
                    </h4>
                    <p className={`${styles.money} ${styles.plus}`} >
                        +${income}
                    </p>
                </div>

                <div className={styles.boxPadding}>
                    <h4 className={`${styles.h4}`}>
                        Expense
                    </h4>
                    <p className={`${styles.money} ${styles.minus}`}>
                        -${ Math.abs(expense) }
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}