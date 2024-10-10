import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    padding: 60px 8px;
  }
`;

export const LearnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20%;

  @media (max-width: 1440px) {
    gap: 15%;
  }

  @media (max-width: 1024px) {
    gap: 10%;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  img {
    height: auto;
    border-radius: 15px;

    @media (max-width: 1440px) {
      width: 360px;
    }

    @media (max-width: 768px) {
      width: 250px;
    }
  }
`;

export const InfoLearnContainer = styled.div`
  flex: 1;
  max-width: 1200px;
  text-align: left;

  h2 {
    font-size: 2.1rem;
    font-weight: 600;
    margin: 24px 0;
    max-width: 300px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.grays.medium};
    max-width: 800px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    span {
      margin-top: 24px;
    }
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`;

export const ArrowIcon = styled.div `
  background-color: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.blues.medium};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.blues.medium};
  box-shadow: 4px 3px 0px 0px rgba(0, 0, 0, 0.25);
`;

export const ArrowText = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  text-decoration: none;
  font-weight: 600;
`;
