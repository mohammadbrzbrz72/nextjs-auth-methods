/** @jsxImportSource @emotion/react */
"use client";

import Link from "next/link";

import {
  FormProvider,
  TextInput,
  OAuthButton,
  Button,
  TextDivider,
} from "@/components";
import styles from "./styles";

const SignInPage = () => {
  return (
    <div className={styles.root.cls} css={styles.root.css}>
      <h1 className={styles.title}>Sign In</h1>
      <div className={styles.description}>Log in to access your account</div>
      <FormProvider
        className={styles.form.root}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        <TextInput
          type="email"
          name="email"
          placeholder="example@mail.com"
          options={{
            required: {
              value: true,
              message: "Email is required",
            },
          }}
        />
        <TextInput
          name="password"
          placeholder="******"
          isPassword
          options={{
            required: true,
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
        />

        <div className={styles.btnBox}>
          <Button
            className={styles.form.button}
            buttonType="submit"
            loading={false}
          >
            Login Now
          </Button>
          <Link className={styles.forget} href="/forget">
            Forget password ?
          </Link>
        </div>
      </FormProvider>
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
