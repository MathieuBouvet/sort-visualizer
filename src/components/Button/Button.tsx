import React from "react";
import { IconType } from "react-icons";
import "./Button.css";

type ButtonProps = {
  Icon?: IconType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, Icon }) => (
  <button className="Button" onClick={onClick}>
    <div className="button-content">
      {Icon && <Icon className="button-icon" />}
      {children}
    </div>
  </button>
);

export default Button;
