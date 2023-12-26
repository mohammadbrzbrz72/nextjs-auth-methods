"use client";

import { Button, FormProvider, TextInput } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const styles = {
  root: `
    w-[400px]
  `,
  image: `
    mt-[-50px]
  `,
  title: `
    text-black text-3xl font-bold uppercase text-center
  `,
  description: `
    block
    mt-5
  text-neutral-600 text-base font-normal text-center
  `,
  btnBox: `
    flex flex-col items-center
  `,
  form: {
    root: `
      flex flex-col gap-4 items-center
      mt-6 pb-6
    `,
    button: `
      mt-2
    `,
  },
  signBox: {
    root: `
      grid place-content-center 
    `,
    text: `
      text-neutral-600 text-base
    `,
    link: `
      text-lg font-bold
    `,
  },
};

const ForgetPage = () => {
  return (
    <div className={styles.root}>
      <Image
        className={styles.image}
        src="/images/auth/forgot-password.webp"
        alt="forgot password"
        width={380}
        height={380}
      />
      <h1 className={styles.title}>Forgot your password</h1>
      <span className={styles.description}>
        Please enter your email address {"you'd"} like your password reset
        information sent to{" "}
      </span>

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

        <div className={styles.btnBox}>
          <Button
            className={styles.form.button}
            buttonType="submit"
            loading={false}
          >
            Reset Password
          </Button>
        </div>
        <div className={styles.signBox.root}>
          <span className={styles.signBox.text}>
            Come back to the{" "}
            <Link className={styles.signBox.link} href="/signin">
              Sign In
            </Link>{" "}
            page
          </span>
        </div>
      </FormProvider>
    </div>
  );
};

export default ForgetPage;
