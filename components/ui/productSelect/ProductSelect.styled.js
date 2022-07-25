import styled from "styled-components";
import colors from "../../../constants/colors";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectTitle = styled.p`
  text-align: left;
  width: 100%;
  color: ${colors.text};
  line-height: 24px;
  font-weight: 700;
`;
export const RemoveProductButton = styled.button`
  outline: none;
  border: none;
  width: 80px;
  background-color: ${colors.danger};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  svg {
    fill: #fff;
    width: 20px;
    height: 20px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 150px;
  margin: 0px 10px;
`;
