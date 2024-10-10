"use client";

import instrutorHero from "@/public/assets/instrutor-hero.svg";
import alunoHero from "@/public/assets/aluno-hero.svg";

import { ContactsContainer, Section } from "./style";
import Image from "next/image";
import Link from "next/link";

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
          <Link
            target="_blank"
            href="https://wa.me/2732071125?text=Gostaria de ser um instrutor"
            className="arrow-button"
          >
            Envie já!<i className="bi bi-arrow-right"></i>
          </Link>
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
          <Link
            target="_blank"
            href="https://wa.me/2732071125?text=Gostaria de ser um aluno"
            className="arrow-button"
          >
            Envie já!<i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </ContactsContainer>
    </Section>
  );
}
