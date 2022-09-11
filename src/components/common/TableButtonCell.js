import React from 'react';
import styled,{css} from "styled-components";
import palette from "../../lib/styles/palette";
import {Link} from 'react-router-dom';
import {commonColor} from '../../lib/styles/commonColor.js';

const TableButtonCellBlock = styled.div`
    width:100%;
    height:100%;

    ${props =>
        props.color &&
        css`
            background: ${props => 
                {
                    if(props.color == 'red') return commonColor.journalDarkRed
                    else if(props.color == 'green') return commonColor.journalDarkGreen
                    else if(props.color == 'blue') return commonColor.journalDarkBlue
                    else if(props.color == 'white') return "#ffffff" 
                    else return palette.gray[6]
                }
            }; 
            &:hover {
                background: ${props => 
                {
                    if(props.color == 'red') return commonColor.journalRed
                    else if(props.color == 'green') return commonColor.journalGreen
                    else if(props.color == 'blue') return commonColor.journalBlue
                    else if(props.color == 'white') return palette.gray[3] 
                    else return palette.gray[6]
                }
            }; 
            }
        `}
`;
const TableButtonCell = (props) => {
    
    return(
        <TableButtonCellBlock onClick={props.onClick} {...props}>{props.value.content}</TableButtonCellBlock>
    )
}

export default TableButtonCell;