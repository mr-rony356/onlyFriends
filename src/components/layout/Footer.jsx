import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const logo = "/assets/logo.svg";
  const whatsapp = "/assets/whatsapp.png";

  return (
    <footer className="footer">
      <Link href="/">
        <Image
          src={logo}
          width={500}
          height={500}
          alt="logo"
          className="logo__support"
          loading="lazy"
        />
      </Link>
      <div className="footer__links">
        <Link href={"/imprint"} className="footer__link">
          Impressum
        </Link>
        <Link href={"/privacy"} className="footer__link">
          Datenschutzerklärung
        </Link>
        <Link href={"/agb"} className="footer__link">
          AGB
        </Link>
      </div>
      <div style={{ width: "fit-content" }} className="card support__content">
        <div className="support__oppening">
          <h3 style={{ color: "white" }}>Support-Hotline</h3>
          <p style={{ color: "white" }} className="support__oppeningHours">
            (Montag - Freitag 09:00 - 18:00 Uhr){" "}
          </p>
        </div>
        <Link
          style={{ display: "inline-flex", width: "100%" }}
          className="lineButton support__number"
          href={`tel:+41766718852`}
        >
          {"Tel. +41 76 671 88 52"}
        </Link>
        <Link href={"https://wa.me/+41766718852"}>
          <button className="support__button">
            {" "}
            <img
              alt="support__icon"
              width={100}
              height={100}
              src={whatsapp}
              className="support__icon"
            />{" "}
            Whatsapp
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
