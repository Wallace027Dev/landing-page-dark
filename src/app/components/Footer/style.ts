import styled from "styled-components";

export const FooterContainer = styled.footer`
  .prisma-logo-container {
    background: ${({ theme }) => theme.colors.background.darkGradient};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px 160px;
    flex-wrap: wrap;
    padding: 90px 0;

    p {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .social-media-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: 80px;

    div {
      display: flex;
      align-items: center;
      gap: 12px;

      .bi-facebook {
        color: ${({ theme }) => theme.colors.socialMedia.facebook};
      }

      .bi-instagram {
        color: ${({ theme }) => theme.colors.socialMedia.instagram};
      }

      .bi-youtube {
        color: ${({ theme }) => theme.colors.socialMedia.youtube};
      }
    }
  }

  @media (max-width: 425px) {
    img {
      width: 250px;
    }
  }
`;
