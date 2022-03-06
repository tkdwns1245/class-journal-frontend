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


const MemoItem = ({memoItem}) => { 
  return ( 
        <MemoItemBlock size="small" title={memoItem.title} extra={<a href="#">More</a>}>
            {memoItem.content}
        </MemoItemBlock>
    );
};

export default React.memo(MemoItem);
