import React, { useEffect, useState } from "react";

const heroFacts = [
  {
    label: "Products",
    value: "ArmyRegs.ai & the Courtmartial App",
  },
  {
    label: "Focus",
    value: "Legal research, policy, and compliance tools",
  },
  {
    label: "Engagement",
    value: "Government buyers and prime subcontracting",
  },
];

const founderSignals = [
  {
    title: "Mission background",
    text: "Our principals have worked inside the kinds of legal environments this software serves. They know the users, the constraints, and what success looks like.",
  },
  {
    title: "Legal background",
    text: "Each principal brings advanced training in government, military, and national security law, which helps keep the work disciplined and precise.",
  },
  {
    title: "Technical background",
    text: "Lawyers do not just direct the work. They help build it, so product decisions stay close to the mission.",
  },
];

const capabilities = [
  {
    index: "01",
    title: "Research Tools",
    text: "Software for regulations, policy, doctrine, and governing authorities.",
    items: [
      "Built around real legal tasks",
      "No hallucinations",
      "Verifiable citations",
    ],
  },
  {
    index: "02",
    title: "Customizable RAG Soultions",
    text: "We use Retrieval-Augmented Generation (RAG) to create systems tied to the specific language of policy, regulatory, and compliance documents.",
    items: [
      "Configurable across new regulations, policiy documents, or administrative decisions.",
      "Citation-oriented outputs to make it easy to verify accuracy.",
    ],
  },
  {
    index: "03",
    title: "Closed-Network Support",
    text: "Development support for secured deployment environments.",
    items: [
      "Designed to work on secure networks with constrained connectivity.",
      "Customizable to fit specific data handling and security requirements.",
    ],
  },
];

const products = [
  {
    name: "ArmyRegs.ai",
    category: "Regulatory Intelligence",
    summary:
      "Army regulation research and analysis with source-based answers and precise, verifiable citations.",
    description:
      "Built for legal and operational users who need quick ACCURATE answers.",
    highlights: [
      "Source-grounded answers",
      "Citation-verifiable outputs",
      "Operationally relevant design",
    ],
    href: "https://armyregs.ai",
    cta: "Visit ArmyRegs.ai",
    image: "./ARAI.png",
    imageClass: "product-card__image--wide",
    theme: "olive",
  },
  {
    name: "Courtmartial App",
    category: "Military Justice Tools",
    summary: "A mobile reference tool for military justice work.",
    description: "Benchbook, resource, and MCM access where you need it.",
    highlights: [
      "Mobile-accessible Electronic Benchbook ",
      "Up-to-date MCM and resource library",
      "Built for practitioners by practitioners",
    ],
    image: "./CMApp.png",
    imageClass: "product-card__image--phone",
    theme: "slate",
  },
  {
    name: "Adaptable RAG Models",
    category: "Configurable, Accurate AI Frameworks",
    summary:
      "We can quickly and easily develop source-grounded AI models tailored to specific policy, regulatory, and compliance needs.",
    description:
      "Convert any body of regulations, policies, or compliance documents into accurate, verifiable AI outputs.",
    highlights: [
      "Source-based outputs",
      "Constrained deployment friendly",
      "Suitable for new compliance corpora",
    ],
    theme: "graphite",
  },
];

const securityPillars = [
  {
    title: "Source-grounded outputs",
    text: "Answers are designed to stay tied to governing material rather than drift away from it.",
  },
  {
    title: "Closed-network capable development",
    text: "The work can support environments where connectivity and deployment assumptions are tighter.",
  },
  {
    title: "Human review by design",
    text: "The tools are built to fit accountable workflows where people still need to review and decide.",
  },
];

const procurementFacts = [
  {
    label: "NAICS",
    value: "541511 / 541512 / 541519",
  },
  {
    label: "Business status",
    value: "Small Business",
  },
  {
    label: "Certification",
    value: "Veteran Owned ",
  },
  {
    label: "Development support",
    value: "Closed-network capable development",
  },
];

const showHeroActions = false;
const showCapabilityStatementButtons = false;
const showSecuritySection = false;
const showFooterProducts = false;
const showFooterProcurement = false;

export default function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    let frameId = null;

    const updateMobileHeaderScale = () => {
      frameId = null;

      if (!window.matchMedia("(max-width: 860px)").matches) {
        document.documentElement.style.removeProperty("--mobile-header-height");
        document.documentElement.style.removeProperty("--mobile-logo-height");
        document.documentElement.style.removeProperty("--mobile-menu-opacity");
        document.documentElement.style.removeProperty(
          "--mobile-menu-pointer-events",
        );
        return;
      }

      const scrollProgress = Math.min(window.scrollY / 180, 1);
      const compactHeaderHeight = 72;
      const previousExpandedLogoHeight = Math.min(window.innerWidth * 0.34, 128);
      const expandedLogoHeight = Math.min(
        previousExpandedLogoHeight * 2,
        window.innerHeight * 0.38,
        window.innerWidth * 0.72,
      );
      const expandedHeaderHeight = Math.max(
        compactHeaderHeight,
        expandedLogoHeight + 32,
        window.innerHeight * 0.2,
      );
      const compactLogoHeight = 48;
      const isHeaderCompact = scrollProgress === 1;

      const headerHeight =
        expandedHeaderHeight -
        (expandedHeaderHeight - compactHeaderHeight) * scrollProgress;
      const logoHeight =
        expandedLogoHeight -
        (expandedLogoHeight - compactLogoHeight) * scrollProgress;

      document.documentElement.style.setProperty(
        "--mobile-header-height",
        `${Math.round(headerHeight)}px`,
      );
      document.documentElement.style.setProperty(
        "--mobile-logo-height",
        `${Math.round(logoHeight)}px`,
      );
      document.documentElement.style.setProperty(
        "--mobile-menu-opacity",
        isHeaderCompact ? "1" : "0",
      );
      document.documentElement.style.setProperty(
        "--mobile-menu-pointer-events",
        isHeaderCompact ? "auto" : "none",
      );

      if (!isHeaderCompact) {
        setIsMobileNavOpen(false);
      }
    };

    const requestHeaderUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateMobileHeaderScale);
      }
    };

    requestHeaderUpdate();
    window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
    window.addEventListener("resize", requestHeaderUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestHeaderUpdate);
      window.removeEventListener("resize", requestHeaderUpdate);
      document.documentElement.style.removeProperty("--mobile-header-height");
      document.documentElement.style.removeProperty("--mobile-logo-height");
      document.documentElement.style.removeProperty("--mobile-menu-opacity");
      document.documentElement.style.removeProperty(
        "--mobile-menu-pointer-events",
      );
    };
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 860px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const revealSelector = [
      ".hero__content > .eyebrow",
      ".hero h1",
      ".hero__lede",
      ".hero__fact",
      ".section-heading",
      ".about-layout__copy",
      ".about-credentials",
      ".leadership-card",
      ".capability-card",
      ".product-card",
      ".contact-panel__copy",
      ".contact-panel__actions",
      ".procurement-card",
      ".footer__column--brand",
      ".footer__base",
    ].join(", ");

    let observer = null;

    const clearRevealState = () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }

      document.querySelectorAll(".mobile-reveal").forEach((element) => {
        element.classList.remove("mobile-reveal", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };

    const setupRevealState = () => {
      clearRevealState();

      const revealElements = Array.from(
        document.querySelectorAll(revealSelector),
      );

      if (!mobileQuery.matches || reducedMotionQuery.matches) {
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -14% 0px",
          threshold: 0.16,
        },
      );

      revealElements.forEach((element, index) => {
        element.classList.add("mobile-reveal");
        element.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);

        if (element.getBoundingClientRect().top < window.innerHeight * 0.86) {
          element.classList.add("is-visible");
          return;
        }

        observer.observe(element);
      });
    };

    setupRevealState();
    mobileQuery.addEventListener("change", setupRevealState);
    reducedMotionQuery.addEventListener("change", setupRevealState);
    window.addEventListener("resize", setupRevealState);

    return () => {
      mobileQuery.removeEventListener("change", setupRevealState);
      reducedMotionQuery.removeEventListener("change", setupRevealState);
      window.removeEventListener("resize", setupRevealState);
      clearRevealState();
    };
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#products", label: "Products" },
    ...(showSecuritySection ? [{ href: "#security", label: "Security" }] : []),
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="site-shell">
      <header className="masthead">
        <button
          className="masthead__menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMobileNavOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMobileNavOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <a
          className="masthead__brand"
          href="#top"
          aria-label="Blackletter Limited home"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <span className="masthead__mark">
            <img
              className="masthead__monogram"
              src="./BLWhiteCrop.png"
              alt=""
            />
          </span>
          <span className="masthead__brand-copy">
            <img
              className="masthead__mobile-logo"
              src="./BLWhite.png"
              alt="Blackletter Limited"
            />
            <span className="masthead__brand-name">
              Blackletter
              <span className="masthead__brand-limited">Limited</span>
            </span>
            <span className="masthead__brand-meta">
              Legal-Tech and National Security Software
            </span>
          </span>
        </a>

        <nav
          className={`masthead__nav${isMobileNavOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setIsMobileNavOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {showCapabilityStatementButtons ? (
          <a
            className="button button--nav"
            href="./capability-statement.html"
            download="Blackletter-Capability-Statement.html"
          >
            Capability Statement
          </a>
        ) : null}
      </header>

      <main className="page" id="top">
        <section className="hero">
          <div className="hero__content">
            <p className="eyebrow">
              AI-Powered Legal-Tech for Government and National Security
            </p>
            <h1>
              Legal and compliance consulting and software for teams that need
              reliable answers.
            </h1>
            <p className="hero__lede">
              Blackletter builds custom AI-enabled tools for legal research,
              policy, and compliance work. Designed by attorneys who understand
              the job and write code to get it done.
            </p>

            {showHeroActions ? (
              <div className="hero__actions">
                <a
                  className="button button--primary"
                  href="./capability-statement.html"
                  download="Blackletter-Capability-Statement.html"
                >
                  Download Capability Statement
                </a>
                <a className="button button--secondary" href="#contact">
                  Subcontracting Inquiries
                </a>
              </div>
            ) : null}

            <dl className="hero__facts">
              {heroFacts.map((fact) => (
                <div className="hero__fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero__visual">
            <div className="hero__splash" aria-hidden="true">
              <span className="hero__splash-line hero__splash-line--vertical" />
              <span className="hero__splash-line hero__splash-line--horizontal" />
              <span className="hero__splash-corner hero__splash-corner--tl" />
              <span className="hero__splash-corner hero__splash-corner--tr" />
              <span className="hero__splash-corner hero__splash-corner--bl" />
              <span className="hero__splash-corner hero__splash-corner--br" />
              <div className="hero__splash-plate">
                <img className="hero__splash-logo" src="./BLWhite.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Built by people who know the work.</h2>
            <p>
              There is nothing worse than bad government software. Blackletter
              helps design your compliance processes and then develops software
              for teams that work with rules, risk, and real operational catered
              to your needs. Beautiful UIs, intutive UX, and highly accurate
              results. The goal is straightforward: useful tools, grounded
              outputs, and software that fits the job.
            </p>
          </div>

          <div className="about-layout">
            <div className="about-layout__copy">
              <p>
                We focus on legal research, regulatory analysis, and compliance
                workflows where the source material matters and the interface
                needs to make sense to real users: lawyers and non-lawyers
                alike.
              </p>
            </div>

            <aside
              className="about-credentials"
              aria-label="Founder credentials"
            >
              <div className="about-credentials__item">
                Former goverment attorneys with experience in military, national
                security, and administrative law
              </div>
              <div className="about-credentials__item">
                Advanced training in law, technology, and national security
                policy
              </div>
              <div className="about-credentials__item">
                Substantial programming experience and technical development
                backgrounds
              </div>
            </aside>
          </div>

          <div className="leadership-grid">
            {founderSignals.map((item) => (
              <article className="leadership-card" key={item.title}>
                <p className="leadership-card__label">Founders</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="capabilities">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Focused capabilities for accountable environments.</h2>
            <p>
              The work is practical, source-grounded, and built for real use.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.title}>
                <p className="capability-card__index">{capability.index}</p>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
                <ul>
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="products">
          <div className="section-heading">
            <p className="eyebrow">Products</p>
            <h2>Current products.</h2>
            <p>Focused tools, not broad platforms.</p>
          </div>

          <div className="product-stack">
            {products.map((product) => (
              <article
                className={`product-card product-card--${product.theme}`}
                key={product.name}
              >
                <div className="product-card__copy">
                  <p className="product-card__category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="product-card__summary">{product.summary}</p>
                  {product.description ? (
                    <p className="product-card__description">
                      {product.description}
                    </p>
                  ) : null}
                  <ul className="product-card__highlights">
                    {product.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {product.href ? (
                    <a
                      className="text-link"
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {product.cta}
                    </a>
                  ) : null}
                </div>

                <div className="product-card__visual">
                  <div className="product-card__frame">
                    {product.image ? (
                      <img
                        className={`product-card__image ${product.imageClass || ""}`}
                        src={product.image}
                        alt={`${product.name} screenshot`}
                      />
                    ) : (
                      <div className="product-diagram" aria-hidden="true">
                        <div className="product-diagram__row">
                          <span>Policy</span>
                          <span>Regulations</span>
                          <span>Compliance</span>
                        </div>
                        <div className="product-diagram__core">
                          Adaptable retrieval and reasoning tied to governing
                          sources
                        </div>
                        <div className="product-diagram__row">
                          <span>Research</span>
                          <span>Citations</span>
                          <span>Workflow support</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {showSecuritySection ? (
          <section className="section" id="security">
            <div className="section-heading">
              <p className="eyebrow">Security / Trust</p>
              <h2>Built for controlled environments.</h2>
              <p>Data handling, source fidelity, and human review matter here.</p>
            </div>

            <div className="security-grid security-grid--standalone">
              {securityPillars.map((item) => (
                <article className="security-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="section section--contact" id="contact">
          <div className="contact-panel">
            <div className="contact-panel__header">
              <div className="contact-panel__copy">
                <p className="eyebrow">Contact / Procurement</p>
                <h2>
                  Open to capability reviews and subcontracting conversations.
                </h2>
                <p>
                  Blackletter works with government teams and prime contractors
                  looking for credible legal-tech support.
                </p>
              </div>

              <div className="contact-panel__actions">
                {showCapabilityStatementButtons ? (
                  <a
                    className="button button--primary"
                    href="./capability-statement.html"
                    download="Blackletter-Capability-Statement.html"
                  >
                    Download Capability Statement
                  </a>
                ) : null}
                <a className="button button--secondary" href="#top">
                  Start a Conversation
                </a>
              </div>
            </div>

            <div className="procurement-grid">
              {procurementFacts.map((fact) => (
                <article className="procurement-card" key={fact.label}>
                  <p className="procurement-card__label">{fact.label}</p>
                  <p className="procurement-card__value">{fact.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__grid">
          <div className="footer__column footer__column--brand">
            <p className="footer__brand">Blackletter</p>
            <p className="footer__text">
              AI-enabled legal, regulatory, and compliance software for
              government and national security environments.
            </p>
          </div>

          {showFooterProducts ? (
            <div className="footer__column">
              <p className="footer__heading">Products</p>
              <p className="footer__text">ArmyRegs.ai</p>
              <p className="footer__text">Courtmartial App</p>
              <p className="footer__text">Adaptable RAG capability</p>
            </div>
          ) : null}

          {showFooterProcurement ? (
            <div className="footer__column">
              <p className="footer__heading">Procurement</p>
              <p className="footer__text">NAICS 541511 / 541512 / 541519</p>
              <p className="footer__text">Small Business</p>
              <p className="footer__text">
                Disabled Veteran Owned certification anticipated by launch
              </p>
            </div>
          ) : null}
        </div>

        <div className="footer__base">
          <span>Blackletter Limited</span>
          <span>{new Date().getFullYear()} © All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
