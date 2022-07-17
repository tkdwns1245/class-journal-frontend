import React,{useMemo} from 'react';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';
import Table from '../../../../common/Table';


const JournalTableBoxBlock = styled.div`
    position: relative;
    display:flex;
    width: 80%;
    height: auto;
`;

const JournalTableBox = () => {
    const columns = useMemo(
        () => [
          {
            accessor: "name",
            Header: "Name",
          },
          {
            accessor: "check1",
            Header: "Check1",
          },
          {
            accessor: "check2",
            Header: "Check2",
          },
          {
            accessor: "check3",
            Header: "Check3",
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
            })),
        []
      );
    
    
    return(
        <JournalTableBoxBlock>
            <Table columns={columns} data={data}/>
        </JournalTableBoxBlock>
    )
}

export default JournalTableBox;