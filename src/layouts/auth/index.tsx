/** @jsxImportSource @emotion/react */
"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import { IRoot, TextType } from "./types";
import data from "./data.json";
import styles from "./styles";

const AuthLayout = ({ children }: IRoot) => {
  const pathname = usePathname();

  return (
    <div className={styles.root.cls} css={styles.root.css}>
      <section className={styles.formBox}>{children}</section>
      <section className={styles.banner.cls} css={styles.banner.css}>
        <div className={styles.box.cls} css={styles.box.css}>
          <span className={styles.text.cls} css={styles.text.css}>
            {data[pathname.slice(1) as TextType]}
          </span>
          <Image
            src="/images/auth/star.png"
            alt="star"
            className={styles.starImg}
            width={79}
            height={79}
          />
          <Image
            src="/images/auth/women.png"
            alt="directer-women"
            className={styles.womanImg}
            width={325}
            height={400}
          />
        </div>
      </section>
    </div>
  );
};

export default AuthLayout;
