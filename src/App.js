import styled, {css} from 'styled-components';
import {useState} from 'react';


export const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    // const newValue = counter + 1;
    // setCounter(newValue) OR
    setCounter((curr) => (curr + 1));
  };

  const handleDecrement = () => {
    // const newValue = counter + 1;
    // setCounter(newValue) OR
    setCounter((curr) => (curr - 1));
  };

  const handleReset = () => {
    // const newValue = counter + 1;
    // setCounter(newValue) OR
    setCounter(() => 0);
  };

  return (
  <PageContainer>
    <CounterWrapper>
      <Counter >{counter}</Counter>
    <ButtonWrapper>
      <ButtonLeft  onClick={handleIncrement}>😄</ButtonLeft>
      <ButtonRight onClick={handleDecrement}>😭</ButtonRight>
    </ButtonWrapper>
    <Reset onClick={handleReset}>🔄</Reset>
    </CounterWrapper>
  </PageContainer>
  );
};


const commonButtonStyles = css`
  padding: 20px;
  font-size: 100px;
  border: 1px solid black;
  cursor: pointer;
  user-select: none;

  :hover {
    background-color:grey;
  }
`
const ButtonLeft = styled.div`
  border-radius: 20px 0px 0px 20px;
  ${commonButtonStyles}
  `;

const ButtonRight = styled.div`
  border-radius: 0 20px 20px 0px;
  ${commonButtonStyles}
`;


const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 100px;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Counter = styled.div`
  font-size: 60px;
  font-weight: bold;
  margin: 30px 0;
`

const Reset = styled.div`
  font-size: 40px;
  margin-top: 40px;
`