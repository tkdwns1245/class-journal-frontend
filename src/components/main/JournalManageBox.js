import React from "react";
import styled from "styled-components";
import { Modal,Button } from 'antd';
import palette from "../../lib/styles/palette";
import { PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import {commonColor} from '../../modules/colorModule/commonColor.js';
import JournalItem from './JournalItem.js';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const carouselResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const JournalManageBoxBlock = styled.div`
    position: relative;
    width:70%;
    height:80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const AddJournalBoxBlock = styled.div`
    position: relative;
    width:100%;
    height:45%;
    padding:1rem;
    padding-top:4rem;
    .title {
        font-size:23px;
    }
    .subTitle{
        font-size:13px;
    }
`;
const JournalListBoxBlock = styled.div`
    position: relative;
    width:100%;
    height:55%;
    padding:1rem;
`;

const ButtonContainer = styled.div`
  .ant-btn-primary {
    margin-top:30px;
    background: ${commonColor.journalDarkGreen};
    border: none;
    box-shadow: 7px 7px 10px ${commonColor.journalDarkGreen};
  }
  .journal-add-text{
      color:${commonColor.journalDarkGreen};
      margin-left:15px;
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

const JournalManageBox = () => {
    const journalItems = [
        {
            _id:"aa",
            schoolName: "여고초등학교",
            grade: 5,
            classNum: 4,
            color: commonColor.journalGreen,
            classMate: []
        },
        {
            _id:"bb",
            schoolName: "여고초등학교",
            grade: 5,
            classNum: 4,
            color: commonColor.journalRed,
            classMate: []
        },
        {
            _id:"cc",
            schoolName: "여고초등학교",
            grade: 5,
            classNum: 4,
            color: commonColor.journalBlue,
            classMate: []
        }
    ]
  return ( 
        <JournalManageBoxBlock>
            <AddJournalBoxBlock>
                <h2 className="title">학급일지 추가</h2>
                <p className="subTitle">매년 새로운 학급일지를 추가하여 관리해보세요.</p>
                <ButtonContainer>
                    <Button type="primary" shape="circle" icon={<PlusOutlined />} />
                    <b className="journal-add-text">일지 추가</b>
                </ButtonContainer>
            </AddJournalBoxBlock>
            <JournalListBoxBlock>
                <Carousel
                 responsive={carouselResponsive}>
                    {journalItems.map((journalItem,index) => (
                        <JournalItem journalItem={journalItem} key={journalItem._id}/>
                    ))}
                </Carousel>
            </JournalListBoxBlock>
        </JournalManageBoxBlock>
    );
};

export default JournalManageBox;
