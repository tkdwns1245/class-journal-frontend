import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MemoBoxBlock = styled.div`
    position: relative;
    width: 30%;
    height: 100%;
    background-color: blue;
`;
const MemoBox = () => {
    return(
        <MemoBoxBlock>
        </MemoBoxBlock>
    )
}

export default MemoBox;