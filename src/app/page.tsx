"use client";
import { useEffect, useState } from "react";

import Header from "./components/Header/app";
import CourseListingSection from "./components/CourseListingSection/app";
import DiferenciaisSection from "./components/DiferenciaisSection/app";
import HeroSection from "./components/HeroSection/app";
import WorkshopSection from "./components/WorkshopSection/app";
import TestimonialSection from "./components/TestimonialSection/app";
import ContactsSection from "./components/ContactsSection/app";
import Footer from "./components/Footer/app";
import LearnSection from "./components/LearnSection/app";
import LoaderContainer from "./components/LoaderContainer/App";
import { ThemeProvider } from "styled-components";
import designSystem from "@/designSystem";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulando um carregamento de página
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={designSystem}>
      {isLoading ? (
        <LoaderContainer />
      ) : (
        <>
          {/* <!-- Header desta página --> */}
          <Header />

          {/* <!-- Seção Hero --> */}
          <HeroSection />

          {/* <!-- Seção Diferenciais --> */}
          <DiferenciaisSection />

          {/* <!-- Seção de "o que você vai aprender?" --> */}
          <LearnSection />

          {/* <!-- Seção de listagem cursos --> */}
          <CourseListingSection />

          {/* <!-- Seção de workshop  --> */}
          <WorkshopSection />

          {/* <!-- Seção de depoimentos  --> */}
          <TestimonialSection />

          {/* <!-- Seção de contatos de emprego e estudos  --> */}
          <ContactsSection />

          {/* <!-- Footer desta página  --> */}
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}
