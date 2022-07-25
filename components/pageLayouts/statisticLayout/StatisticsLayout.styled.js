import styled from "styled-components";
import colors from "../../../constants/colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px;
  flex-direction: column;
`;
export const Title = styled.h1``;
export const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
`;

export const TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tab = styled.button`
  outline: none;
  border: none;
  display: flex;
  background-color: inherit;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid
    ${(props) => (props.isSelected ? colors.primary : "#fff")};
  span {
    color: ${colors.text};
  }
`;
