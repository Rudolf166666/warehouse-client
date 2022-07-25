import axios from "axios";
import { useCallback, useState } from "react";
import { useNotification } from "../../hooks/useNotification";

export const useProduct = (withTwoWarehouses = false) => {
  const { createNotification, messageTypes } = useNotification();
  const [products, setProducts] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [warehouse, setWarehouse] = useState(null);
  const [secondWarehouse, setSecondWarehouse] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [number, setNumber] = useState("");
  const [warehouseName, setWarehouseName] = useState("");

  const [productName, setProductName] = useState("");
  const onHandleProductType = ({ target }) => setProductName(target.value);
  const onHandleWarehouseType = ({ target }) => setWarehouseName(target.value);
  const onHandleNumberType = ({ target }) => setNumber(target.value);
  const selectWarehouse = useCallback(
    (el) => () => {
      if (withTwoWarehouses) {
        console.log(warehouse, secondWarehouse);
        if (warehouse) {
          setSecondWarehouse(el);
        } else {
          setWarehouse(el);
        }
      } else {
        setWarehouse(el);
      }
    },
    [warehouse, secondWarehouse]
  );
  const removeInitialWarehouse = () => {
    setWarehouse(secondWarehouse);
    setSecondWarehouse(null);
  };
  const removeFinalWarehouse = () => {
    setSecondWarehouse(null);
  };
  const selectProduct = (el) => () => {
    if (!selectedProducts.find((p) => p.id === el.id)) {
      setSelectedProducts((prev) => [...prev, { ...el, count: 0, price: 0 }]);
    }
  };
  const removeProduct = (p) => () => {
    setSelectedProducts((prev) => prev.filter((el) => el.id !== p.id));
  };
  const onHandleChangePrice =
    (el) =>
    ({ target }) => {
      setSelectedProducts((prev) =>
        prev.map((p) => {
          if (p.id === el.id) {
            return { ...p, price: target.value };
          }
          return p;
        })
      );
    };
  const onHandleChangeCount =
    (el) =>
    ({ target }) => {
      setSelectedProducts((prev) =>
        prev.map((p) => {
          if (p.id === el.id) {
            return { ...p, count: target.value };
          }
          return p;
        })
      );
    };
  const findWarehouses = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER}/warehouse/search?name=${warehouseName}`
      );
      setWarehouses(response.data.warehouses);
    } catch (error) {
      createNotification(error.message, messageTypes.ERROR);
    }
  };
  const findProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER}/product/search?name=${productName}`
      );
      setProducts(response.data.products);
    } catch (error) {
      createNotification(error.message, messageTypes.ERROR);
    }
  };

  return {
    products,
    warehouses,
    warehouse,
    selectedProducts,
    number,
    warehouseName,
    productName,
    secondWarehouse,
    onHandleProductType,
    onHandleWarehouseType,
    onHandleNumberType,
    selectWarehouse,
    selectProduct,
    removeProduct,
    onHandleChangePrice,
    findProducts,
    findWarehouses,
    onHandleChangeCount,
    removeInitialWarehouse,
    removeFinalWarehouse,
  };
};
