/** @jsxImportSource @emotion/react */
"use client";

import Link from "next/link";

import {
  TextInput,
  OAuthButton,
  Button,
  TextDivider,
  FormProvider,
} from "@/components";
import styles from "./styles";

const SignUpPage = () => {
  return (
    <div className={styles.root.cls} css={styles.root.css}>
      <h1 className={styles.title}>Sign Up</h1>
      <div className={styles.description}>Sign up to become a member</div>
      <FormProvider
        className={styles.form.root}
        onSubmit={(data) => {
          console.log(data);
        }}
        render={({ watch }) => {
          return (
            <>
              <TextInput
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
              <TextInput
                name="confirm_password"
                placeholder="******"
                isPassword
                options={{
                  required: true,
                  validate: (val: string) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
                    }
                  },
                }}
              />

              <Button
                className={styles.form.button}
                buttonType="submit"
                loading={false}
              >
                Sign up
              </Button>
            </>
          );
        }}
      />
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
          Already have an account?{" "}
          <Link className={styles.signBox.link} href="/signin">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
