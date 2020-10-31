import React from 'react';
import styles from './IncomeExpenses.module.scss';

export const IncomeExpenses = () => {
    return ( 
        <React.Fragment>
            <div className={styles['inc-exp-container']}>
                <div className={styles['income']}>
                    <h4>
                        Income
                    </h4>
                    <p id="money-plus" className="money plus" >
                        +$0.00
                    </p>
                </div>

                <div>
                    <h4>
                        Expense
                    </h4>
                    <p id="money-plus" className="money minus" >
                        -$0.00
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}