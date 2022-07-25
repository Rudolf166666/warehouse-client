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
export const List = styled.div`
  max-height: 105px;
  overflow: auto;
  background: #a7a7a736;
  border-radius: 10px;
  width: 100%;
  margin: 20px 0px;
  p {
    padding: 10px;
    margin-top: 10px;
    color: #7e7474;
    :last-child {
      margin-top: 0px;
    }
  }
`;
export const SelectedWarehouse = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    color: #7e7474;
  }
`;

export const SelectedProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SelectedProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #7e7474;
  }
`;

export const CountButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const CountButton = styled.button`
  background-color: #7b7878;
  padding: 10px;
  width: 45px;
  outline: none;
  border-radius: 5px;
  border: none;
  span {
    color: #7e7474;
  }
`;
export const PriceInput = styled.input`
  border: 1px solid #7e7474;
  outline: none;
  color: #7e7474;
  border-radius: 5px;
  background-color: transparent;
  width: 40px;
`;
