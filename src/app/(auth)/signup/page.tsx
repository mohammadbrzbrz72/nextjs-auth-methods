/** @jsxImportSource @emotion/react */
"use client";

import { TextInput, OAuthButton, Button, TextDivider } from "@/components";
import styles from "./styles";

const SignUpPage = () => {
  return (
    <div className={styles.root.cls} css={styles.root.css}>
      <h1 className={styles.title}>Sign Up</h1>
      <div className={styles.description}>
        How to i get started lorem ipsum dolor at?
      </div>
      <div className={styles.form.root}>
        <TextInput name="email" placeholder="example@mail.com" />
        <TextInput name="password" placeholder="example@mail.com" />

        <Button
          className={styles.form.button}
          onClick={() => {
            console.log("Hi click");
          }}
        >
          Login Now
        </Button>
      </div>
      <TextDivider data={["Or"]} className={styles.divider} />
      <div className={"flex flex-col gap-4"}>
        <OAuthButton src="/images/auth/google.png" alt="google" name="google" />
        <OAuthButton
          src="/images/auth/twitter.png"
          alt="twitter"
          name="twitter"
        />
        <OAuthButton
          src="/images/auth/instagram.png"
          alt="instagram"
          name="instagram"
        />
        <OAuthButton
          src="/images/auth/facebook.png"
          alt="facebook"
          name="facebook"
        />
      </div>
      <div className="grid place-content-center mt-5">
        <span className="text-neutral-600 text-base">
          {"Don't"} have an account? Sign Up
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
