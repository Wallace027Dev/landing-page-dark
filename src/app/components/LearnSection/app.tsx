"use client"

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

import learnSectionImage from "@/public/assets/learnSectionImage.png";
import Link from "next/link";

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
                  <i className="bi bi-chevron-right"></i>
                </ArrowIcon>
                <ArrowText id="#comece-agora">Aprenda no seu tempo</ArrowText>
              </ArrowContainer>
              <ArrowContainer>
                <ArrowIcon>
                  <i className="bi bi-chevron-right"></i>
                </ArrowIcon>
                <ArrowText id="#comece-agora">
                  Flexibilidade de horário
                </ArrowText>
              </ArrowContainer>
              <ArrowContainer>
                <ArrowIcon>
                  <i className="bi bi-chevron-right"></i>
                </ArrowIcon>
                <ArrowText id="#comece-agora">Preço acessível</ArrowText>
              </ArrowContainer>
            </div>
            <Link target="_blank" href="https://wa.me/2732071125?text=Gostaria de saber mais sobre os diferenciais dos seus cursos." className="arrow-button">
              Comece agora<i className="bi bi-arrow-right"></i>
            </Link>
          </InfoLearnContainer>
        </LearnContainer>
      </Section>
  )
}
