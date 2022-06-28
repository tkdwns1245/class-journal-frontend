import React from "react";
import styled,{css} from "styled-components";
import { DatePicker } from 'antd';

const StyledDatePicker = styled(DatePicker)`
    border:none;
    border-radius: 10px;
    box-shadow: 3px 3px 10px ${props => props.theme.bgColor};
`;

const DashboardDatePicker = (props) => {
    return <StyledDatePicker {...props}/>;
};

export default DashboardDatePicker;
