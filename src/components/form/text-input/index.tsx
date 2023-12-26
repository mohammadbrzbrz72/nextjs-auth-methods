import clsx from "clsx";

import { ITextInput } from "./types";

const styles = {
  root: `
    w-full h-[52px]
    bg-indigo-50 bg-opacity-80
    rounded-2xl
    px-4 py-3
    focus:outline-gray-300
  `,
};

export const TextInput = ({ className, ...props }: ITextInput) => {
  return <input className={clsx(styles.root, className)} {...props} />;
};
