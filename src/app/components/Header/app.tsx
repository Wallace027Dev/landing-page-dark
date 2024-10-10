"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react"; // Importando useEffect e useState para controle de estado
import {
  HeaderPar,
  HeaderContainer,
  LinkList,
  LinksContainer,
  Nav,
} from "./style";

import prismaLogoGrande from "@/public/assets/light-logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false); // Estado para rastrear se a página foi rolada

  const handleScroll = () => {
    const currentScrollY = window.scrollY; // Obtém a posição atual do scroll
    setIsScrolled(currentScrollY > 0); // Atualiza o estado com base na posição do scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Adiciona o listener de scroll

    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpa o listener ao desmontar o componente
    };
  }, []);

  return (
    <HeaderPar isScrolled={isScrolled} id="home"> {/* Passando o estado para o HeaderPar */}
      <HeaderContainer>
        <Link href="/">
          <Image src={prismaLogoGrande} alt="Logo" width={246} />
        </Link>

        {/* <!-- Menu Links --> */}
        <Nav>
          <LinkList>
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#diferenciais">Sobre</Link>
            </li>
            <li>
              <Link href="#cursos">Serviços</Link>
            </li>
            <li>
              <Link href="#workshop">Workshops</Link>
            </li>
            <li>
              <Link href="#contatos">Contato</Link>
            </li>
          </LinkList>
        </Nav>

        {/* <!-- Icones e botão --> */}
        <LinksContainer>
          <i className="bi bi-search"></i>
          <i className="bi bi-bag"></i>
          <i className="bi bi-person"></i>
          <Link target="_blank" href="https://wa.me/2732071125?text=Gostaria de me cadastrar na sua plataforma.">Cadastre-se</Link>
        </LinksContainer>
      </HeaderContainer>
    </HeaderPar>
  );
}
