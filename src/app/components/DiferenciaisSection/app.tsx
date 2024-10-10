"use client"

import {
  BoxCertificado,
  BoxConteudo,
  BoxMaterial,
  DiferenciaisBox,
  DiferenciaisContainer,
  Section
} from "./style";

export default function DiferenciaisSection() {
  return (
    <Section id="diferenciais">
        <DiferenciaisContainer>
          {/* <!-- Título diferencial --> */}
          <span className="section-title">Diferencial</span>

          {/* <!-- Título maior e descrição --> */}
          <h2>Por que fazer conosco?</h2>
          <p>
            Nossos diferenciais vão te auxiliar a alcançar seu desenvolvimento
            profissional.
          </p>

          {/* <!-- Blocos diferenciais --> */}
          <DiferenciaisBox>
            {/* <!-- Primeiro quadrado (Conteúdo) --> */}
            <BoxConteudo className="box-diferencial">
              <div>
                <i className="bi bi-mortarboard icon icon-conteudo diferenciais-icon" />
                <h3>Conteúdo</h3>
                <p>
                  Nossos cursos são curados com conteúdo de qualidade para
                  auxiliar sua carreira.
                </p>
              </div>
              <i className="bi bi-stars icon-stars" />
              {/* <!-- Icone de estrelinhas no canto superior direito --> */}
            </BoxConteudo>

            {/* <!-- Segundo quadrado (Material didático) --> */}
            <BoxMaterial className="box-diferencial">
              <div>
                <i className="bi bi-book icon icon-material diferenciais-icon" />
                {/* <!-- Ícone de livro --> */}
                <h3>Material Didático</h3>
                <p>Nosso material didático é 100% digital.</p>
              </div>
              <i className="bi bi-stars icon-stars" />
              {/* <!-- Ícone de estrelinhas --> */}
            </BoxMaterial>

            {/* <!-- Terceiro quadrado (Certificado) --> */}
            <BoxCertificado className="box-diferencial">
              <div>
                <i className="bi bi-award icon icon-certificado diferenciais-icon" />
                {/* <!-- Ícone de certificado --> */}
                <h3>Certificado</h3>
                <p>Emitimos um certificado de horas comprovando seu empenho.</p>
              </div>
              <i className="bi bi-stars icon-stars" />
              {/* <!-- Ícone de estrelinhas --> */}
            </BoxCertificado>
          </DiferenciaisBox>
        </DiferenciaisContainer>
      </Section>
  )
}
