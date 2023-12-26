import { useFormContext } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

import clsx from "clsx";

import type { ITextInput } from "./types";
import styles from "./styles";

export const TextInput = ({
  className,
  name,
  placeholder,
  options,
  type = "text",
  isPassword,
}: ITextInput) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  const [showPassword, setShowPassword] = useState(false);
  const typeHandler = () => {
    return isPassword ? (showPassword ? "text" : "password") : type;
  };

  return (
    <div className={clsx(styles.root, className)}>
      <div className="w-full relative">
        <input
          type={typeHandler()}
          className={styles.input}
          placeholder={placeholder}
          {...register(name, options)}
        />
        {isPassword && (
          <div
            className="w-fit h-fit absolute right-4 top-3 cursor-pointer"
            onClick={() => setShowPassword((bool) => !bool)}
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div>
        )}
      </div>
      {errors[name] && (
        <span className={styles.error}>
          {errors[name]?.message as React.ReactNode}
        </span>
      )}
    </div>
  );
};
