import { InputField, InputTitle, InputWrapper } from "./Input.styled";

export const Input = ({
  title,
  value,
  onChange,
  direction = "column",
  ...props
}) => {
  return (
    <InputWrapper direction={direction}>
      <InputTitle direction={direction}>{title}</InputTitle>
      <InputField {...props} value={value} onChange={onChange} />
    </InputWrapper>
  );
};
