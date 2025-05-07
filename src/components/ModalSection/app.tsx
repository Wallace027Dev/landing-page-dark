import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ButtonModal,
  DivSection,
} from "../ModalSection/style";

interface LocationButtonProps {
  label: string;
  phoneNumber: string;
  message: string;
}

interface ModalSectionProps {
  buttonText?: string; // Prop para texto do botão principal
}

const ModalSection: React.FC<ModalSectionProps> = ({
  buttonText = "Comece agora",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const locations: LocationButtonProps[] = [
    {
      label: "Fortaleza, Ceará: Messejana",
      phoneNumber: "5527999156128",
      message:
        "Olá! Gostaria de informações sobre as aulas em Fortaleza, Ceará: Messejana.",
    },
    {
      label: "Vitória, Espírito Santo: Santa Lúcia",
      phoneNumber: "5527987654321",
      message:
        "Olá! Gostaria de informações sobre as aulas em Vitória, Espírito Santo: Santa Lúcia.",
    },
    {
      label: "Vitória, Espírito Santo: Centro",
      phoneNumber: "5527987654322",
      message:
        "Olá! Gostaria de informações sobre as aulas em Vitória, Espírito Santo: Centro.",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const redirectToWhatsApp = (phoneNumber: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Botão principal estilizado */}
      <ButtonModal onClick={openModal}>
        <span className="btn-button button ">
          {buttonText} <i className="bi bi-arrow-right"></i>
        </span>
      </ButtonModal>
      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>Bem vindo à Prisma Tech</h2>
            <p>Escolha seu local e garanta sua vaga!</p>
            <DivSection>
              {locations.map(({ label, phoneNumber, message }, index) => (
                <ButtonModal
                  key={index}
                  className="button"
                  onClick={() => redirectToWhatsApp(phoneNumber, message)}
                >
                  <span className="button buttonModal">
                    {label} <i className="bi bi-arrow-right"></i>
                  </span>
                </ButtonModal>
              ))}
            </DivSection>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default ModalSection;
