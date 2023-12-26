import { css } from "@emotion/react";

const styles = {
  root: {
    css: css`
      width: 364px;
    `,
    cls: `
      `,
  },
  title: `
      text-black text-3xl font-bold uppercase text-center
    `,
  description: `
    text-neutral-600 text-base font-normal text-center
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
  divider: `
    mb-5
  `,
  oauthBox: `
    flex flex-col gap-4
  `,
  signBox: {
    root: `
      grid place-content-center mt-6
    `,
    text: `
      text-neutral-600 text-base
    `,
    link: `
      font-bold
    `,
  },
  btnBox: `
    flex flex-col items-center
  `,
  forget: `
    text-sm font-bold text-center
    mt-3
  `,
};

export default styles;
