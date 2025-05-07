import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Fundo escurecido */
  backdrop-filter: blur(1px); /* Desfoque aplicado ao fundo */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Garante que o modal fique no topo */
`;

export const ModalContent = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    20deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(3, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  h2 {
    font-size: 2.1rem;
    font-weight: 600;
    margin: 24px 0;
    max-width: 300px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 30px;
    color: #ffff;
    max-width: 800px;
    opacity: 0.9;
  }
`;

export const ButtonModal = styled.span`
  .button {
    background: #08afe6;
    border: none;
    color: white;
    border-radius: 50px;
    padding: 15px 30px;
    font-size: 1.1rem;
    box-shadow: 4px 6px 0px 0px #050071;
    text-decoration: none;
    display: inline-block;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.4s;
    text-align: center;
    min-width: 150px;
    height: 100%;
  }
  .buttonModal {
    width: 100%;
    max-width: 408px;
    height: 56px;
  }

  .button i {
    margin-left: 4px;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: width 0.4s ease;
    z-index: 0;
  }

  .button:hover::before {
    width: 100%;
  }

  .button span,
  .button i {
    position: relative;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    .button {
      font-size: 1rem;
      padding: 20px 20px; /* Ajusta o padding para o mobile */
    }

    .button span {
      white-space: nowrap; /* Evita quebra de linha no texto */
      overflow: hidden;
      text-overflow: ellipsis; /* Adiciona reticências se o texto for muito longo */
    }
  }
`;
export const DivSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

