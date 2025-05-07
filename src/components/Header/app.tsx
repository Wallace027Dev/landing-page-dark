"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  HeaderPar,
  HeaderContainer,
  LinkList,
  LinksContainer,
  Nav,
  MobileNav,
} from "./style";

import prismaLogoGrande from "@/assets/light-logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderPar isScrolled={isScrolled} id="home" >
      {/* Passando o estado para o HeaderPar */}
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
          <i style={{ display: "none" }} className=" bi bi-search"></i>
          <i style={{ display: "none" }} className=" bi bi-bag"></i>
          <i style={{ display: "none" }} className=" bi bi-person"></i>
          <Link target="_blank" href="https://wa.me/2732071125?text=Gostaria de me cadastrar na sua plataforma.">Cadastre-se</Link>
        </LinksContainer>

        {/* <!-- Menu Mobile --> */}
        <MobileNav aberto={menuAberto}>
          <Link href="#home">Home</Link>
          <Link href="#diferenciais">Sobre</Link>
          <Link href="#cursos">Serviços</Link>
          <Link href="#workshop">Workshops</Link>
          <Link href="#contatos">Contato</Link>
        </MobileNav>

        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="menu-mobile-btn"
        >
          <i className="bi bi-list" style={{ fontSize: "2rem", color: "#fff" }}></i>
        </button>
      </HeaderContainer>
    </HeaderPar>
  );
}
