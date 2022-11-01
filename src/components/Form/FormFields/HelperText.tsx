import React from "react";

type Props = {
  name: string;
  clickHandler?: () => void;
};

const HelperText = ({ name, clickHandler }: Props) => {
  return name === "Login" ? (
    <p className="text-center text-sm">
      Don&apos;t have an account?
      <span className="cursor-pointer pl-2 underline" onClick={clickHandler}>
        Sign up
      </span>
    </p>
  ) : name === "SignUp" ? (
    <p className="text-center text-sm">
      Remember that you have an account?
      <span className="cursor-pointer pl-2 underline" onClick={clickHandler}>
        Login
      </span>
    </p>
  ) : (
    <p className="text-center text-sm">Error</p>
  );
};

export default HelperText;
