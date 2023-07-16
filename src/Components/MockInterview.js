import React from 'react';
import SidebarHeaderContainer from './SidebarHeaderContainer';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import "../Styles/MockInterview.css"

function DenseTable() {
  const rows = [
    { name: 'First Mock', date: '02/05/2023', score: '', feedback: '' },
    { name: 'Second Mock', date: '21/06/2023', score: '0.80', feedback: 'Answers are below average need improvement' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table size="small" padding="dense">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>Feedback</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.score}</TableCell>
              <TableCell>{row.feedback}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function MockInterview() {
  return (
    <div className='mockinterview-container'>
      <SidebarHeaderContainer headerTitle="Mock Interview" />
      <div className="table-container">
        <DenseTable />
      </div>
      <div className="pagination-container">
        Rows per page:
        <select>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
        1-2 of 2
      </div>
    </div>
  );
}

export default MockInterview;
