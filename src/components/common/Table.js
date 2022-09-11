import React from "react";
import { useTable } from "react-table";
import styled from 'styled-components';

const TableSheet = styled.table`
    background-color:white;
    border:none;
    border-radius: 10px;
    border-collapse:collapse;
    border-style:hidden;
    box-shadow: 3px 3px 10px ${props => props.theme.bgColor};
    td {
      border: 1px solid lightgrey;
    };
    th {
        border: 1px solid lightgrey;
    }
`;

const Table = ({columns, data, style}) =>{
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
    
    return (
        <TableSheet {...getTableProps()} style={style}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps([
                    {
                      className: column.className,
                      style: column.style,
                    },
                  ])}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps([
                      {
                        className: cell.column.className,
                        style: cell.column.style,
                      },
                    ])}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </TableSheet>
      );
}

export default Table;