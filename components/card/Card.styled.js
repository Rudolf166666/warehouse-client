import styled from "styled-components";
import colors from "../../constants/colors";

export const CardsWrapper = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${colors.primary};
  border-radius: 20px;
  height: 200px;
`;

export const CardTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  line-height: 25px;
`;

export const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  svg {
    width: 80px;
    height: 80px;
    fill: #fff;
  }
`;
