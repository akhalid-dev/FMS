import React, {useState} from 'react';

import styles from './AddTransaction.module.scss';

export const AddTransaction = ({message}) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <>
            <h3>{message}</h3>

            <form>
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