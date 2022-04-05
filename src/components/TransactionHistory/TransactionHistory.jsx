import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHead,
  HeadTitle,
  TableBody,
  TableCellType,
  TableRow,
  TableCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionsTable>
      <TableHead>
        <TableRow>
          <HeadTitle>Type</HeadTitle>
          <HeadTitle>Amount</HeadTitle>
          <HeadTitle>Currency</HeadTitle>
        </TableRow>
      </TableHead>

      <TableBody>
        {transactions.map(transaction => (
          <TableRow key={transaction.id}>
            <TableCellType>{transaction.type}</TableCellType>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>{transaction.currency}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
