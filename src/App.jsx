import React from "react";

const heroFacts = [
  {
    label: "Products",
    value: "ArmyRegs.ai / Courtmartial App",
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
    text: "The founders have worked inside the kinds of legal environments this software serves. They know the users and the constraints.",
  },
  {
    title: "Advanced legal training",
    text: "Each founder brings LL.M. training in military law and national security law, which helps keep the work disciplined and precise.",
  },
  {
    title: "Technical ownership",
    text: "They do not just direct the work. They help build it, so product decisions stay close to the mission.",
  },
];

const capabilities = [
  {
    index: "01",
    title: "Research Tools",
    text: "Software for regulations, policy, doctrine, and governing authorities.",
    items: ["Built around real legal tasks", "Fast access to source material"],
  },
  {
    index: "02",
    title: "Compliance Workflows",
    text: "AI-enabled systems for review and compliance work where traceability matters.",
    items: ["Source-grounded outputs", "Human review compatible"],
  },
  {
    index: "03",
    title: "Adaptable RAG",
    text: "Reusable retrieval and reasoning systems for policy, regulatory, and compliance use.",
    items: [
      "Configurable across new corpora",
      "Citation-oriented workflow support",
    ],
  },
  {
    index: "04",
    title: "Closed-Network Support",
    text: "Development support for more constrained deployment environments.",
    items: [
      "Mission-aware implementation",
      "Built for tighter operational constraints",
    ],
  },
];

const products = [
  {
    name: "ArmyRegs.ai",
    category: "Regulatory Intelligence",
    summary:
      "Research and analysis for Army regulations with source-based answers and precise citations.",
    description:
      "Built for legal and operational users who need governing material quickly.",
    highlights: [
      "Source-grounded answers",
      "Citation-oriented workflow",
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
    description:
      "Benchbook access, offense navigation, and courtroom-ready utility.",
    highlights: [
      "Electronic Benchbook access",
      "Offense navigation",
      "Built for practice in motion",
    ],
    image: "./CMApp.png",
    imageClass: "product-card__image--phone",
    theme: "slate",
  },
  {
    name: "Adaptable RAG Capability",
    category: "Configurable AI Framework",
    summary: "A reusable source-grounded retrieval and reasoning capability.",
    description:
      "Adaptable to broader policy, regulatory, and compliance tasks.",
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
    value: "Disabled Veteran Owned certification anticipated by launch",
  },
  {
    label: "Development support",
    value: "Closed-network capable development",
  },
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="masthead">
        <a
          className="masthead__brand"
          href="#top"
          aria-label="Blackletter Limited home"
        >
          <span className="masthead__mark">
            <img
              className="masthead__monogram"
              src="./BLWhiteCrop.png"
              alt=""
            />
          </span>
          <span className="masthead__brand-copy">
            <span className="masthead__brand-name">
              Blackletter
              <span className="masthead__brand-limited">Limited</span>
            </span>
            <span className="masthead__brand-meta">
              Legal-Tech and National Security Software
            </span>
          </span>
        </a>

        <nav className="masthead__nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#products">Products</a>
          <a href="#security">Security</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="button button--nav"
          href="./capability-statement.html"
          download="Blackletter-Capability-Statement.html"
        >
          Capability Statement
        </a>
      </header>

      <main className="page" id="top">
        <section className="hero">
          <div className="hero__content">
            <p className="eyebrow">
              AI-Powered Legal-Tech for Government and National Security
            </p>
            <h1>
              Legal and compliance software for teams that need reliable
              answers.
            </h1>
            <p className="hero__lede">
              Blackletter builds AI-enabled tools for legal research, policy,
              and compliance work. Designed by attorneys who know the job and
              write code.
            </p>

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
              There is nothing worse than bad government software.Blackletter
              makes software for teams that work with rules, risk, and real
              operational constraints. The goal is straightforward: useful
              tools, grounded outputs, and software that fits the job.
            </p>
          </div>

          <div className="about-layout">
            <div className="about-layout__copy">
              <p>
                We focus on legal research, regulatory analysis, and compliance
                workflows where the source material matters and the interface
                needs to make sense to real users.
              </p>
            </div>

            <aside
              className="about-credentials"
              aria-label="Founder credentials"
            >
              <div className="about-credentials__item">
                Former JAGs and federal prosecutors
              </div>
              <div className="about-credentials__item">
                LL.M. training in military law and national security law
              </div>
              <div className="about-credentials__item">
                Substantial programming experience across the founding team
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
                <a
                  className="button button--primary"
                  href="./capability-statement.html"
                  download="Blackletter-Capability-Statement.html"
                >
                  Download Capability Statement
                </a>
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

          <div className="footer__column">
            <p className="footer__heading">Products</p>
            <p className="footer__text">ArmyRegs.ai</p>
            <p className="footer__text">Courtmartial App</p>
            <p className="footer__text">Adaptable RAG capability</p>
          </div>

          <div className="footer__column">
            <p className="footer__heading">Procurement</p>
            <p className="footer__text">NAICS 541511 / 541512 / 541519</p>
            <p className="footer__text">Small Business</p>
            <p className="footer__text">
              Disabled Veteran Owned certification anticipated by launch
            </p>
          </div>
        </div>

        <div className="footer__base">
          <span>Blackletter Limited</span>
          <span>{new Date().getFullYear()} © All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
