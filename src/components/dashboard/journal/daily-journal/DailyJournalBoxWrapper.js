import React from 'react';
import styled from 'styled-components';

const DailyJournalBoxWarpperBlock = styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
    width: 100%;
    height: 100%;
`;

const DailyJournalBoxWarpper = ({children}) => {
    return(
        <DailyJournalBoxWarpperBlock>
            {children}
        </DailyJournalBoxWarpperBlock>
    )
}

export default DailyJournalBoxWarpper;