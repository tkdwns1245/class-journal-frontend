import React from "react";
import styled,{css} from "styled-components";
import { Button } from 'antd';
import {commonColor} from '../../../../lib/styles/commonColor';

const StyledButton = styled(Button)`
    border:none;
    border-radius: 10px;
    box-shadow: 3px 3px 10px ${commonColor.journalGreen};
`;


const DashboardButton = (props) => {
    return <StyledButton {...props}/>;
};

export default DashboardButton;
