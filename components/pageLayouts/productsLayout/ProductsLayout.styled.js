import styled from "styled-components";

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
