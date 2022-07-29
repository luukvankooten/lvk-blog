import type { NextPage } from "next";
import Head from "next/head";
import backgroundImage from "../public/IMG_0636.jpeg";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My personal blog - lvk</title>
        <meta name="description" content="My personal blog" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.backgroundBorder}>
          <div className={styles.placeholder}>
            <div className={styles["placeholder-text"]}>
              🚨 This blog is under construction. 🦺
            </div>
          </div>
          <div
            className={styles.backgroundPlaceHolder}
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
          ></div>
        </div>
      </main>
    </>
  );
};

export default Home;
