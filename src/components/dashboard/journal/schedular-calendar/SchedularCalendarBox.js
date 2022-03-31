import React from 'react';
import styled from 'styled-components';

const JournalCalendarBoxBlock = styled.div`
    position: relative;
    display:flex;
    justify-content: row;
    width: 100%;
    height: 100%;
`;

const JournalCalendarBox = ({children}) => {
    return(
        <JournalCalendarBoxBlock>
            {children}
        </JournalCalendarBoxBlock>
    )
}

export default JournalCalendarBox;