import React from 'react';
import styled from 'styled-components';

const ClassActivityBoxBlock = styled.div`
    position: relative;
    display:flex;
    width: 20%;
    height: auto;
`;

const ClassActivityBox = ({children}) => {
    return(
        <ClassActivityBoxBlock>
            {children}
        </ClassActivityBoxBlock>
    )
}

export default ClassActivityBox;