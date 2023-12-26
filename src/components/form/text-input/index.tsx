import { useFormContext } from "react-hook-form";
import clsx from "clsx";

import type { ITextInput } from "./types";
import styles from "./styles";

export const TextInput = ({ className, name, placeholder }: ITextInput) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <input
      className={clsx(styles.root, className)}
      placeholder={placeholder}
      {...register(name)}
    />
  );
};
