import React from "react";
import HelperText from "./FormFields/HelperText";
import Input from "./FormFields/Input";
import { FormProvider, useForm } from "react-hook-form";
import Label from "./FormFields/Label";

type SignUpFormProps = {
  clickHandler?: () => void;
};

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const SignUpForm = ({ clickHandler }: SignUpFormProps) => {
  const methods = useForm<FormValues>({ mode: "onChange" });
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <p className="cursor-default text-center text-4xl font-thin uppercase">Sign Up</p>
      <FormProvider {...methods}>
        <form className="mx-auto flex w-4/5 flex-col gap-1" onSubmit={methods.handleSubmit(onSubmit)}>
          <Label name="Username" />
          <Input label="username" validate="Username" />
          <Label name="Email" />
          <Input type="email" label="Email" validate="Email" />
          <Label name="Password" />
          <Input label="Password" type="password" validate="Password" />
          <input
            type="submit"
            value="Sign Up"
            className={`${methods.formState.isValid ? "input-submit cursor-pointer bg-sky-400" : "input-submit cursor-not-allowed bg-sky-200"}`}
          />
        </form>
        <HelperText name="SignUp" clickHandler={clickHandler} />
      </FormProvider>
    </>
  );
};

export default SignUpForm;
