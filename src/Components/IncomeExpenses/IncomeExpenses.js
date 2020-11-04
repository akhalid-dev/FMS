import React from 'react';
import styles from './IncomeExpenses.module.scss';

export const IncomeExpenses = () => {
    return ( 
        <React.Fragment>
            <div className={styles['inc-exp-container']}>
                <div className={`${styles.lineBorder} ${styles.boxPadding}`}>
                    <h4> 
                        Income
                    </h4>
                    <p className={`${styles.money} ${styles.plus}`} >
                        +$0.00
                    </p>
                </div>

                <div className={styles.boxPadding}>
                    <h4 className={`${styles.h4}`}>
                        Expense
                    </h4>
                    <p className={`${styles.money} ${styles.minus}`}>
                        -$0.00
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}