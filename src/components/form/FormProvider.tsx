"use client";

import {
  useForm,
  FieldValues,
  SubmitHandler,
  FormProvider as RFormProvider,
  UseFormReturn,
} from "react-hook-form";

interface IFormProvider {
  className?: string;
  onSubmit: SubmitHandler<FieldValues>;
  children?: React.ReactNode;
  render?: (
    data: UseFormReturn<FieldValues, any, undefined>
  ) => React.ReactNode;
}

export const FormProvider: React.FC<IFormProvider> = ({
  onSubmit,
  className,
  children,
  render,
}) => {
  const methods = useForm();

  return (
    <RFormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        {render?.(methods)}
      </form>
    </RFormProvider>
  );
};
