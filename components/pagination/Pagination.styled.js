import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.button`
  width: 40px;
  height: 40px;
  padding: 10px;
  outline: none;
  border: 1px solid #7e7474;
  border-radius: 5px;
  span {
    color: #7e7474;
  }
`;
