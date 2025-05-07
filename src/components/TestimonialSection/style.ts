import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.background.darkGradient};
`;

export const TestimonialsContainer = styled.div`
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.5rem;
    font-weight: 600;
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    padding: 40px 8px;
  }
`;

export const NewsletterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > img {
    position: relative;
    height: 286px;
    top: 43px;

    @media (max-width: 425px) {
      width: 90%;
      top: 16px;
    }
  }

  .input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-size: 36px;
      color: ${({ theme }) => theme.colors.secondary};
      max-width: 500px;
      text-align: left;
      margin-bottom: 24px;
    }

    input {
      border-radius: 50px;
      border: 1px solid ${({ theme }) => theme.colors.blues.medium};
      padding: 20px;
      width: 500px;
      outline: none;
      margin-bottom: 16px;
    }

    @media (max-width: 550px) {
      align-items: center;

      h2 {
        padding: 0 16px;
        font-size: 2rem;
      }

      input {
        width: 270px;
      }
    }
  }

  .button-group {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
  i{
  display:none;
  }
    button {
      position: absolute;
      top: 25px;
      left: 50px;
      background: ${({ theme }) => theme.colors.background.main};
      border: 1px solid ${({ theme }) => theme.colors.tertiary};
      box-shadow: 4px 6px 0px 0px ${({ theme }) => theme.colors.tertiary};
      border-radius: 50px;
      width: 198px;
      height: 60px;
      font-weight: 600;
      z-index: 1;
      &:hover {
        box-shadow: 8px 10px 2px 0px ${({ theme }) => theme.colors.tertiary};
        transition: 0.4s ease-in;
        cursor: pointer;
      }
        
    }

    @media (max-width: 550px) {
      margin-top: 0;

      button {
        height: 45px;
      }
    }
  }

  @media (max-width: 1440px) {
    flex-direction: column;
    text-align: center;
    padding-bottom: 100px;

    .button-group {
      margin-left: 72px;

      button {
        position: absolute;
        top: 0;
        left: -25px;
      }
    }
  }
`;

export const PersonalTestimonialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 72px;
  gap: 3rem;

  @media (max-width: 425px) {
    gap: 0.5rem;
    margin-top: 12px;
  }
`;

export const PersonalImage = styled.div`
  position: relative;
  display: inline-block;

  .background-container {
    display: block;
    width: 100%;
  }

  .pessoa-foto {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55.5%);
    width: 100%;
    height: auto;
    object-fit: cover;

    @media (max-width: 425px) {
      width: 100%;
    }
  }
`;

export const PersonalInfoContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
  }

  h4 {
    color: ${({ theme }) => theme.colors.grays.medium};
    font-size: 1.1rem;
  }

  p {
    font-size: 1rem;
    max-width: 330px;
    color: ${({ theme }) => theme.colors.secondary};
    margin: 1.5rem 0;
  }

  @media (max-width: 1024px) {
    align-items: center;

    h3 {
      margin-top: 1rem;
    }

    p {
      margin: 1rem 0;
      text-align: center;
    }
  }
`;

export const PersonalRating = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.4rem 0.8rem;
  border-radius: 24px;

  .bi-star-fill,
  .bi-star-half {
    color: ${({ theme }) => theme.colors.star};
  }

  span {
    color: ${({ theme }) => theme.colors.grays.dark};
  }
`;

export const PersonalSocialMediasContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  a {
    display: inline-block;
    border-radius: 25px;
    border: 1px solid ${({ theme }) => theme.colors.grays.dark};
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 2.504px 3.339px 0px 0px rgba(0, 0, 0, 0.25);
    padding: 0.5rem 0.75rem;
  }

  a:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  i {
    color: ${({ theme }) => theme.colors.grays.dark};
  }
`;

export const MoreTestimonials = styled.div`
  /* Container que abraça todos os depoimentos */
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
  border: 2px solid ${({ theme }) => theme.colors.grays.medium};
  padding: 20px;
  margin-top: 40px;
  gap: 2rem;
  width: 100%;
  max-width: 800px;

  /* Estiliza cada item do splide */
  .splide__slide {
    display: flex;
    justify-content: center;
  }

  /* Estiliza os botões da biblioteca */
  .splide__arrow {
    border-radius: 25px;
    border: 2px solid ${({ theme }) => theme.colors.tertiary};
    background: ${({ theme }) => theme.colors.background.main};
    box-shadow: 2px 4px 0px 0px ${({ theme }) => theme.colors.tertiary};
    height: 50px;
    width: 50px;
    margin: 0 -35px;
    cursor: pointer;

    @media (max-width: 425px) {
      height: 35px;
      width: 35px;
    }
  }

  @media (max-width: 1024px) {
    padding: 16px;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 12px;
    gap: 0.8rem;
    justify-content: center;
    width: 100%;
  }
`;

export const PersonsMiniatures = styled.div`
  /* Container de cada pessoa */
  gap: 1rem;
  padding: 0;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.grays.medium};
  background: ${({ theme }) => theme.colors.secondary};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;

  /* Imagem centralizada no container */
  img {
    border-radius: 50%;
    width: 90px;
    height: 90px;
    object-fit: cover;
  }

  /* Classe ativa */
  &.active {
    border: 2px solid ${({ theme }) => theme.colors.active};
  }

  /* Efeito hover */
  &:hover {
    transform: translateY(-2.5px);
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 1024px) {
    padding: 0;
  }
`;
