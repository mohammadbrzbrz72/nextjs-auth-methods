/** @jsxImportSource @emotion/react */
"use client";

import Link from "next/link";

import { TextInput, OAuthButton, Button, TextDivider } from "@/components";
import styles from "./styles";

const SignInPage = () => {
  return (
    <div className={styles.root.cls} css={styles.root.css}>
      <h1 className={styles.title}>Sign In</h1>
      <div className={styles.description}>
        How to i get started lorem ipsum dolor at?
      </div>
      <div className={styles.form.root}>
        <TextInput name="email" placeholder="example@mail.com" />
        <TextInput name="password" placeholder="******" />

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
      <div className={styles.oauthBox}>
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
      <div className={styles.signBox.root}>
        <span className={styles.signBox.text}>
          {"Don't"} have an account?{" "}
          <Link className={styles.signBox.link} href="/signup">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignInPage;
