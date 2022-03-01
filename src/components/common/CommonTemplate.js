import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";



const CommonTemplateBlock = styled.div`
    position: relative;
    width:100%;
    height:${() =>{
        const location = useLocation();
        const thisPath = location.pathname;
        if(thisPath.includes('dashBoard')){
            return "auto";
        } else {
            return "90%";
        };
    }};
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    justify-content:flex-start;
`;

const CommonTemplate = ({children}) => {
  return ( 
        <CommonTemplateBlock>
            {children}
        </CommonTemplateBlock>
    );
};

export default CommonTemplate;
