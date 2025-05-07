"use client";

import Image from "next/image";

import {
  ContentInfo,
  InfoWorkshopContainer,
  PedagogicalInfo,
  WorkshopContainer,
  WorkshopInfo,
  Section,
} from "./style";

import workshopHero from "@/assets/workshop-hero.png";
import workshopContentIcon from "@/assets/workshop-content-icon.svg";
import graduationHatIcon from "@/assets/graduation-hat-icon.svg";
import ModalSection from "../ModalSection/app";

export default function WorkshopSection() {
  return (
    <Section id="workshop">
      <WorkshopContainer>
        {/* Imagem á esquerda */}
        <Image
          src={workshopHero}
          alt="Hero da seção do workshop"
          layout="responsive"
          width={700}
          height={400}
          priority
        />
        {/* Seção de informações sobre o workshops */}
        <InfoWorkshopContainer>
          <span className="section-title">Workshop Free</span>
          <h2>Conheça os nossos cursos</h2>
          <p>
            Ofertamos workshops regulares gratuitos para complementar o conteúdo
            dos cursos que são oferecidos.
          </p>
          <WorkshopInfo>
            <ContentInfo>
              <span>
                {/* Otimização do SVG com Next.js Image */}
                <Image
                  src={workshopContentIcon}
                  alt="Ícone de tela com gráficos"
                  width={45}
                  height={35}
                />
              </span>
              <p>Conteúdos pertinentes</p>
            </ContentInfo>
            <PedagogicalInfo>
              <span>
                <Image
                  src={graduationHatIcon}
                  alt="Ícone de chapéu de formatura"
                  width={35}
                  height={35}
                />
              </span>
              <p>Complementação pedagógica</p>
            </PedagogicalInfo>
          </WorkshopInfo>
          <ModalSection />
        </InfoWorkshopContainer>
      </WorkshopContainer>
    </Section>
  );
}
