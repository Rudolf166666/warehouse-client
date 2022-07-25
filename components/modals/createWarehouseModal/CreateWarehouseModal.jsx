import axios from "axios";
import { useState } from "react";
import { useNotification } from "../../../hooks/useNotification";
import { useCreateWarehouseMutation } from "../../../redux/warehouseApi";
import {
  Wrapper,
  InputTitle,
  Input,
  InputWrapper,
  Title,
  ButtonWrapper,
  Button,
} from "./CreateWarehouse.styled";

export const CreateWarehouseModal = () => {
  const [name, setName] = useState("");
  const { createNotification, messageTypes } = useNotification();
  const [createWarehouse, { data }] = useCreateWarehouseMutation();
  const onHandleType = ({ target }) => setName(target.value);
  const onHandleCreate = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER}/warehouse`,
        { name }
      );
      createNotification(response.data.message, messageTypes.SUCCESS);
    } catch (error) {
      console.log(error);
      createNotification(error.response.data.message, messageTypes.ERROR);
    }
  };
  return (
    <Wrapper>
      <Title>Create warehouse</Title>
      <InputWrapper>
        <InputTitle>Name</InputTitle>
        <Input onChange={onHandleType} value={name} />
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={onHandleCreate}>
          <span>Create</span>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
