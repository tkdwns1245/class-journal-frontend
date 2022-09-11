import React,{useMemo} from 'react';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import Table from '../../../../common/Table';
import Checkbox from '@mui/material/Checkbox';
import { CenterFocusStrong } from '../../../../../../node_modules/@mui/icons-material/index';
import AcitivityModal from './ActivityModal';
import Button from '../../../../common/Button';
import TableButtonCell from '../../../../common/TableButtonCell';
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
const ButtonCell = ({value,showModal}) => {
  return <Button color="white" style={{width : "100%",height:"100%"}} onClick={showModal}>{value}</Button>
}
const ClassActivityBox = ({
  showModal,
  form,
  isModalVisible,
  handleCancel,
  onChange,
  onSubmit,
  error
}) => {
    const columns = useMemo(
        () => [
          {
            accessor: "period",
            Header: "교시",
            style: {
              width: '20%',
              height: '50px'
              },
            Cell :  ({ cell: { value}}) => <NameCell value={value}/>
          },
          {
            accessor: "insideActivity",
            Header: "교내활동",
            style: {
              width: '40%',
              height: '50px',
              padding: '0px',
              },
            Cell : ({ cell: { value } }) => <TableButtonCell value={value} onClick={() => showModal(value.period,value.activityType)} color="white"/>,
          },
          {
            accessor: "outsideActivity",
            Header: "교외활동",
            style: {
              width: '40%',
              height: '50px',
              padding: '0px'
              },
            Cell : ({ cell: { value }}) => <TableButtonCell value={value} onClick={() => showModal(value.period,value.activityType)} color="white"/>,
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
              showModal: showModal,
              insideActivity: {
                peried:index+1,
                activityType:'inside',
                content:"aa"
              },
              outsideActivity: {
                peried:index+1,
                activityType:'outside',
                content:"bb"
              },
              style: {textAlign:"center"}
            })),
        []
      );
    
    
    return(
        <ClassActivityBoxBlock>
            <Table columns={columns} data={data} style={{marginRight:10,width:'100%'}}/>
            <AcitivityModal
              form={form}
              isModalVisible={isModalVisible}
              handleCancel={handleCancel}
              onChange={onChange}
              onSubmit={onSubmit}
              error={error}/>
        </ClassActivityBoxBlock>
    )
}

export default ClassActivityBox;