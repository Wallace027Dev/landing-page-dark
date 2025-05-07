import styled from "styled-components";

export const CourseContent = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

export const CourseCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 330px;
  width: 100%;
  text-align: left;

  > img {
    width: 100%;
    border-radius: 10px;
  }

  hr {
    border: none;
    border-top: 1px solid black;
    margin: 15px 0;
  }
`;

export const CourseInfo = styled.div`
    margin: 12px 0;

    .courses-area {
      display: flex;
      flex-wrap: wrap;
      gap: .25rem;

      span {
        border-radius: 20px;
        padding: 5px 10px;
        display: inline-block;
        color: white;
        font-size: 0.7rem;

        @media (max-width: 725px) {
          margin: 12px 0;
        }
      }
    }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.tertiary};
  }

  .card-reviews {
    color: gold;
    display: flex;
    align-items: center;

    .star-icon {
      font-size: 1.2rem;
      margin-right: 8px;
    }

    span {
      color: ${({ theme }) => theme.colors.grays.dark};
    }
  }

`;

export const CourseInfoDetails = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 6px;

    span {
      color: ${({ theme }) => theme.colors.grays.dark};
    }
  }

  i {
    margin-right: 5px;
  }
`;
