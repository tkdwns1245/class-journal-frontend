import React from "react";
import styled,{css} from "styled-components";
import { Button } from 'antd';

const StyledButton = styled(Button)`
    border:none;
    border-radius: 10px;
    box-shadow: 3px 3px 10px ${props => props.theme.bgColor};
`;


const DashboardButton = (props) => {
    return <StyledButton {...props}/>;
};

export default DashboardButton;
