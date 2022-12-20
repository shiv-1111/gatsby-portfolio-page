import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Dream.</h2>
          <h3>Design & Develop.</h3>
          <p>Our moto - Make enough fucking money to buy a fucking island.</p>
          <Link to="/projects" className={styles.btn}>
            My Projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}
