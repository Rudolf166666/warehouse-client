import axios from "axios";
import { useState } from "react";
import { useNotification } from "../../../hooks/useNotification";
import {
  Wrapper,
  InputTitle,
  Input,
  InputWrapper,
  Title,
  ButtonWrapper,
  Button,
} from "./CreateProductsModal.styled";

export const CreateProductsModal = () => {
  const [data, setData] = useState({ name: "", article: "" });
  const { createNotification, messageTypes } = useNotification();
  const onHandleType =
    (key) =>
    ({ target }) =>
      setData((prev) => ({ ...prev, [key]: target.value }));
  const onHandleCreate = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER}/product`,
        { ...data }
      );
      createNotification(response.data.message, messageTypes.SUCCESS);
    } catch (error) {
      console.log(error);
      createNotification(error.response.data.message, messageTypes.ERROR);
    }
  };
  return (
    <Wrapper>
      <Title>Create product</Title>
      <InputWrapper>
        <InputTitle>Name</InputTitle>
        <Input onChange={onHandleType("name")} value={data.name} />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Article</InputTitle>
        <Input onChange={onHandleType("article")} value={data.article} />
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={onHandleCreate}>
          <span>Create</span>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
