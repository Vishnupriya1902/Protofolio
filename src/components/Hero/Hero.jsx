import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../util';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vishnupriya H</h1>
        <p className={styles.description}>
          An electronics and computer enthusiast proficient in implementing software
          solutions, designing chips using EDA software, and continuously improving problem-solving
          and technical skills. I enjoy working collaboratively and adapting to diverse work conditions.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};