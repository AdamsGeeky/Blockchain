import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Listen',
    Svg: require('@site/static/img/bitcoin.svg').default,
    description: (
      <>
       The first step in knowledge is to listen, 
       then to be quiet and attentive, then to preserve it, 
       then to put it into practice and then to spread it.
      </>
    ),
  },
  {
    title: 'Preserve',
    Svg: require('@site/static/img/nakamoto.svg').default,
    description: (
      <>
       Education is a process of transferring various skills and knowledge from 
       one generation to another with the help of training and teaching.
        It plays a dominant role in an individual’s life,
         it is like a power which can be used to bring an actual ‘change’
          in the world.
      </>
    ),
  },
  {
    title: 'practice',
    Svg: require('@site/static/img/ptp.svg').default,
    description: (
      <>
      People today distinguish between knowledge and action and pursue them separately, believing that 
      one must know before he can act... They say [they will wait] till they truly know before 
      putting their knowledge into practice. Consequently to the end of their lives, 
      they will never act and also will never know.
        
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
