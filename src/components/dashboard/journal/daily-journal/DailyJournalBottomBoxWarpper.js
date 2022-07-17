import React from 'react';
import styled from 'styled-components';

const DailyJournalBottomBoxWarpperBlock = styled.div`
    position: relative;
    display:flex;
    justify-content: row;
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const DailyJournalBottomBoxWarpper = ({children}) => {
    return(
        <DailyJournalBottomBoxWarpperBlock>
            {children}
        </DailyJournalBottomBoxWarpperBlock>
    )
}

export default DailyJournalBottomBoxWarpper;