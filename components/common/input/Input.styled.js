import styled from "styled-components";
import colors from "../../../constants/colors";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.direction};
`;

export const InputTitle = styled.p`
  width: 100%;
  font-size: 14px;
  color: ${colors.text};
  text-align: left;
  margin-bottom: ${(props) => (props.direction === "row" ? "0px" : "20px")};
  line-height: 24px;
  font-weight: 700;
`;
export const InputField = styled.input`
  outline: none;
  border: 2px solid ${colors.primary};
  background-color: inherit;
  color: ${colors.text};
  line-height: 24px;
  font-weight: 700;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
`;
