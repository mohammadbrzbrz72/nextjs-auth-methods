import { RegisterOptions, FieldValues } from "react-hook-form";

export interface ITextInput {
  type?: InputHTMLAttributes<HTMLInputTypeAttribute | undefined>;
  className?: string;
  placeholder: string;
  name: string;
  options?: RegisterOptions<FieldValues, string> | undefined;
}
