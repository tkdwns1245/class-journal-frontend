import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {commonColor} from '../../../lib/styles/commonColor.js';
import { Button} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';
import { Card } from 'antd';
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
    height: auto;
    display:flex;
    align-items: center;
    background-color: ${commonColor.journalGreen};
    
`
const ButtonContainer = styled.div`
  .ant-btn-primary {
    margin-top:30px;
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
`


const MemoBox = () => {
    return(
        <MemoBoxBlock>
            <TopButtonBoxBlock>
                <ButtonContainer>
                    <b className="journal-add-text" onClick>이달의 메모</b>
                    <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick/>
                </ButtonContainer>
            </TopButtonBoxBlock>
            <BottomMemoBoxBlock>
                <MemoScrollBox>
                <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                </Card>
                <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                </Card>
                <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                </Card>
                <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                </Card>
                <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                </Card>
                </MemoScrollBox>
            </BottomMemoBoxBlock>
        </MemoBoxBlock>
    )
}

export default MemoBox;