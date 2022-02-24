import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import {Link} from 'react-router-dom';
import {commonColor} from '../../modules/colorModule/commonColor.js';
import palette from "../../lib/styles/palette";

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    z-index:1050;
`;

const Wrapper = styled(Responsive)`
    height: 4rem;
    width:100%;
    display: flex;
    align-items: center;
    .logo {
        font-size: 1.125rem;
        .logoIcon{
            background:${commonColor.journalGreen};
            border-radius:10px;
            width:50px;
            height:50px;
        }
        
    }
    .menuItem{
        margin-left: 50px;
        display: flex;
        align-items: center;
        color: ${palette.gray[8]};
        height: 50px;
        &:hover {
            color: ${palette.gray[6]};
            border-bottom: 3px solid ${palette.gray[6]};
            border-top: 3px solid white;
        }
    }
    .right {
        display: flex;
        align-items: center;
        margin-left: auto;
    }
`;

const Spacer = styled.div`
    height: 4rem;
`;

const UserInfo = styled.div`
    font-weight: 800;
    margin-right: 1rem;
`
const Header = ({user,onLogout}) => {
    return(
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">
                        <div className="logoIcon">
                        </div>
                    </Link>
                    <Link to="/" className="menuItem">
                        Home
                    </Link>
                    <Link to="/" className="menuItem">
                        Dashboard
                    </Link>
                    {user ? (
                        <div className="right">
                            <UserInfo>{user.username}</UserInfo>
                            <Button onClick={onLogout}>로그아웃</Button>
                        </div>
                    ) : (
                        <div className="right">
                            <Button to="/login">로그인</Button>
                        </div>
                    )}
                    
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    )
}

export default Header;