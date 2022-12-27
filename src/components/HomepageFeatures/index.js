import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'peer to peer',
    Svg: require('@site/static/img/bitcoin.svg').default,
    description: (
      <>
      A purely peer-to-peer version of electronic cash 
      would allow online payments to be sent directly from 
      one party to another without going through a financial institution.
      - Satoshi Nakamoto, Bitcoin Whitepaper
      </>
    ),
  },
  {
    title: 'network',
    Svg: require('@site/static/img/nakamoto.svg').default,
    description: (
      <>
       Thanks to the dense connectivity at the center of the Bitcoin network, 
       propagation from the first node the transaction reaches 
       to all other nodes is very fast, requiring less than 
       1 second for global awareness.
      </>
    ),
  },
  {
    title: 'bitcoin',
    Svg: require('@site/static/img/ptp.svg').default,
    description: (
      <>
      We define an electronic coin as a chain of digital signatures.
      This chain leads all the way back to the blocks in which each of 
      the Satoshi tokens being used in the transaction was 
      first made accessible in the form of a coinbase reward.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
