import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.background.rightGradient};
  min-height: 80vh;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 60px 120px;

  @media (max-width: 1024px) {
    padding: 60px 80px;
  }

  @media (max-width: 650px) {
    padding: 24px 8px;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-top: 90px;
    flex-direction: column;
  }
`;

export const InfoAndButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    text-align: left;
    max-width: 720px;
    margin-bottom: 24px;
    line-height: 64px;
  }

  i {
    margin-left: 10px;
  }

  @media (max-width: 1440px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 2.1rem;
      line-height: 48px;
    }
  }

  @media (max-width: 650px) {
    align-items: center;

    h1 {
      text-align: center;
      font-size: 1.5rem;
      line-height: 2rem;
      max-width: 300px;
    }

    a {
      font-size: 1rem;
    }
  }
`;

export const HeroImage = styled.div`
  text-align: center;

  img {
    width: auto;
    height: 60vh;

    @media (max-width: 425px) {
      width: 100%;
      height: auto;
    }
  }
`;
