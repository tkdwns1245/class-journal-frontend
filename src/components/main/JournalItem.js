import React from "react";
import styled from "styled-components";
import ImageBox from "../common/ImageBox";
import { Image } from 'antd';
import palette from "../../lib/styles/palette";
import {commonColor} from '../../lib/styles/commonColor.js';
const JournalItemBlock = styled.div`
    position: relative;
    width:220px;
    height:250px;
    padding: 1rem;
    background: ${props => props.color}; 
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-radius:20px;
    .school{
        margin-top:20px;
    }
    .class{
        margin-top:-10px;
        font-size:20px;
    }
`;
const ClassMateBoxBlock = styled.div`
    position: relative;
    width:180px;
    height:80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;
const StudentImageBoxBlock = styled(ImageBox)`
    margin-bottom:${props => {
                        if( props.index % 2 ==0){
                            return '20px';
                        } else {
                            return '0px';
                        }
                    }};
    box-shadow: 0px 7px 10px ${palette.gray[6]};
    transition:transform 0.5s ease-in-out;
    transform:translate(0, 0px);
    &:hover {
        transform:translate(0, -20px);
    }
`

const JournalItem = ({journalItem}) => { 
  return ( 
        <JournalItemBlock color={commonColor[journalItem.themeColor]}>
            <h2 className="title">학급일지</h2>
            <h2 className="school">{journalItem.schoolName}</h2>
            <h2 className="class">{journalItem.gradeNum}학년 {journalItem.classroomNum}반</h2>
            <ClassMateBoxBlock >
                {journalItem.studentImageFiles.map((imageFiles,index) => (
                    <StudentImageBoxBlock key={index} index={index}>
                        <Image />
                    </StudentImageBoxBlock>
                ))}
            </ClassMateBoxBlock>
        </JournalItemBlock>
    );
};

export default JournalItem;
