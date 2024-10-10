import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 60px 80px;
  gap: 30px;
  text-align: left;
`;

export const ContactsContainer = styled.div`
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grays.light};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 690px;
  width: 100%;
  gap: 18px;

  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.colors.grays.medium};
    max-width: 340px;
  }

  img {
    width: auto;
    border-radius: 16px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    width: 225px;
    height: auto;
    padding: 0 24px 24px 0;

    img {
      width: 175px;
      border-radius: 0;
    }

    div {
      padding: 16px;
      text-align: center;

      p {
        margin-bottom: 8px;
      }
    }
  }
`;
