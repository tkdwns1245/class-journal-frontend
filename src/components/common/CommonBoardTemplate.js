import React from "react";
import styled from "styled-components";
import {commonColor} from '../../lib/styles/commonColor.js';
import palette from "../../lib/styles/palette";

const CommonBoardTemplateBlock = styled.div`
    position: relative;
    width:85%;
    height:auto;
    min-height:90%;
    margin-top:3rem;
    background:${props => props.theme.bgColor};
    border-radius:20px;
    box-shadow: 7px 7px 10px ${palette.gray[4]};
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
const CommonBoardTemplate = ({children}) => {
  return ( 
        <CommonBoardTemplateBlock>
            {children}
        </CommonBoardTemplateBlock>
    );
};

export default CommonBoardTemplate;
