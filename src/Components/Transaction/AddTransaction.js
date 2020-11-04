import React from 'react';
import styles from './AddTransaction.module.scss';

export const AddTransaction = ({text}) => {
    return (
        <>
            <h3>Add new transaction</h3>

            <form>
                <div className={styles['form-control']}>
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder={ "Enter text ..." } />
                </div>

                <div className={styles['form-control']}>
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, postive - income)
                    </label>

                    <input type="number" placeholder="Enter amount..." />
                </div>

                <button className={styles.btn}>Add transaction</button>
            </form>
        </>

    )
}