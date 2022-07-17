import React from 'react';
import styled from 'styled-components';

const DailyJournalControllBoxWrapperBlock = styled.div`
    position: relative;
    display:flex;
    justify-content: row;
    width: 100%;
    height: 100%;
`;

const DailyJournalControllBoxWrapper = ({children}) => {
    return(
        <DailyJournalControllBoxWrapperBlock>
            {children}
        </DailyJournalControllBoxWrapperBlock>
    )
}

export default DailyJournalControllBoxWrapper;