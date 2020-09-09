import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Realtime</>,
    imageUrl: "img/realtime.png",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Efficient</>,
    imageUrl: "img/efficient.png",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Reliable</>,
    imageUrl: "img/reliable.png",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: <>Scalable</>,
    imageUrl: "img/scalable.png",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
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
      description="Description will go into a meta tag in <head />"
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
            src="https://mist.now.sh/mist/v1-app.png"
            alt="Sagipinasa V1"
            className="app-screenshot"
          />
        </div>
      </header>
      <main>
        <div className="content-heading">
          <h1>About</h1>
        </div>

        <div className="section-container">
          <div className="content">
            <div>
              <img
                src="https://i.ytimg.com/vi/kbbq8Fq6sBE/maxresdefault.jpg"
                alt="about-picture"
              />
            </div>
            <div className="text-content">
              <p>
                Lorem Ipsum dolor simet black black Lorem Ipsum dolor simet
                black blackLorem Ipsum dolor simet black blackLorem Ipsum dolor
                simet black blackLorem Ipsum dolor simet black black Lorem Ipsum
                dolor simet black black Lorem Ipsum dolor simet black black
                Lorem Ipsum dolor simet black black Lorem Ipsum dolor simet
                black black Lorem Ipsum dolor simet black black Lorem Ipsum
                dolor simet black black Lorem Ipsum dolor simet black black
                Lorem Ipsum dolor simet black black Lorem Ipsum dolor simet
                black black
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
      </main>
    </Layout>
  );
}

export default Home;
