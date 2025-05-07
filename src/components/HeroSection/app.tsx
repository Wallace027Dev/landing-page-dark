"use client";

import mainHero from "@/assets/main-hero.png";

import Image from "next/image";

import { HeroContainer, HeroImage, Section, InfoAndButton } from "./style";
import ModalSection from "../ModalSection/app";

export default function HeroSection() {
  return (
    <>
      <Section>
        <HeroContainer>
          {/* Texto e botão à esquerda */}
          <InfoAndButton>
            <h1>Transforme sua carreira e amplie suas possibilidades.</h1>
            <ModalSection />
          </InfoAndButton>
          {/* Imagem à direita */}
          <HeroImage>
            <Image src={mainHero} alt="Imagem" width={658} height={614} />
          </HeroImage>
        </HeroContainer>
      </Section>
    </>
  );
}
