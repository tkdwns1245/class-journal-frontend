import React from "react";
import styled,{css} from "styled-components";
import palette from "../../lib/styles/palette";
import {useNavigate} from 'react-router-dom';
import {commonColor} from '../../lib/styles/commonColor.js'

const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.gray[8]};
    &:hover {
        background: ${palette.gray[6]};
    }
    ${props =>
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
        `}

    ${props =>
        props.color &&
        css`
            background: ${props => 
                {
                    if(props.color == 'red') return commonColor.journalDarkRed
                    else if(props.color == 'green') return commonColor.journalDarkGreen
                    else if(props.color == 'blue') return commonColor.journalDarkBlue
                    else return palette.gray[6]
                }
            }; 
            &:hover {
                background: ${props => 
                {
                    if(props.color == 'red') return commonColor.journalRed
                    else if(props.color == 'green') return commonColor.journalGreen
                    else if(props.color == 'blue') return commonColor.journalBlue
                    else return palette.gray[6]
                }
            }; 
            }
        `}
`;


const Button = (props) => {
    const navigate = useNavigate();
    const onClick = e =>{  
        if(props.to) {
            navigate(props.to);
        }
        if(props.onClick) {
            props.onClick(e);
        }
    };
    return <StyledButton {...props} onClick={onClick}></StyledButton>;
};

export default Button;
