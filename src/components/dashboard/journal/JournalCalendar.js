import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {commonColor} from '../../../lib/styles/commonColor.js';
import palette from '../../../lib/styles/palette';

const JournalCalendarBlock = styled.div`
    position: relative;
    display:flex;
    justify-content: row;
    width: 100%;
    height: 100%;
    background-color: ${commonColor.journalGreen};
`;
const JournalCalendar = ({children}) => {
    return(
        <JournalCalendarBlock>
            {children}
        </JournalCalendarBlock>
    )
}

export default JournalCalendar;