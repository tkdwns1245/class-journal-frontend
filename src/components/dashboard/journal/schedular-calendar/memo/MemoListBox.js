import React from 'react';
import styled from 'styled-components';
import {commonColor} from '../../../../../lib/styles/commonColor.js';
import { Scrollbars } from 'react-custom-scrollbars';
import MemoItem from './MemoItem.js';

const MemoListBoxBlock = styled.div`
    width: 100%;
    height: 640px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.lightBgColor};
    
`
const MemoScrollBox = styled(Scrollbars)`
    height:100% !important;
    width: 100% !important;
    & > div{
        background:${props => props.theme.lightBgColor};
        display:flex;
        align-items: center;
        flex-direction: column;
    }
`
const MemoListBox = ({memos,listMemosLoading,memoRegisterLoading}) => {


    return(
            <MemoListBoxBlock>
                <MemoScrollBox>
                {(listMemosLoading || memoRegisterLoading) && memos && (
                    memos.map((memoItem) => (
                        <MemoItem memoItem={memoItem} key={memoItem._id}/>
                    ))
                )}
                </MemoScrollBox>
            </MemoListBoxBlock>
    )
}

export default MemoListBox;