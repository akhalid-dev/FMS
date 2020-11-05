import React, { useState, useContext } from 'react';
import { GlobalContext} from '../../Context/GlobalState.js';

import styles from './AddTransaction.module.scss';
import { uuid } from 'uuidv4';


export const AddTransaction = ({message}) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const new_transaction = {
            id: uuid(),
            text: text,
            amount: parseFloat(amount)

        }
        console.log(new_transaction);
        addTransaction(new_transaction);
    }
    return (
        <>
            <h3>{message}</h3>

            <form onSubmit={onSubmit}>
                <div className={styles['form-control']}>
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder={ "Enter text ..." } />
                </div>

                <div className={styles['form-control']}>
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, postive - income)
                    </label>

                    <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter amount..." />
                </div>

                <button className={styles.btn}>Add transaction</button>
            </form>
        </>

    )
}