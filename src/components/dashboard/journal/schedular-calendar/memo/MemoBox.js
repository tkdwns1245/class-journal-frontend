import React from 'react';
import styled from 'styled-components';

const MemoBoxBlock = styled.div`
    position: relative;
    width: 25%;
    height: 100%;
    display:flex;
    flex-direction: column;
`;

const MemoBox = ({children}) => {

    return(
        <MemoBoxBlock>
            {children}
        </MemoBoxBlock>
    )
}

export default MemoBox;