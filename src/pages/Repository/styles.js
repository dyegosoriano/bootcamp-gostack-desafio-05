import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 15px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }
        span {
          height: 20px;
          background: #7159c1;
          color: #fff;
          border-radius: 3px;
          font-size: 12px;
          font-weight: 600;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #fff;
      }
    }
  }
`;

export const IssueFilter = styled.div`
  width: 300px;
  margin: 0 auto;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-around;

  button {
    font-size: 14px;
    color: #fff;
    background: #7159c1;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    transition: 0.25s;

    &:hover {
      opacity: 0.75;
      transition: 0.25s;
    }
  }
`;

export const BoxPagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;

  button {
    width: 100px;
    font-size: 14px;
    color: #fff;
    background: #7159c1;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    transition: 0.25s;

    &:hover {
      opacity: 0.75;
      transition: 0.25s;
    }
  }
`;
