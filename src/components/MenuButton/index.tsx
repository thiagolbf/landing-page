import {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";
import { Button } from "./style";

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const ButtonBase: ForwardRefRenderFunction<
  HTMLButtonElement,
  MenuButtonProps
> = ({ active, ...rest }, ref) => {
  return <Button active={active} {...rest} ref={ref} />;
};

export const MenuButton = forwardRef(ButtonBase);
