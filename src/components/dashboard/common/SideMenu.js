import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {commonColor} from '../../../lib/styles/commonColor.js';
import palette from "../../../lib/styles/palette";
import { FaBookReader,FaCalendarAlt } from "react-icons/fa";
import { UserSettings } from "grommet-icons";

const SideMenuBlock = styled.div`
    position: relative;
    width: 15%;
    height: 100%;
`;

const Wrapper = styled.div`
    width:100%;
    height: 100%;
    margin-top: 120px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    .menuItem{
        margin-top: 10px;
        margin-left: 20px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        border-radius:15px 0px 0px 15px;
        &:hover {
            background-color: ${commonColor.journalLightGreen};
        }
        svg{
            margin-left:-20px;
            margin-right:10px;
        }
    }
`;

const SideMenu = () => {
    return(
        <SideMenuBlock>
            <Wrapper>
                <Link to="/dashBoard/journal-calendar" className="menuItem">
                    <FaCalendarAlt/> <span>학급일지</span>
                </Link>
                <Link to="/dashBoard/evaluation" className="menuItem">
                    <FaBookReader/> <span>수행평가</span>
                </Link>
                <Link to="/dashBoard/user-setting" className="menuItem">
                    <UserSettings color="#1DA57A"/> <span>학생관리</span>
                </Link>
            </Wrapper>
        </SideMenuBlock>
    )
}

export default SideMenu;