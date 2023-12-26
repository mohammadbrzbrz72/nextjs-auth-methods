import CircularProgress from "@mui/material/CircularProgress";
import clsx from "clsx";

import styles from "./styles";
import type { IButton } from "./types";

export const Button: React.FC<IButton> = ({
  className,
  type = "primary",
  buttonType = "button",
  loading,
  onClick,
  children,
}) => {
  return (
    <button
      className={clsx(styles.button, styles.type[type], className)}
      type={buttonType}
      onClick={onClick}
    >
      {loading ? (
        <CircularProgress size={20} style={{ color: "white" }} />
      ) : (
        children
      )}
    </button>
  );
};
