import React from "react";
import styled from "styled-components";
import { Card } from 'antd';
import palette from '../../../lib/styles/palette';
const MemoItemBlock = styled(Card)`
    width:90%;
    height:250px;
    border-radius:10px;
    border-color:${palette.gray[4]};
    margin-bottom:20px;
`;


const MemoItem = ({journalItem}) => { 
  return ( 
        <MemoItemBlock size="small" title="Small size card" extra={<a href="#">More</a>}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </MemoItemBlock>
    );
};

export default MemoItem;
