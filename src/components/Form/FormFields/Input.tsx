import { useFormContext } from "react-hook-form";

type InputProps = {
  label: string;
  type?: string;
  validate: "Username" | "Email" | "Password" | "Movie";
};

const Input = ({ label, validate, type }: InputProps): JSX.Element => {
  const { register } = useFormContext();

  const usernameValidator = {
    required: true,
    minLength: {
      value: 4,
      message: "Username has to be longer than 4 letters",
    },
  };

  const emailValidator = {
    required: true,
    pattern: { value: /\w{3,}[@][a-z]\w{3,}[.]\w{2,5}/gi, message: "Email required. Example: Alice@gmail.com" },
  };

  const passwordValidator = {
    required: true,
    minLength: {
      value: 4,
      message: "Password has to be longer than 4 letters",
    },
  };

  const movieValidator = {
    required: true,
    minLength: {
      value: 4,
      message: "Text has to be longer than 4 letters",
    },
  };

  return (
    <input
      type={type ? type : "text"}
      className="rounded-sm border border-gray-400 bg-gray-50 px-4 py-2 text-xs placeholder:text-gray-400"
      {...register(
        label,
        validate === "Username" ? usernameValidator : validate === "Email" ? emailValidator : validate === "Password" ? passwordValidator : movieValidator
      )}
    />
  );
};

export default Input;
