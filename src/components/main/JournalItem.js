import React from "react";
import styled from "styled-components";

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
`;
const ClassMateBoxBlock = styled.div`

`

const JournalItem = ({journalItem}) => { 
  return ( 
        <JournalItemBlock color={journalItem.color}>
            <h2 className="title">학급일지</h2>
            <h2 className="school">{journalItem.schoolName}</h2>
            <h2 className="class">{journalItem.grade}학년 {journalItem.classNumber}반</h2>
            <ClassMateBoxBlock >

            </ClassMateBoxBlock>
        </JournalItemBlock>
    );
};

export default JournalItem;
