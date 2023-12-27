import styles from "./styles";

export interface IButton {
  type?: keyof typeof styles.type;
  className?: string;
  children: React.ReactNode;
  buttonType?: "submit" | "reset" | "button";
  loading?: boolean;
  onClick?: () => void;
}
