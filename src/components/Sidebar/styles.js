import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  min-height: 100vh;
  padding: 30px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const Form = styled.form`
  border-bottom: 1px solid #eee;
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 20px;

  input {
    background-color: #eee;
    border: ${({ withError }) => (withError ? '2px solid #F00' : 0)};
    border-radius: 3px;
    margin-right: 10px;
    padding: 15px 10px;
  }

  button {
    background: #63f5b8;
    border: 0;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    padding: 0 20px;

    i {
      width: 16px;
    }

    &:hover {
      background: #53e0a5;
    }
  }
`;
