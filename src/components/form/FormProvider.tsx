import {
  useForm,
  FieldValues,
  SubmitHandler,
  FormProvider as RFormProvider,
} from "react-hook-form";

interface IFormProvider {
  className?: string;
  onSubmit: SubmitHandler<FieldValues>;
  children: React.ReactNode;
}

export const FormProvider: React.FC<IFormProvider> = ({
  onSubmit,
  className,
  children,
}) => {
  const methods = useForm();

  return (
    <RFormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </RFormProvider>
  );
};
