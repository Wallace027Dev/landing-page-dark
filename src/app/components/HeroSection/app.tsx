"use client";

import mainHero from "@/public/assets/main-hero.png";

import Link from "next/link";
import Image from "next/image";

import { HeroContainer, HeroImage, Section, InfoAndButton } from "./style";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function HeroSection() {
  return (
    <>
      <Splide
        options={{
          perPage: 1,
          type: "loop",
          height: "100%",
          arrows: false,
          autoplay: true,
          interval: 7500,
        }}
      >
        {/* Primeiro Slide */}
        <SplideSlide>
          <Section>
            <HeroContainer>
              {/* Texto e botão à esquerda */}
              <InfoAndButton>
                <h1>Transforme sua carreira e amplie suas possibilidades.</h1>
                <Link
                  target="_blank"
                  href="https://wa.me/2732071125?text=Gostaria de me cadastrar na sua plataforma."
                  className="arrow-button"
                >
                  Comece agora <i className="bi bi-arrow-right"></i>
                </Link>
              </InfoAndButton>

              {/* Imagem à direita */}
              <HeroImage>
                <Image src={mainHero} alt="Imagem" width={658} height={614} />
              </HeroImage>
            </HeroContainer>
          </Section>
        </SplideSlide>

        {/* Segundo Slide com Vídeo 1 */}
        <SplideSlide>
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100vw",
              height: "80vh",
              objectFit: "cover",
              overflow: "hidden",
            }}
          >
            <source src="/videos/videogame-1.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        </SplideSlide>

        {/* Terceiro Slide com Vídeo 2 */}
        <SplideSlide>
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100vw",
              height: "80vh",
              objectFit: "cover",
              overflow: "hidden",
            }}
          >
            <source src="/videos/videogame-2.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        </SplideSlide>

        {/* Quarto Slide com Vídeo 3 */}
        <SplideSlide>
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100vw",
              height: "80vh",
              objectFit: "cover",
              overflow: "hidden",
            }}
          >
            <source src="/videos/videogame-3.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        </SplideSlide>
      </Splide>
    </>
  );
}
