import React from "react";
import styled from "styled-components";


const MainBoxBlock = styled.div`
    position: relative;
    width:80%;
    height:100%;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainBox = ({children}) => {
  return ( 
        <MainBoxBlock>
            {children}
        </MainBoxBlock>
    );
};

export default MainBox;
