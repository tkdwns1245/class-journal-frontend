import React from "react";
import styled from "styled-components";


const CommonTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    padding-top: 4rem;
    width:100%;
    height:100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const commonTemplate = ({children}) => {
  return ( 
        <CommonTemplateBlock>
            {children}
        </CommonTemplateBlock>
    );
};

export default commonTemplate;
