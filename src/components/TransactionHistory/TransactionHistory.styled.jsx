import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  box-shadow: 3px 3px 2px #888888;
  border: 1px solid lightgrey;
  border-collapse: collapse;
  display: table;
  width: 50%;
  margin-left: 20px;
  align-items: center;
  /* table-layout: auto; */
`;

export const TableHead = styled.thead`
  background-color: #6bc5c5;
  border: 1px solid lightgrey;
  border-collapse: collapse;
`;

export const HeadTitle = styled.th`
  height: 50px;
  vertical-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #464444;
  padding: 10px;
  text-transform: uppercase;
  border: 1px solid lightgrey;
  border-collapse: collapse;
`;

export const TableBody = styled.tbody`
  /* border: 1px solid lightgrey; */
`;

export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: #d6eeee;
  }
  /* border: 1px solid lightgrey; */
`;

export const TableCell = styled.td`
  border: 1px solid lightgrey;
  padding: 0px;
  text-align: center;
  color: grey;
  height: 40px;
  vertical-align: center;
  border-collapse: collapse;
`;

export const TableCellType = styled.td`
  padding-left: 70px;
  padding-right: 40px;
  text-align: left;
  border: 1px solid lightgrey;
  text-transform: capitalize;
  color: grey;
  height: 40px;
  vertical-align: center;
  border-collapse: collapse;
`;
