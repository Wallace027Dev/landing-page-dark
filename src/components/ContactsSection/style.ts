import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 60px 80px;
  gap: 30px;
  text-align: left;

  @media (max-width: 425px) {
    padding: 36px 8px;
  }
`;

export const ContactsContainer = styled.div`
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grays.light};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 690px;
  width: 100%;
  min-width: 300px;
  gap: 1.25rem;

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
    gap: 0.25rem;
    flex-direction: column-reverse;
    align-items: flex-start;
    width: 225px;
    padding: 24px 24px 0 0;

    img {
      height: 175px;
      border-radius: 16px;
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
