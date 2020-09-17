import React from "react";
import { IconType } from "react-icons";
import "./Button.css";

type ButtonProps = {
  Icon?: IconType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  Icon,
  className,
}) => (
  <button className={`Button ${className ?? ""}`} onClick={onClick}>
    <div className="button-content">
      {Icon && <Icon className="button-icon" />}
      {children}
    </div>
  </button>
);

export default Button;
