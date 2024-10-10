import styled from "styled-components";

export const Section = styled.section`
  padding: 128px 80px;

  @media (max-width: 425px) {
    padding: 40px 8px;
  }
`;

export const WorkshopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 122px;

  img {
    width: 100%;
    max-width: 480px;
  }
`;

export const InfoWorkshopContainer = styled.div`
  h2 {
    margin-top: 18px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.5rem;
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.colors.grays.dark};
    font-size: 1rem;
    margin: 32px 0;
    max-width: 560px;
  }
`;

export const WorkshopInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    span {
      display: inline-block;
      border-radius: 30px;
      box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.25);
      padding: 12.5px;
      width: 60px;
      height: 60px;
    }

    p {
      color: ${({ theme }) => theme.colors.grays.light};
      font-size: 1.5rem;
      font-weight: 600;
      max-width: 200px;

      @media (max-width: 425px) {
        font-size: 1.3rem;
      }
    }
  }
`;

export const ContentInfo = styled.div`
  span {
    border: 1px solid #ce3b3b;
    background: #f66;
  }
`;

export const PedagogicalInfo = styled.div`
  span {
    border: 1px solid #019aaf;
    background: #1bcbe3;
  }
`;
