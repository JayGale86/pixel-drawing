import React from "react";
import Board from "./components/Board";
import Square from "./components/Square";
import BoardControls from "./components/BoardControls";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: #bfc6d9;
  width: 100vw;
  height: 100vh;
  padding-top: 10px;
  > div {
    margin: 0 auto;
  }
`;

class App extends React.Component {
  initialSettings = {
    size: 16,
    bgColor: "#cccccc",
    brushColor: "#eeeeee",
    borders: true
  };

  constructor(props) {
    super(props);
    this.state = this.buildBoard(this.initialSettings);
  }

  buildBoard = settings => {
    const { size, bgColor } = settings;
    const squares = {};
    for (let i = 0; i < size * size; i++) {
      squares[i] = {
        key: i,
        bgColor
      };
    }

    return {
      settings,
      squares
    };
  };

  restart = () => {
    //get new settings here later
    this.setState(this.buildBoard(this.initialSettings));
  };
  onSquareClickHandler = sqr => {
    const { brushColor } = this.state.settings;
    const newSquares = { ...this.state.squares };
    newSquares[sqr].bgColor = brushColor;
    this.setState({ ...this.state, newSquares });
  };

  onChangeBrushColor = e => {
    const val = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      settings: {
        ...prevState.settings,
        brushColor: val
      }
    }));
  };
  toggleBorders = () => {
    const { borders } = this.state.settings;
    this.setState(prevState => ({
      ...prevState,
      settings: {
        ...prevState.settings,
        borders: !borders
      }
    }));
  };
  render() {
    console.log(this.state);
    const {
      squares,
      settings: { brushColor, size, borders }
    } = this.state;
    const squaresArr = [];
    for (const sqr in squares) {
      squaresArr.push(
        <Square
          key={squares[sqr].key}
          num={squares[sqr].key}
          bgColor={squares[sqr].bgColor}
          clicked={() => this.onSquareClickHandler(squares[sqr].key)}
          borders={borders}
        />
      );
    }
    return (
      <AppContainer>
        <BoardControls
          brushColor={brushColor}
          changeBrushColor={this.onChangeBrushColor}
          toggleBorders={this.toggleBorders}
          newBoard={this.restart}
        />
        <Board size={size}>{squaresArr}</Board>
      </AppContainer>
    );
  }
}

export default App;
