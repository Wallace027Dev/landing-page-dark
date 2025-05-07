"use client";

import Image from "next/image";

import {
  ArrowContainer,
  ArrowIcon,
  ArrowText,
  ImageContainer,
  InfoLearnContainer,
  LearnContainer,
  Section,
} from "./style";

import learnSectionImage from "@/assets/learnSection.png";
import chevronRight from "@/assets/chevron-right.svg";
import ModalSection from "../ModalSection/app";

export default function LearnSection() {
  return (
    <Section>
      <LearnContainer>
        <ImageContainer>
          <Image
            src={learnSectionImage}
            alt="Imagem Grande"
            width="450"
            height="562"
          />
        </ImageContainer>
        <InfoLearnContainer>
          <span className="section-title">Aprenda no seu tempo</span>
          <h2>Vantagens de aprender online</h2>
          <p>
            Dê um up na sua carreira, ampliando seus horizontes profissionais,
            qualificando-se e desenvolvendo suas habilidades.
          </p>
          <div>
            <ArrowContainer>
              <ArrowIcon>
                <Image
                  src={chevronRight}
                  width={16}
                  height={16}
                  alt="Seta para direita"
                />
              </ArrowIcon>
              <ArrowText id="#comece-agora">Aprenda no seu tempo</ArrowText>
            </ArrowContainer>
            <ArrowContainer>
              <ArrowIcon>
                <Image
                  src={chevronRight}
                  width={16}
                  height={16}
                  alt="Seta para direita"
                />
              </ArrowIcon>
              <ArrowText id="#comece-agora">Flexibilidade de horário</ArrowText>
            </ArrowContainer>
            <ArrowContainer>
              <ArrowIcon>
                <Image
                  src={chevronRight}
                  width={16}
                  height={16}
                  alt="Seta para direita"
                />
              </ArrowIcon>
              <ArrowText id="#comece-agora">Preço acessível</ArrowText>
            </ArrowContainer>
          </div>
          <ModalSection />
        </InfoLearnContainer>
      </LearnContainer>
    </Section>
  );
}
