import axios from "axios";
import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { useNotification } from "../../../hooks/useNotification";
import { Input } from "../../common/input/Input";
import { GarbageIcon } from "../../icons";
import { ProductSelect } from "../../ui/productSelect";
import { useProduct } from "../useProduct";
import {
  Wrapper,
  Title,
  ButtonWrapper,
  Button,
  List,
  SelectedWarehouse,
  RemoveWarehouseButton,
} from "./MoveProductsModal.styled";

export const MoveProductsModal = () => {
  const { createNotification, messageTypes } = useNotification();
  const {
    warehouseName,
    selectedProducts,
    number,
    warehouse,
    productName,
    products,
    warehouses,
    secondWarehouse,
    onHandleChangeCount,
    onHandleNumberType,
    onHandleWarehouseType,
    onHandleProductType,
    findProducts,
    findWarehouses,
    selectWarehouse,
    selectProduct,
    removeProduct,
    removeFinalWarehouse,
    removeInitialWarehouse,
  } = useProduct(true);
  const onHandleMove = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER}/document/move`,
        {
          number,
          initialWarehouseId: warehouse?.id,
          finalWarehouseId: secondWarehouse?.id,
          products: selectedProducts.map((el) => ({ ...el, productId: el.id })),
        }
      );
      createNotification(response.data.message, messageTypes.SUCCESS);
    } catch (error) {
      console.log(error);
      createNotification(error?.response?.data?.message, messageTypes.ERROR);
    }
  };
  useEffect(() => {
    findWarehouses();
  }, [useDebounce(warehouseName, 500)]);
  useEffect(() => {
    findProducts();
  }, [useDebounce(productName, 500)]);

  return (
    <Wrapper>
      <Title>Move Products</Title>
      <Input title="Number" onChange={onHandleNumberType} value={number} />
      <Input
        title="Warehouse name"
        onChange={onHandleWarehouseType}
        value={warehouseName}
      />
      {warehouses.length > 0 && (
        <List>
          {warehouses.map((el) => (
            <p
              onClick={selectWarehouse(el)}
              key={`warehouse_${el.name}_${el.id}`}
            >
              {el.name}
            </p>
          ))}
        </List>
      )}
      <Input
        title="Product name"
        onChange={onHandleProductType}
        value={productName}
      />
      {products.length > 0 && (
        <List>
          {products.map((el) => (
            <p onClick={selectProduct(el)} key={`product_${el.name}_${el.id}`}>
              {el.name}
            </p>
          ))}
        </List>
      )}
      {warehouse && (
        <SelectedWarehouse>
          <span>From warehouse : {warehouse.name}</span>
          <RemoveWarehouseButton onClick={removeInitialWarehouse}>
            <GarbageIcon />
          </RemoveWarehouseButton>
        </SelectedWarehouse>
      )}
      {secondWarehouse && (
        <SelectedWarehouse>
          <span>To warehouse : {secondWarehouse.name}</span>
          <RemoveWarehouseButton onClick={removeFinalWarehouse}>
            <GarbageIcon />
          </RemoveWarehouseButton>
        </SelectedWarehouse>
      )}
      {selectedProducts.map((el) => (
        <ProductSelect
          withPrice={false}
          key={`selected_product_${el.id}_${el.article}`}
          onHandleChangeCount={onHandleChangeCount(el)}
          onHandleRemoveProduct={removeProduct(el)}
          product={el}
        />
      ))}
      <ButtonWrapper>
        <Button onClick={onHandleMove}>
          <span>Move</span>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
