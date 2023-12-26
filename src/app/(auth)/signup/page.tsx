/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";
import { TextInput } from "@/components";

const SignUpPage = () => {
  const styles = {
    root: {
      css: css`
        width: 364px;
      `,
      cls: `
        border
      `,
    },
    title: `
      text-black text-3xl font-bold uppercase text-center
    `,
    description: `
      text-neutral-600 text-base font-normal text-center
      
    `,
  };

  return (
    <div className={styles.root.cls} css={styles.root.css}>
      <h1 className={styles.title}>Sign Up</h1>
      <div className={styles.description}>
        How to i get started lorem ipsum dolor at?
      </div>
      <div className={"flex flex-col gap-4 mt-6 "}>
        <TextInput name="email" placeholder="example@mail.com" />
        <TextInput name="password" placeholder="example@mail.com" />
      </div>
    </div>
  );
};

export default SignUpPage;
