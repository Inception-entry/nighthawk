import cx from "classnames";
import React from "react";

interface Props {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ label, disabled = false, ...otherProps }: Props) => {
  return (
    <button
      {...otherProps}
      disabled={disabled}
      className={cx(
        "",
        disabled && "button-disabled"
      )}
    >
      {label}
    </button>
  );
};

export default Button;
