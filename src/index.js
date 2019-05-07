import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledLabel = styled.div`
  font-size: 22px;
  font-family: Poppins;
  font-weight: 800;
  color: #1939b7;
`;
const StyledButton = styled.button`
  width: 5rem;
  height: 2rem;
  font-weight: 600;
  background-color: #cacaca;
  border: none;
  margin-right: 10px;
  cursor: pointer;

  :hover {
    background-color: red;
    color: white;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handleOnClickAdd = this.handleOnClickAdd.bind(this);
    this.handleOnClickSubtract = this.handleOnClickSubtract.bind(this);
  }

  handleOnClickAdd() {
    const currentValue = this.state.counter;
    const newValue = currentValue + 1;
    this.setState({
      counter: newValue
    });
  }

  handleOnClickSubtract() {
    const currentValue = this.state.counter;
    const newValue = currentValue - 1;
    this.setState({
      counter: newValue
    });
  }

  render() {
    console.log("I rendered");
    return (
      <div>
        <div>
          <StyledLabel>
            The Value of counter is: {this.state.counter}
          </StyledLabel>
        </div>
        <StyledButton onClick={this.handleOnClickAdd}>Add</StyledButton>

        {this.state.counter > 0 && (
          <StyledButton onClick={this.handleOnClickSubtract}>
            Subtract
          </StyledButton>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
