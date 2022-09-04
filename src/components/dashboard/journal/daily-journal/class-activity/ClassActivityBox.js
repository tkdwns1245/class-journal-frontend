import React,{useMemo} from 'react';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import Table from '../../../../common/Table';
import Checkbox from '@mui/material/Checkbox';
import { CenterFocusStrong } from '../../../../../../node_modules/@mui/icons-material/index';

const ClassActivityBoxBlock = styled.div`
    position: relative;
    display:flex;
    width: 30%;
    height: auto;
`;
const CheckboxCell = ({ value, myFunc }) =>{
  return <Checkbox onClick={()=>myFunc}></Checkbox>
}

const NameCell = ({value}) => {
  return <h3 style={{marginLeft : "20px"}}>{value}</h3>
}
const ClassActivityBox = () => {
    const columns = useMemo(
        () => [
          {
            accessor: "period",
            Header: "교시",
            style: {
              width: '100px',
              height: '50px'
              },
            Cell :  ({ cell: { value}}) => <NameCell value={value}/>
          },
          {
            accessor: "insideActivity",
            Header: "교내활동",
            style: {
              width: '100px',
              height: '50px'
              },
            Cell : ({ cell: { value ,myFunc = ()=>{console.log("aa");}} }) => <div value={value}/>,
          },
          {
            accessor: "outsideActivity",
            Header: "교외활동",
            style: {
              width: '100px',
              height: '50px'
              },
            Cell : ({ cell: { value ,myFunc = ()=>{console.log("aa");}} }) => <div value={value}/>,
          },
        ], 
        []
      );

      const data = useMemo(
        () =>
          Array(6)
            .fill()
            .map((item, index) => ({
              period: index+1 + '교시',
              insideActivity: '',
              outsideActivity: '',
              style: {textAlign:"center"}
            })),
        []
      );
    
    
    return(
        <ClassActivityBoxBlock>
            <Table columns={columns} data={data} style={{marginRight:10,width:'100%'}}/>
        </ClassActivityBoxBlock>
    )
}

export default ClassActivityBox;