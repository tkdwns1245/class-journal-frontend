import React,{useMemo} from 'react';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import Table from '../../../../common/Table';
import Checkbox from '@mui/material/Checkbox';
import { CenterFocusStrong } from '../../../../../../node_modules/@mui/icons-material/index';

faker.locale = "ko";

const JournalTableBoxBlock = styled.div`
    position: relative;
    display:flex;
    width: 70%;
    height: auto;
`;

const CheckboxCell = ({ style,value, myFunc }) =>{
  return (
    <div style={style}>
      <Checkbox onClick={()=>myFunc}></Checkbox>
    </div>
  )
}

const NameCell = ({value}) => {
  return <h3 style={{marginLeft : "20px", textAlign:'center'}}>{value}</h3>
}
const JournalTableBox = () => {
    const columns = useMemo(
        () => [
          {
            accessor: "name",
            Header: "이름",
            style: {
              width: '25%',
              height: '50px'
              },
            Cell :  ({ cell: { value}}) => <NameCell value={value}/>
          },
          {
            accessor: "check1",
            Header: "수행평가1",
            style: {
              width: '25%',
              height: '50px'
              },
            Cell : ({ cell: { value ,myFunc = ()=>{console.log("aa");}} }) => <CheckboxCell value={value}
             style = {{textAlign:'center'}}
             myFunc = {myFunc}/>,
          },
          {
            accessor: "check2",
            Header: "수행평가2",
            style: {
              width: '25%',
              height: '50px'
              },
            Cell : ({ cell: { value ,myFunc = ()=>{console.log("aa");}} }) => <CheckboxCell value={value}
             style = {{textAlign:'center'}}
             myFunc = {myFunc}/>,
          },
          {
            accessor: "check3",
            Header: "수행평가3",
            style: {
              width: '25%',
              height: '50px',
              },
            Cell : ({ cell: { value ,myFunc = ()=>{console.log("aa");}} }) => <CheckboxCell value={value}
             style = {{textAlign:'center'}}
             myFunc = {myFunc}></CheckboxCell>
          },
        ], 
        []
      );

      const data = useMemo(
        () =>
          Array(22)
            .fill()
            .map(() => ({
              name: faker.name.lastName() + faker.name.firstName(),
              check1: 'true',
              check2: 'true',
              check3: 'true',
              style: {textAlign:"center"}
            })),
        []
      );
    
    
    return(
        <JournalTableBoxBlock>
            <Table columns={columns} data={data} style={{marginRight:25,width:'50%'}}/>
            <Table columns={columns} data={data} style={{marginRight:25,width:'50%'}}/>
        </JournalTableBoxBlock>
    )
}

export default JournalTableBox;