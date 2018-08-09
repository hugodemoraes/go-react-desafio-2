import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
`;

export const IssueInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
  max-width: 100%;

  strong {
    color: #333;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 400px;
  }

  small {
    color: #666;
    font-size: 14px;
  }

  a {
    margin-top: 5px;
    background: #b286d1;
    padding: 5px 10px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    border-radius: 4px;
    text-transform: uppercase;
    text-decoration: none;

    i {
      margin-right: 5px;
    }
  }
`;
