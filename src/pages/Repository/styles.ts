import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-top: 5px;
    color: #a8a8b3;
    transition: color 200ms;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 6px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        margin-top: 4px;
        font-size: 20px;
        color: #737380;
      }
    }
  }
  ul {
    display: flex;
    margin-top: 50px;

    li {
      display: flex;
      flex-direction: column;

      & + li {
        margin-left: 80px;
      }

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        font-size: 20px;
        color: #6c6c80;
        margin-top: 4px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 200ms;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 20px;
      color: #3d3d4d;
      flex: 1;

      strong {
        font-size: 18px;
        color: #3d3d4d;
        margin-top: 4px;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;
    }
  }
`;
