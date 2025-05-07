"use client";

import instrutorHero from "@/assets/instrutor-hero.svg";
import alunoHero from "@/assets/aluno-hero.svg";
import { ContactsContainer, Section } from "./style";
import Image from "next/image";
import ModalSection from "../ModalSection/app";
export default function ContactsSection() {
  return (
    <Section id="contatos">
      <ContactsContainer>
        <Image
          src={instrutorHero}
          alt="Hero do instrutor"
          width={200}
          height={200}
        />
        <div>
          <h2>Torne-se um instrutor</h2>
          <p>Quer trabalhar conosco? Mande seu currículo.</p>
          <ModalSection buttonText="Envia aqui!" />
        </div>
      </ContactsContainer>

      <ContactsContainer>
        <Image src={alunoHero} alt="Hero do aluno" width={200} height={200} />
        <div>
          <h2>Quer estudar?</h2>
          <p>
            Caso queira se matricular, entre em contato conosco e conheça nossa
            proposta.
          </p>
          <ModalSection buttonText="Envia aqui!" />
        </div>
      </ContactsContainer>
    </Section>
  );
}
