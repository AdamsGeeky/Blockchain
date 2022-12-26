import React from 'react';
import clsx from 'clsx';
import Typewriter from 'typewriter-effect';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
         <p className="hero__subtitle">
          <Typewriter 
           options={{
             strings: ['You cant manage knowledge — nobody can. What you can do is to manage the environment', 'in which knowledge can be created discovered, captured, shared, distilled', 'validated, transferred, adopted, adapted, and applied'],
             autoStart: true,
             loop: true,
           }}/>
          </p>
         <div className="bground">
          <img src={require('../../static/img/AdamsGeeky.png').default}  />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Blockchain Learning Resource ${siteConfig.title}`}
      description="NITDA Blockchain Learning Resource <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
