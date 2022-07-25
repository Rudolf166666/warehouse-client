import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h3`
  color: #7e7474;
`;
export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const InputTitle = styled.p`
  width: 100%;
  color: #7e7474;
`;
export const Input = styled.input`
  border: 1px solid #7e7474;
  width: 100%;
  outline: none;
  padding: 10px;
  color: #7e7474;
  border-radius: 5px;
  background-color: transparent;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;
export const Button = styled.button`
  outline: none;
  border: none;
  background-color: #18dbf6;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  span {
    color: #fff;
  }
`;
