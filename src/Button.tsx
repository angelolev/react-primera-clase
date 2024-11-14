import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  handleClick: () => void;
}

function Button({ children, handleClick }: IButton) {
  return <button onClick={handleClick}>{children}</button>;
}

export default Button;
