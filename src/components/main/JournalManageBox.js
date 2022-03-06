import React, { useState,useCallback } from "react";
import styled from "styled-components";
import { Modal,Button,Form, Input } from 'antd';
import palette from "../../lib/styles/palette";
import { PlusOutlined } from '@ant-design/icons';
import {commonColor} from '../../lib/styles/commonColor.js';
import JournalItem from './JournalItem.js';
import Carousel from "react-multi-carousel";
import AddJournalModal from './AddJournalModal.js';
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

const JournalManageBox = ({
                            form,
                            visible,
                            onChange,
                            onCancel,
                            listJournalsLoading,
                            registerLoading,
                            journals,
                            onSelectJournal,
                            showModal,
                            error,
                            onSubmit
                        }) => {
    
  return ( 
        <JournalManageBoxBlock>
            <AddJournalBoxBlock>
                <h2 className="title">학급일지 추가</h2>
                <p className="subTitle">매년 새로운 학급일지를 추가하여 관리해보세요.</p>
                <ButtonContainer>
                    <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={showModal}/>
                    <b className="journal-add-text" onClick={showModal}>일지 추가</b>
                    <AddJournalModal 
                    form={form}
                    visible={visible}
                    onSubmit={onSubmit}
                    onChange={onChange}
                    onCancel={onCancel}
                    error={error}/>
                </ButtonContainer>
            </AddJournalBoxBlock>
            <JournalListBoxBlock>
                    {(listJournalsLoading || registerLoading) && journals && (
                        <Carousel responsive={carouselResponsive} autoPlaySpeed={10000} infinite={true}>
                        {journals.map((journalItem) => (
                            <JournalItem journalItem={journalItem} key={journalItem._id} onSelectJournal={onSelectJournal}/>
                        ))}
                        </Carousel>
                    )}
                
            </JournalListBoxBlock>
        </JournalManageBoxBlock>
    );
};

export default JournalManageBox;
