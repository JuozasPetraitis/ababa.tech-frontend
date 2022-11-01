import React from "react";

type Props = {
  name: string;
};

const Label = ({ name }: Props): JSX.Element => {
  return (
    <label htmlFor={name} className="font-extralight tracking-wider">
      {name}
    </label>
  );
};

export default Label;
