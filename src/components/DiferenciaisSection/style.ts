import styled from "styled-components";

export const Section = styled.section`
  h2 {
    font-size: 2rem;
    margin-top: 30px;
  }

  p {
    font-size: 1rem;
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.grays.dark};
  }
`;

export const DiferenciaisContainer = styled.div`
  margin: 50px 24px 0 24px;

  @media (max-width: 425px) {
    margin: 36px 8px 0 8px;
  }
`;

export const DiferenciaisBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 60px;

  .box-diferencial {
    border-radius: 10px;
    padding: 20px 40px;
    width: 100%;
    height: 230px;
    max-width: 450px;
    display: flex;
    justify-content: space-between;

    div {
      padding: 30px 0;
      text-align: left;
    }

    h3 {
      display: inline-block;
      margin-left: 10px;
      font-size: 1.2rem;
      vertical-align: middle;
      text-transform: uppercase;
    }

    p {
      margin-top: 40px;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.grays.medium};
    }

    .icon {
      border-radius: 50%;
      padding: 10px;
      color: white;
      font-size: 1.5rem;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
    }

    @media (max-width: 768px) {
      height: auto;
    }
  }

  .icon-stars {
    color: ${({ theme }) => theme.colors.star};
    font-size: 1.2rem;
  }

  .diferenciais-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(max-width: 428px) {
    margin-top: 24px;
  }
`;

/* Estilos dos quadrados */
export const BoxConteudo = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.boxes.conteudo.background};
  box-shadow: 5px 6px 0px
    ${({ theme }) => theme.colors.boxes.conteudo.shadow};
  .icon-conteudo {
    background-color: ${({ theme }) => theme.colors.boxes.conteudo.icon};
  }
`;
export const BoxMaterial = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.boxes.material.background};
  box-shadow: 5px 6px 0px
    ${({ theme }) => theme.colors.boxes.material.shadow};
  .icon-material {
    background-color: ${({ theme }) => theme.colors.boxes.material.icon};
  }
`;
export const BoxCertificado = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.boxes.certificado.background};
  box-shadow: 5px 6px 0px
    ${({ theme }) => theme.colors.boxes.certificado.shadow};
  .icon-certificado {
    background-color: ${({ theme }) => theme.colors.boxes.certificado.icon};
  }
`;
