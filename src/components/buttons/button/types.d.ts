export interface IButton {
  type?: "primary";
  className?: string;
  children: React.ReactNode;
  buttonType?: "submit" | "reset" | "button";
  loading?: boolean;
  onClick?: () => void;
}
