"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const PHONE_DISPLAY = "+94 75 253 0495";
const PHONE_TEL = "+94752530495";
const EMAIL = "hello@ietservice.lk";
const WHATSAPP = "https://wa.me/94752530495";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.2 2.8 4.4 4.1c-.8.4-1.2 1.3-1 2.2 1.4 7.2 7.1 12.9 14.3 14.3.9.2 1.8-.2 2.2-1l1.3-2.8c.4-.9.1-2-.8-2.5l-3.2-1.8c-.8-.4-1.7-.3-2.3.3l-1.5 1.5a13.8 13.8 0 0 1-3.7-3.7l1.5-1.5c.6-.6.7-1.6.3-2.3L9.7 3.6c-.5-.9-1.6-1.2-2.5-.8Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.5 5.5h17A1.5 1.5 0 0 1 22 7v10a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17V7a1.5 1.5 0 0 1 1.5-1.5Zm0 2 8.5 5.9 8.5-5.9" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.6A8.5 8.5 0 0 1 7.9 19l-4.4 1.2 1.2-4.3A8.5 8.5 0 1 1 20.5 11.6Z" />
      <path d="M8.2 7.6c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.7 1.2 1.6 2.1 2.9 2.7.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.4.3.4.5 0 .5-.3 1.5-.7 1.9-.5.5-1.2.8-2 .8-.7 0-1.7-.2-3.3-.9-2.4-1-4.2-2.9-5.3-5.3-.5-1.1-.5-2-.3-2.7.2-.6.5-1 .8-1.3Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.7 2.8h4.6l.6 2.2 1.3.6 2-.9 3.2 3.2-.9 2 .6 1.3 2.2.6v4.6l-2.2.6-.6 1.3.9 2-3.2 3.2-2-.9-1.3.6-.6 2.2H9.7l-.6-2.2-1.3-.6-2 .9-3.2-3.2.9-2-.6-1.3-2.2-.6v-4.6l2.2-.6.6-1.3-.9-2 3.2-3.2 2 .9 1.3-.6.6-2.2Z" />
      <circle cx="12" cy="14.1" r="3.2" />
    </svg>
  );
}

export default function ComingSoonPage() {
  const shell = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = shell.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    const onMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      el.style.setProperty("--scene-x", `${x * -12}px`);
      el.style.setProperty("--scene-y", `${y * -8}px`);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <main className="site-shell" ref={shell}>
      <div className="technical-grid" aria-hidden="true" />
      <div className="orange-ambient" aria-hidden="true" />

      <header className="site-header">
        <div className="brand-lockup">
          <Image
            src="/brand/iet-service-point-logo.png"
            alt="IET Service Point"
            width={150}
            height={118}
            priority
          />
          <div className="brand-copy">
            <strong>IET SERVICE</strong>
            <strong className="point">POINT</strong>
            <span>TVS Authorized Three-Wheeler Dealer</span>
          </div>
        </div>

        <div className="header-tagline" aria-hidden="true">
          <span>TRUSTED SERVICE</span>
          <i />
          <span>GENUINE PARTS</span>
          <i />
          <span>BETTER JOURNEYS</span>
        </div>

        <div className="header-actions">
          <a href={`tel:${PHONE_TEL}`} aria-label={`Call ${PHONE_DISPLAY}`}>
            <PhoneIcon />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a href={`mailto:${EMAIL}`} aria-label={`Email ${EMAIL}`}>
            <MailIcon />
            <span>{EMAIL}</span>
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-scene" aria-hidden="true">
          <Image
            src="/media/iet-cinematic-scene.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, 65vw"
            className="scene-image"
          />
          <div className="scene-mask" />
        </div>

        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" />
            A NEW DIGITAL EXPERIENCE IS ARRIVING
          </div>

          <h1>
            <span>SERVICE</span>
            <em>REIMAGINED.</em>
          </h1>

          <p className="lead">
            We&apos;re building a better way to discover services, find genuine parts
            and connect with IET Service Point.
          </p>

          <div className="proof-row">
            <div>
              <span>AUTHORIZED</span>
              <strong>TVS Three-Wheeler Dealer</strong>
            </div>
            <div className="proof-rule" />
            <div>
              <span>AVAILABLE</span>
              <strong>TVS Genuine Parts</strong>
            </div>
          </div>

          <div className="cta-row">
            <a className="cta cta-primary" href={`tel:${PHONE_TEL}`}>
              <PhoneIcon />
              <span>Call IET</span>
              <ArrowIcon />
            </a>

            <a
              className="cta cta-secondary"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
              <ArrowIcon />
            </a>
          </div>

          <div className="jaffna-signature">
            <span>From Jaffna</span>
            <i />
            <small>FOR A SMOOTHER TOMORROW</small>
          </div>
        </div>

        <div className="mobile-scene" aria-hidden="true">
          <Image
            src="/media/iet-cinematic-scene.webp"
            alt=""
            fill
            sizes="100vw"
            className="scene-image"
          />
        </div>
      </section>

      <section className="launch-panel" aria-label="Website launch progress">
        <div className="launch-status">
          <span>NEW WEBSITE</span>
          <div className="progress-line">
            <div className="progress-fill" />
          </div>
          <strong>72%</strong>
        </div>

        <div className="feature">
          <GearIcon />
          <span>EXPANDED<br />SERVICES</span>
        </div>

        <div className="feature">
          <span className="feature-icon">▣</span>
          <span>EASY PARTS<br />ENQUIRY</span>
        </div>

        <div className="feature">
          <span className="feature-icon">▦</span>
          <span>ONLINE<br />BOOKING</span>
        </div>

        <div className="feature">
          <span className="feature-icon">◎</span>
          <span>BIGGER<br />COMMUNITY</span>
        </div>

        <div className="next-chapter">
          <span>NEXT CHAPTER</span>
          <strong>Better service. Better experience.</strong>
          <ArrowIcon />
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} IET Service Point. All rights reserved.</span>
        <span>INUVIL&nbsp;&nbsp;|&nbsp;&nbsp;JAFFNA&nbsp;&nbsp;|&nbsp;&nbsp;NORTHERN PROVINCE&nbsp;&nbsp;|&nbsp;&nbsp;SRI LANKA</span>
        <a href="https://ietservice.lk">ietservice.lk</a>
      </footer>
    </main>
  );
}
