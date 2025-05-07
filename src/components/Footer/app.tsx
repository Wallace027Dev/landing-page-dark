"use client";

import { FooterContainer } from "./style";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterContainer>
      <section className="prisma-logo-container"></section>
      <section className="social-media-container">
        <p>Copyright © {new Date().getFullYear()} PrismaTech</p>
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
