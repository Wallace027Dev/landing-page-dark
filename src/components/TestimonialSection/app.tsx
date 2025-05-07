"use client";

import Image, { StaticImageData } from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import {
  MoreTestimonials,
  NewsletterContainer,
  PersonalImage,
  PersonalInfoContainer,
  PersonalRating,
  PersonalTestimonialContainer,
  PersonsMiniatures,
  TestimonialsContainer,
  Section,
} from "./style";

import alanaPhoto from "@/assets/alana.png";
import alanaMiniatura from "@/assets/alana-miniatura.png";
import hevellyPhoto from "@/assets/hevelly.png";
import hevellyMiniatura from "@/assets/hevelly-miniatura.png";
import josuePhoto from "@/assets/josue.png";
import josueMiniatura from "@/assets/josue-miniatura.png";
import liviaPhoto from "@/assets/livia.png";
import liviaMiniatura from "@/assets/livia-miniatura.png";
import brenoPhoto from "@/assets/Breno.png";
import brenoMiniatura from "@/assets/breno-miniatura.png";
import morianPhoto from "@/assets/morian.png";
import morianMiniatura from "@/assets/morian-miniatura.png";
import heroNewsletter from "@/assets/hero-newsletter.svg";
import newsletterShape from "@/assets/newsletter-shape.svg";
import depoimentoBackground from "@/assets/depoimento-background-container.svg";

import testimonials from "@/mocks/testimonials.json";
import { useState } from "react";
import { ITestimonial } from "@/interfaces/ITestimonial";
import ModalSection from "../ModalSection/app";

export default function TestimonialSection() {
  const personPhoto: { [key: string]: StaticImageData } = {
    alanaPhoto,
    hevellyPhoto,
    josuePhoto,
    liviaPhoto,
    brenoPhoto,
    morianPhoto,
  };
  const miniaturaPhoto: { [key: string]: StaticImageData } = {
    alanaMiniatura,
    hevellyMiniatura,
    josueMiniatura,
    liviaMiniatura,
    brenoMiniatura,
    morianMiniatura,
  };

  const [selectedTestimonial, setSelectedTestimonial] = useState<ITestimonial>(
    testimonials[0]
  );

  function handleSelectedTestimonial(testimonial: ITestimonial) {
    setSelectedTestimonial(testimonial);
  }

  return (
    <Section>
      <TestimonialsContainer>
        <span className="section-title">Depoimentos</span>
        <h2>
          O que nossos alunos
          <br />
          estão dizendo
        </h2>
        <PersonalTestimonialContainer key={selectedTestimonial.id}>
          <PersonalImage>
            <Image
              className="background-container"
              src={depoimentoBackground}
              alt="Depoimento background container"
              width={400}
              height={400}
            />
            <Image
              className="pessoa-foto"
              src={personPhoto[selectedTestimonial.perfilPhoto]}
              alt={selectedTestimonial.altPhoto}
              width={465}
              height={450}
            />
          </PersonalImage>
          <PersonalInfoContainer>
            <PersonalRating>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
              <span> ({selectedTestimonial.rating} Ratings)</span>
            </PersonalRating>
            <h3>{selectedTestimonial.name}</h3>
            <h4>{selectedTestimonial.areaOfActivity}</h4>
            <p>{selectedTestimonial.testimonial}</p>
            <ModalSection />
          </PersonalInfoContainer>
        </PersonalTestimonialContainer>

        <MoreTestimonials>
          <Splide
            options={{
              perPage: 5,
              breakpoints: {
                1440: {
                  perPage: 4,
                },
                700: {
                  perPage: 3,
                },
                525: {
                  perPage: 2,
                },
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SplideSlide key={testimonial.id}>
                <PersonsMiniatures
                  className={
                    selectedTestimonial.id === testimonial.id ? "active" : ""
                  }
                >
                  <Image
                    src={miniaturaPhoto[testimonial.miniaturaPhoto]}
                    alt={testimonial.altPhoto}
                    width={90}
                    height={90}
                    onClick={() => handleSelectedTestimonial(testimonial)}
                  />
                </PersonsMiniatures>
              </SplideSlide>
            ))}
          </Splide>
        </MoreTestimonials>
      </TestimonialsContainer>

      <NewsletterContainer style={{ display: "none" }}>
        <Image
          src={heroNewsletter}
          alt="Hero para newsletter"
          width={300}
          height={200}
        />
        <div className="input-group">
          <h2>Inscreva-se em nossa Newsletter</h2>
          <div>
            <input type="text" placeholder="Digite Seu E-Mail" />
          </div>
        </div>
        <div className="button-group">
          <Image
            src={newsletterShape}
            alt="Linha decorativa"
            width={200}
            height={20}
          />
          <button>Enviar</button>
        </div>
      </NewsletterContainer>
    </Section>
  );
}
