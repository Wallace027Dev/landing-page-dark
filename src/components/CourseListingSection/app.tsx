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
import coursesData from "@/mocks/coursesCard.json";

import ModalSection from "../ModalSection/app";

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
              <span
                className={activeTab === "english" ? "active" : ""}
                onClick={() => handleTabClick("english")}
              >
                Inglês
              </span>
              <span
                className={activeTab === "design" ? "active" : ""}
                onClick={() => handleTabClick("design")}
              >
                Design
              </span>
              <span
                className={activeTab === "programming" ? "active" : ""}
                onClick={() => handleTabClick("programming")}
              >
                Programação
              </span>
              <span
                className={activeTab === "administration" ? "active" : ""}
                onClick={() => handleTabClick("administration")}
              >
                Administração
              </span>
            </CourseTabs>

            <TabLine />

            {/* Conteúdo de cada aba */}
            <CourseListing activeTab={activeTab} coursesData={coursesData} />

            {/* <!-- Botão final de ação --> */}
            <br />
            <ModalSection />
          </CoursesContainer>
        </Section>
      )}
    </>
  );
}
