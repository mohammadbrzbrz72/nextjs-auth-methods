import { useFormContext } from "react-hook-form";
import clsx from "clsx";

import type { ITextInput } from "./types";
import styles from "./styles";

export const TextInput = ({
  className,
  name,
  placeholder,
  options,
  type = "text",
}: ITextInput) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  console.log();

  return (
    <div className={clsx(styles.root, className)}>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        {...register(name, options)}
      />
      {errors[name] && (
        <span className={styles.error}>
          {errors[name]?.message as React.ReactNode}
        </span>
      )}
    </div>
  );
};
