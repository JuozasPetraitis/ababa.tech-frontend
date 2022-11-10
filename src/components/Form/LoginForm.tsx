import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { useForm, FormProvider, FieldErrors } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Label, Input, HelperText } from "../index";

type Props = {
  clickHandler: () => void;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = ({ clickHandler }: Props): JSX.Element => {
  const [errorMessageFromServer, setErrorMessageFromServer] = useState("");
  const { logInHandler } = useAuth();
  const methods = useForm<LoginFormValues>({ mode: "onChange" });

  const onSubmit = (data: LoginFormValues) =>
    logInHandler(data).catch((data: any) => {
      setErrorMessageFromServer(data.message);
      setTimeout(() => {
        setErrorMessageFromServer("");
      }, 5000);
      methods.reset();
    });
  const onError = (errors: FieldErrors) => {
    methods.reset();
    console.log(errors);
  };
  return (
    <>
      <p className="cursor-default text-center text-4xl font-thin uppercase tracking-tight">Login</p>
      <FormProvider {...methods}>
        <form className="mx-auto flex w-4/5 flex-col gap-1" onSubmit={methods.handleSubmit(onSubmit, onError)}>
          <Label name="Email" />
          <Input type="email" label="email" validate="Email" />
          <ErrorMessage errors={methods.formState.errors} name="email" render={({ message }) => <p className="text-red-600">{message}</p>} />

          <Label name="Password" />
          <Input label="password" type="password" validate="Password" />
          <ErrorMessage errors={methods.formState.errors} name="password" render={({ message }) => <p className="text-red-600">{message}</p>} />

          <input
            type="submit"
            value="Log In"
            className={`${methods.formState.isValid ? "input-submit cursor-pointer bg-sky-400" : "input-submit cursor-not-allowed bg-sky-200"}`}
            disabled={!methods.formState.isValid}
          />
        </form>
        <HelperText name="Login" clickHandler={clickHandler} />
      </FormProvider>

      {errorMessageFromServer && <p className="py-8 text-center text-lg text-red-600">{errorMessageFromServer}</p>}
    </>
  );
};

export default LoginForm;
