import React from 'react';
import styled from 'styled-components';
import {commonColor} from '../../../../../lib/styles/commonColor.js';
import { Button} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddMemoModal from './AddMemoModal.js';

const MemoControllBoxBlock = styled.div`
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
const ButtonWrapper = styled.div`
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

const MemoControllBox = ({form,isModalVisible,showModal,handleCancel,onChange,onSubmit,error}) => {

    return(
            <MemoControllBoxBlock>
                <ButtonWrapper>
                    <b className="journal-add-text">이달의 메모</b>
                    <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={showModal}/>
                    <AddMemoModal 
                        form={form} 
                        isModalVisible={isModalVisible} 
                        handleCancel={handleCancel}
                        onChange={onChange}
                        onSubmit={onSubmit}
                        error={error}
                    />
                </ButtonWrapper>
            </MemoControllBoxBlock>
    )
}

export default MemoControllBox;