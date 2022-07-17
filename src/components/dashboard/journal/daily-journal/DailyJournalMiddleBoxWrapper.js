import React from 'react';
import styled from 'styled-components';

const DailyJournalMiddleBoxWrapperBlock = styled.div`
    position: relative;
    display:flex;
    justify-content: row;
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const DailyJournalMiddleBoxWrapper = ({children}) => {
    return(
        <DailyJournalMiddleBoxWrapperBlock>
            {children}
        </DailyJournalMiddleBoxWrapperBlock>
    )
}

export default DailyJournalMiddleBoxWrapper;