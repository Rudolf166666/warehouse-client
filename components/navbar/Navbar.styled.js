import styled from "styled-components";
import colors from "../../constants/colors";

export const Wrapper = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  position: sticky;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.a`
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
  svg {
    width: 50px;
    height: 50px;
    fill: #fff;
  }
`;

export const Title = styled.h1`
  width: 100%;
  text-align: left;
  color: #fff;
  font-size: 20px;
  margin-left: 20px;
`;
