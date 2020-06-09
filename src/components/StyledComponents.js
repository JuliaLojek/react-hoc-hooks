import styled from 'styled-components';

export const Button = styled.button`
  box-sizing: border-box;
  margin: 5px;
  width: 300px;
  padding: 10px;
  background: none;
  border: 1px solid ${(props) => props.allowed ? 'green' : 'red'};
`;

export const Input = styled.input`
  box-sizing: border-box;
  margin: 5px;
  width: 300px;
  padding: 10px;
  border: none;
  border-bottom 1px solid ${(props) => props.filled ? 'green' : 'red'};

  &:focus {
    outline: none;
}
`;