import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { InputContainer } from "./style";

import MagnifyingGlass from "../../assets/MagnifyingGlass.png";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { ...rest },
  ref
) => {
  return (
    <InputContainer>
      <input {...rest} ref={ref} />
      <img src={MagnifyingGlass} alt="search icon" />
    </InputContainer>
  );
};

export const InputComponent = forwardRef(InputBase);
