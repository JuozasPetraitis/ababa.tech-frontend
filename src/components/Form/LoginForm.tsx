import React from "react";
import HelperText from "./FormFields/HelperText";
import Input from "./FormFields/Input";
import Label from "./FormFields/Label";
import { useForm, FormProvider } from "react-hook-form";

type Props = {
  clickHandler: () => void;
};

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = ({ clickHandler }: Props): JSX.Element => {
  const methods = useForm<FormValues>({ mode: "onChange" });

  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <p className="cursor-default text-center text-4xl font-thin uppercase tracking-tight">Login</p>
      <FormProvider {...methods}>
        <form className="mx-auto flex w-4/5 flex-col gap-1" onSubmit={methods.handleSubmit(onSubmit)}>
          <Label name="Email" />
          <Input type="email" label="Email" validate="Email" />
          <Label name="Password" />
          <Input label="Password" type="password" validate="Password" />

          <input
            type="submit"
            value="Log In"
            className={`${methods.formState.isValid ? "input-submit cursor-pointer bg-sky-400" : "input-submit cursor-not-allowed bg-sky-200"}`}
            disabled={!methods.formState.isValid}
          />
        </form>
      </FormProvider>

      <HelperText name="Login" clickHandler={clickHandler} />
    </>
  );
};

export default LoginForm;
