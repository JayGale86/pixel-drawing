import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 5px solid #323232;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.8);
`;

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.size}, 1fr);
  grid-template-rows: repeat(${props => props.size}, 1fr);
`;

const Board = props => {
  return (
    <Wrapper>
      <Grid size={props.size}>{props.children}</Grid>
    </Wrapper>
  );
};

export default Board;
