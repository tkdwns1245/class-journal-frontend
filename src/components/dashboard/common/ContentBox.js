import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {commonColor} from '../../../lib/styles/commonColor.js';
import palette from '../../../lib/styles/palette';

const ContentBoxBlock = styled.div`
    position: relative;
    width: 85%;
    height: 100%;
    border-radius:10px;
    padding:2rem;
    background-color: ${props => props.theme.lightBgColor};
    display:flex;
`;
const ContentBox = ({children}) => {
    
    return(
        <ContentBoxBlock>
            {children}
        </ContentBoxBlock>
    )
}

export default ContentBox;