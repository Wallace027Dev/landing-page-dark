"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import {
  MoreTestimonials,
  NewsletterContainer,
  PersonalImage,
  PersonalInfoContainer,
  PersonalRating,
  PersonalSocialMediasContainer,
  PersonalTestimonialContainer,
  PersonsMiniatures,
  TestimonialsContainer,
  Section,
} from "./style";

import evelynFoto from "@/public/assets/evelyn-depoimento.png";

import heroNewsletter from "@/public/assets/hero-newsletter.svg";
import newsletterShape from "@/public/assets/newsletter-shape.svg";
import depoimentoBackground from "@/public/assets/depoimento-background-container.svg";

import testimonials from "@/app/mocks/testimonials.json";
import { useState } from "react";
import { ITestimonial } from "@/app/interfaces/ITestimonial";

export default function TestimonialSection() {
  const personPhoto: { [key: string]: StaticImageData } = {
    evelynFoto,
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
            <PersonalSocialMediasContainer>
              <a
                href={`https://facebook.com/${selectedTestimonial.facebookUrl}`}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href={`https://instagram.com/${selectedTestimonial.instagramUrl}`}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href={`https://wa.me/${selectedTestimonial.phone}?text=Gostaria de conhecer sua empresa`}
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </PersonalSocialMediasContainer>
            <Link
              target="_blank"
              href={`https://wa.me/${selectedTestimonial.phone}?text=Gostaria de conhecer sua empresa`}
              className="btn arrow-button"
            >
              Conheça já<i className="bi bi-arrow-right"></i>
            </Link>
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
                    src={personPhoto[testimonial.perfilPhoto]}
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

      <NewsletterContainer>
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
