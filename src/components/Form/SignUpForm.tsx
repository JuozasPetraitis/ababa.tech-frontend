import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useAuth from "../../hooks/useAuth";
import { Label, Input, HelperText } from "./index";
import { useState } from "react";

type Props = {
  clickHandler?: () => void;
};

export type SignUpFormValues = {
  username: string;
  email: string;
  password: string;
};

const SignUpForm = ({ clickHandler }: Props) => {
  const [errorMessageFromServer, setErrorMessageFromServer] = useState("");
  const { signUpHandler } = useAuth();
  const methods = useForm<SignUpFormValues>({ mode: "onChange" });

  const onSubmit = (data: SignUpFormValues) =>
    signUpHandler(data).then((data: any) => {
      setErrorMessageFromServer(data.message);
      setTimeout(() => {
        setErrorMessageFromServer("");
      }, 3000);
      methods.reset();
    });

  const onError = (errors: FieldErrors) => {
    methods.reset();
    console.log(errors);
  };
  return (
    <>
      <p className="cursor-default text-center text-4xl font-thin uppercase">Sign Up</p>
      <FormProvider {...methods}>
        <form className="mx-auto flex w-4/5 flex-col gap-1" onSubmit={methods.handleSubmit(onSubmit, onError)}>
          <Label name="Username" />
          <Input label="username" validate="Username" />
          <ErrorMessage errors={methods.formState.errors} name="username" render={({ message }) => <p className="text-red-600">{message}</p>} />

          <Label name="Email" />
          <Input type="email" label="email" validate="Email" />
          <ErrorMessage errors={methods.formState.errors} name="email" render={({ message }) => <p className="text-red-600">{message}</p>} />

          <Label name="Password" />
          <Input label="password" type="password" validate="Password" />
          <ErrorMessage errors={methods.formState.errors} name="password" render={({ message }) => <p className="text-red-600">{message}</p>} />

          <input
            type="submit"
            value="Sign Up"
            className={`${methods.formState.isValid ? "input-submit cursor-pointer bg-sky-400" : "input-submit cursor-not-allowed bg-sky-200"}`}
            disabled={!methods.formState.isValid}
          />
        </form>
        <HelperText name="SignUp" clickHandler={clickHandler} />
      </FormProvider>

      {errorMessageFromServer && <p className="py-8 text-center text-lg text-red-600">{errorMessageFromServer}</p>}
    </>
  );
};

export default SignUpForm;
