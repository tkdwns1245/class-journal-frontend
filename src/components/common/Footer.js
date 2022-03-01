import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import {Link} from 'react-router-dom';
import {commonColor} from '../../lib/styles/commonColor.js';
import palette from "../../lib/styles/palette";

const FooterBlock = styled.div`
    position: relative;
    width: 100%;
    background: white;
`;

const Wrapper = styled(Responsive)`
    height: 4rem;
    width:100%;
    display: flex;
    align-items: center;
`;

const Footer =() => {
    return(
        <>
        <FooterBlock>
            <Wrapper>
            </Wrapper>
        </FooterBlock>
        </>
    )
}

export default Footer;