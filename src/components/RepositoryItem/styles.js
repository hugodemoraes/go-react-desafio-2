import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  /* font-size: 14px; */
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 15px;

  /* img {
    margin-right: 10px;
    width: 45px;
    height: 45px;
  } */

  i {
    color: #e8e8e8;
    cursor: pointer;
  }

  &:hover {
    i {
      color: #666;
    }
  }
`;

// export const Details = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;

//   strong {
//     font-size: 18px;
//   }

//   small {
//     font-size: 14px;
//     color: #e8e8e8;
//   }
// `;
