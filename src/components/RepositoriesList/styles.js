import styled from 'styled-components';

export const List = styled.ul`
  ul {
    li {
      margin-top: 20px;
      color: #000;
      text-decoration: none;
      cursor: pointer;

      :hover {
        opacity: 1;
        transition: 1s;
        background: #fcfcfc;
      }
    }
  }
`;
