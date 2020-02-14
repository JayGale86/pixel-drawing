import React from "react";
import styled from "styled-components";

const Controls = styled.div`
  height: 70px;
  width: 610px;
  display: flex;
  justify-content: space-between;
  background-color: #323232;
  border: 5px solid #323232;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 24px;
  padding: 10px;
  box-sizing: border-box;
`;

const Brush = styled.div`
  color: ${props => props.brushColor};
  -webkit-text-stroke: 1px white;
`;

const boardControls = props => {
  console.log("[boardcontrols] props", props);
  return (
    <Controls>
      <label htmlFor="squarecolorpicker">
        <Brush
          brushColor={props.brushColor}
          className="fas fa-paint-brush fa-sm"
        />
        Color
      </label>
      <input
        style={{ display: "none" }}
        type="color"
        id="squarecolorpicker"
        value={props.brushColor}
        onChange={props.changeBrushColor}
        onKeyUp={props.changeBrushColor}
      />
      <span onClick={props.toggleBorders}>
        <i className="fas fa-border-all" />
        Toggle Borders
      </span>

      <span onClick={props.newBoard}>
        <i className="fas fa-redo" />
        New Board
      </span>
    </Controls>
  );
};

export default boardControls;
