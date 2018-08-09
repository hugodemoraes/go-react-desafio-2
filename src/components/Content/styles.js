import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  height: 100px;
  width: 100%;
  background: #fff;
  padding: 30px;
  justify-content: space-between;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.1);
`;

export const Select = styled.select`
  width: 200px;
  height: 40px;
  border: 1px solid #ddd;
  background: #fff;
  color: #ddd;
  padding: 0 10px;
  border-radius: 3px;
`;

export const Loading = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  i {
    color: #b286d1;
  }
`;

export const IssuesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin: 30px;
`;
