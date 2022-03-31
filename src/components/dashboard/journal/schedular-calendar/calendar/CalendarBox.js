import React from 'react';
import styled from 'styled-components';

const CalendarBoxBlock = styled.div`
    position: relative;
    width: 75%;
    height: 100%;
    display:flex;
    flex-direction: column;
`;

const CalendarBox = ({children}) => {
    return(
        <CalendarBoxBlock>
            {children}
        </CalendarBoxBlock>
    )
}

export default CalendarBox;