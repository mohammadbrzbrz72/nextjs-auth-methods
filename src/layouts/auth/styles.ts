import { css } from "@emotion/react";

const styles = {
  root: {
    css: css`
      width: 1366px;
      height: 768px;
    `,
    cls: `
      grid grid-cols-2
      rounded-3xl shadow-2xl
    `,
  },
  formBox: `
      grid place-items-center
      rounded-l-3xl
    `,
  banner: {
    css: css`
      background: url("/images/auth/rectangle.png"),
        linear-gradient(218deg, #9181f4 -5.84%, #5038ed 106.73%),
        lightgray 0% 0% / 100px 100px repeat;
    `,
    cls: `
        grid place-items-center
        bg-cover
        rounded-r-3xl
      `,
  },
  box: {
    css: css`
      border-radius: 46px;
      width: 412px;
      height: 524px;
      flex-shrink: 0;
    `,
    cls: `
        relative
        bg-white/20 backdrop-blur
        border border-white/50
      `,
  },
  text: {
    css: css`
      width: 184px;
      font-size: 32px;
      line-height: 46px;
    `,
    cls: `
        block
        text-white font-bold
        mt-7 ml-7
      `,
  },
  starImg: `
      absolute bottom-24 left-[-36px]
    `,
  womanImg: `
      absolute bottom-[-3px] right-[-36px]
    `,
};

export default styles;
