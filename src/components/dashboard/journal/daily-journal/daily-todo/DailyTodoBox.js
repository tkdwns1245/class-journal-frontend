import React from 'react';
import styled from 'styled-components';

const DailyTodoBoxBlock = styled.div`
    position: relative;
    display:flex;
    width: 100%;
    height: auto;
`;

const DailyTodoBox = ({children}) => {
    return(
        <DailyTodoBoxBlock>
            {children}
        </DailyTodoBoxBlock>
    )
}

export default DailyTodoBox;