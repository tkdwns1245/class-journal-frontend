import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {commonColor} from '../../../lib/styles/commonColor.js';
import { Button} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';
import MemoItem from './MemoItem.js';
import AddMemoModal from './AddMemoModal.js';
const MemoBoxBlock = styled.div`
    position: relative;
    width: 25%;
    height: 100%;
    display:flex;
    flex-direction: column;
`;

const TopButtonBoxBlock = styled.div`
    width: 100%;
    height: 70px;
    display:flex;
    padding:1rem;
    align-items: center;
    justify-content: space-between;
    .right{
        .btn-text{
            margin-left:10px;
        }
    }
`

const BottomMemoBoxBlock = styled.div`
    width: 100%;
    height: 640px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: ${commonColor.journalGreen};
    
`
const ButtonContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-end;
  .ant-btn-primary {
    background: ${commonColor.journalDarkGreen};
    border: none;
    box-shadow: 7px 7px 10px ${commonColor.journalDarkGreen};
  }
  .journal-add-text{
      color:${commonColor.journalDarkGreen};
      margin-right:15px;
      font-size:15px;
  }
  &:hover {
        .ant-btn-primary {
            background: ${commonColor.journalGreen2};
        }
        .journal-add-text{
            color: ${commonColor.journalGreen2};
            font-size:15px;
            cursor:pointer;
        }
    }
`;
const MemoScrollBox = styled(Scrollbars)`
    height:100% !important;
    width: 100% !important;
    & > div{
        background:#F7FEF6;
        display:flex;
        align-items: center;
        flex-direction: column;
    }
`
const MemoBox = ({form,isModalVisible,showModal,handleCancel,onChange,onSubmit,memos,listMemosLoading,memoRegisterLoading,error}) => {
    return(
        <MemoBoxBlock>
            <TopButtonBoxBlock>
                <ButtonContainer>
                    <b className="journal-add-text">이달의 메모</b>
                    <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={showModal}/>
                </ButtonContainer>
            </TopButtonBoxBlock>
            <BottomMemoBoxBlock>
                <MemoScrollBox>
                {(listMemosLoading || memoRegisterLoading) && memos && (
                    memos.map((memoItem) => (
                        <MemoItem memoItem={memoItem} key={memoItem._id}/>
                    ))
                )}
                </MemoScrollBox>
            </BottomMemoBoxBlock>
            <AddMemoModal 
                form={form} 
                isModalVisible={isModalVisible} 
                handleCancel={handleCancel}
                onChange={onChange}
                onSubmit={onSubmit}
                error={error}
            />
        </MemoBoxBlock>
    )
}

export default MemoBox;