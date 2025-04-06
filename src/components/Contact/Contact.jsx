import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../util";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="priya19hari@gmail.com">priya19hari@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="linkedin.com/in/priya19hari">linkedin.com/in/priya19hari</a>
        </li>
      </ul>
    </footer>
  );
};