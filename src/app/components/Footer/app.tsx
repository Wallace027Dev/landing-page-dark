"use client"

import Image from "next/image";

import prismaLogo from "@/public/assets/prisma-logo.svg";

import { FooterContainer } from "./style";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterContainer>
      <section className="prisma-logo-container">
        <Image src={prismaLogo} alt="Logo da Prisma" />
        <p>
          Copyright © 2024 PrismaTech. All Rights Reserved | Política de
          Privacidade | Termos de Uso | Ajuda
        </p>
      </section>
      <section className="social-media-container">
        <p>Copyright © 2024 PrismaTech</p>
        <div>
          <Link target="_blank" href="https://www.facebook.com/prismatechcode">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link target="_blank" href="https://www.instagram.com/tech_prisma">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link target="_blank" href="https://www.youtube.com/@EnsinoImugi">
            <i className="bi bi-youtube"></i>
          </Link>
        </div>
      </section>
    </FooterContainer>
  );
}
