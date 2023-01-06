import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/rk-on-mountain.svg').default,
    description: (
      <>
        Import, cross-list and manage your listings in an
        easy to use integrated software, Designed for listing
        on multiple platforms.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/rk-on-screen.svg').default,
    description: (
      <>
        RK is designed to save you time & make you money. There are two main
        features, The listing tool & the inventory manager.
        Not a perfect process yet. However, We are aiming to get closer to it.
      </>
    ),
  },
  {
    title: 'Active development',
    Svg: require('@site/static/img/rk-on-dev.svg').default,
    description: (
      <>
        There's a plan to have a major update on first half of 2023.
        A complete re-design of the main features, Stay tuned!
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
