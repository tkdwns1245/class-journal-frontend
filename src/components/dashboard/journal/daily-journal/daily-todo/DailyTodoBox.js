import React,{useMemo} from 'react';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import Table from '../../../../common/Table';
import Checkbox from '@mui/material/Checkbox';
import { CenterFocusStrong } from '../../../../../../node_modules/@mui/icons-material/index';

const DailyTodoBoxBlock = styled.div`
    position: relative;
    display:flex;
    width: 100%;
    height: auto;
`;
const CheckboxCell = ({ value }) =>{
  return <Checkbox></Checkbox>
}

const DailyTodoBox = () => {
    const columns = useMemo(
        () => [
          {
            accessor: "check",
            Header: "체크",
            style: {
              width: '10%',
              height: '50px',
              textAlign:'center'
              },
            Cell :  ({ cell: { value}}) => <CheckboxCell value={value}/>
          },
          {
            accessor: "todo",
            Header: "해야할일",
            style: {
              width: '70%',
              height: '50px'
              },
            Cell : ({ cell: { value} }) => (<div >{value}</div>),
          },
          {
            accessor: "time",
            Header: "시간",
            style: {
              width: '25%',
              height: '50px'
              },
            Cell : ({ cell: { value} }) => (<div >{value}</div>),
          },
        ], 
        []
      );

      const data = useMemo(
        () =>
          Array(10)
            .fill()
            .map((item) => ({
                check: true,
                todo: '아침일찍 일어나기',
                time: '12:00 ~ 14:00',
                style: {textAlign:"center"}
            })),
        []
      );
    
    
    return(
        <DailyTodoBoxBlock>
            <Table columns={columns} data={data} style={{width:'100%'}}/>
        </DailyTodoBoxBlock>
    )
}

export default DailyTodoBox;