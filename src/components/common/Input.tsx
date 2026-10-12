import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps =
  | (InputHTMLAttributes<HTMLInputElement> & {
      as?: "input";
    })
  | (TextareaHTMLAttributes<HTMLTextAreaElement> & {
      as: "textarea";
    });

const Input = (props: InputProps) => {
  if (props.as === "textarea") {
    const { as: elementType, ...textareaProps } = props;

    if (elementType !== "textarea") {
      return null;
    }

    return <textarea {...textareaProps} />;
  }

  const { as: elementType, ...inputProps } = props;

  if (elementType !== undefined && elementType !== "input") {
    return null;
  }

  return <input {...inputProps} />;
};

export default Input;
