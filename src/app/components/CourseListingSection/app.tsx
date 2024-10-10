"use client";

import { useState } from "react";

import {
  Section,
  CourseListingTitle,
  CoursesContainer,
  CourseTabs,
  TabLine,
} from "./style";
import CourseListing from "../CourseListing/app";
import coursesData from "@/app/mocks/coursesCard.json";
import Link from "next/link";

export default function CourseListingSection() {
  const [activeTab, setActiveTab] = useState("english");

  const handleTabClick = (course: string) => {
    setActiveTab(course);
  };

  return (
    <>
      {coursesData.courses.length > 0 && (
        <Section id="cursos">
          <CoursesContainer>
            {/* <!-- Título da seção --> */}
            <CourseListingTitle>
              <div className="section-title">
                <span>Nossos cursos</span>
              </div>
              <h2>Conheça os nossos cursos</h2>
              <p className="section-description">
                4 áreas de atuação diversificadas e completas.
              </p>
            </CourseListingTitle>

            {/* Tabs para seleção de cursos */}
            <CourseTabs>
              <div
                className={activeTab === "english" ? "active" : ""}
                onClick={() => handleTabClick("english")}
              >
                Inglês
              </div>
              <div
                className={activeTab === "design" ? "active" : ""}
                onClick={() => handleTabClick("design")}
              >
                Design
              </div>
              <div
                className={activeTab === "programming" ? "active" : ""}
                onClick={() => handleTabClick("programming")}
              >
                Programação
              </div>
              <div
                className={activeTab === "administration" ? "active" : ""}
                onClick={() => handleTabClick("administration")}
              >
                Administração
              </div>
            </CourseTabs>

            <TabLine />

            {/* Conteúdo de cada aba */}
            <CourseListing activeTab={activeTab} coursesData={coursesData} />

            {/* <!-- Botão final de ação --> */}
            <Link
              target="_blank"
              href="https://wa.me/2732071125?text=Gostaria de saber mais sobre seus cursos"
              className="btn arrow-button"
            >
              Conheça já<i className="bi bi-arrow-right"></i>
            </Link>
          </CoursesContainer>
        </Section>
      )}
    </>
  );
}
