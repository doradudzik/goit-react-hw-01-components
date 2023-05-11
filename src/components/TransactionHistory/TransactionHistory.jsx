import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={css.transactionHistory}>
    <thead className={css.columnDescription}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id} className={css.tableRow}>
          <td className={css.tableItem}>{transaction.type}</td>
          <td className={css.tableItem}>{transaction.amount}</td>
          <td className={css.tableItem}>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
