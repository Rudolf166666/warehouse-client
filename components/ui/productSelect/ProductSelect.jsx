import { Input } from "../../common/input/Input";
import { GarbageIcon } from "../../icons";
import {
  Wrapper,
  SelectTitle,
  RemoveProductButton,
  TitleWrapper,
  InputWrapper,
} from "./ProductSelect.styled";

export const ProductSelect = ({
  product,
  onHandleChangePrice,
  onHandleChangeCount,
  onHandleRemoveProduct,
  withPrice = true,
}) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <SelectTitle>{product.name}</SelectTitle>
      </TitleWrapper>
      <InputWrapper>
        <Input
          type="number"
          title="Count"
          direction="row"
          min={0}
          value={product.count}
          onChange={onHandleChangeCount}
        />
      </InputWrapper>
      {withPrice && (
        <InputWrapper>
          <Input
            type="number"
            title="Price"
            direction="row"
            min={0}
            value={product.price}
            onChange={onHandleChangePrice}
          />
        </InputWrapper>
      )}
      <RemoveProductButton onClick={onHandleRemoveProduct}>
        <GarbageIcon />
      </RemoveProductButton>
    </Wrapper>
  );
};
