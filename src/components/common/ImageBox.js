import React from "react";
import styled from "styled-components";

const ImageBoxBlock = styled.div`
    width:40px;
    height:40px;
    border-radius:40px;
    border:solid 3px white;
`;

const ImageBox = ({children, ...rest}) => { 
  return ( 
        <ImageBoxBlock {...rest}>
            {children}
        </ImageBoxBlock>
    );
};

export default ImageBox;
