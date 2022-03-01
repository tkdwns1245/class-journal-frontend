import React from "react";
import styled,{css} from "styled-components";
import { DatePicker } from 'antd';
import {commonColor} from '../../../../lib/styles/commonColor';

const StyledDatePicker = styled(DatePicker)`
    border:none;
    border-radius: 10px;
    box-shadow: 3px 3px 10px ${commonColor.journalGreen};
`;


const DashboardDatePicker = (props) => {
    return <StyledDatePicker {...props}/>;
};

export default DashboardDatePicker;
