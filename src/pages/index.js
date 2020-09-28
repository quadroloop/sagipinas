import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import ProjectSlider from "../components/ProjectSliders";

const features = [
  {
    title: <>Realtime</>,
    imageUrl: "img/realtime.png",
    description: <>Supports data processing and visualization in Realtime</>,
  },
  {
    title: <>Efficient</>,
    imageUrl: "img/efficient.png",
    description: <>Built with efficiency in mind.</>,
  },
  {
    title: <>Reliable</>,
    imageUrl: "img/reliable.png",
    description: (
      <>
        Constantly tested and developed to withstand large amounts of data
        processing and handle its operations reliably.
      </>
    ),
  },
  {
    title: <>Scalable</>,
    imageUrl: "img/scalable.png",
    description: <>Easily adaptable and scalable across different platforms</>,
  },
  {
    title: <>Open Source</>,
    imageUrl: "img/open-source.png",
    description: <>Solutions the matter most should be open for improvement.</>,
  },
  {
    title: <>Informative</>,
    imageUrl: "img/informative.png",
    description: <>Solutions the matter most should be open for improvement.</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4 text--center", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Building technologies for nationwide resilience."
      ogImage="img/v1-app.png"
    >
      <header
        className={clsx("hero hero--primary hero-banner", styles.heroBanner)}
      >
        <div className="container">
          <img
            src="/img/sagipinas-logo-transparent.png"
            alt="SagiPinas Logo"
            className="banner-logo"
          />
          <h1 className="hero__title">
            Sagi<span>Pin</span>as
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
          <img
            src="img/v1-app.png"
            alt="Sagipinas V1"
            className="app-screenshot"
          />
        </div>
      </header>
      <main>
        <div className="content-heading">
          <h1>About the Project</h1>
        </div>

        <div className="section-container">
          <div className="content">
            <div>
              <img src="img/about_sagipinas.png" alt="about-picture" />
            </div>
            <div className="text-content">
              <p>
                The project started around November 2019 as a Grand Prize
                winning entry to a hackathon that tackles current problems in
                the Philippnes, such as traffic, natural disasters, heath and
                education.
              </p>

              <p>
                The first version of the project focuses on utilizing the
                benefits of{" "}
                <code>Fee cellular data for Facebook Messenger</code> To allow
                people to immediately send distress calls from an affected area
                in an event of a natural disaster.
              </p>

              <p>
                We decided to keep the project open, and keep improving it ever
                since.
              </p>
            </div>
          </div>
        </div>

        <div className="content-heading">
          <h1>Features</h1>
        </div>

        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        <ProjectSlider />
      </main>
    </Layout>
  );
}

export default Home;
