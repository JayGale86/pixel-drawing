import React from "react";
import styled from "styled-components";

const Sqr = styled.div`
  border: ${props => (props.borders ? `1px solid gray` : `none`)};
  background-color: ${props => props.bgColor};
  box-sizing: border-box;
`;

const square = props => {
  return (
    <Sqr
      bgColor={props.bgColor}
      borders={props.borders}
      onClick={props.clicked}
    />
  );
};

export default square;
