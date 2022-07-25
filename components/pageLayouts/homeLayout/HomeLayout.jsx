import { useRouter } from "next/router";
import { useState } from "react";
import { Card } from "../../card";
import {
  MoveIcon,
  ProceedIcon,
  ProductIcon,
  ProductListIcon,
  SaleIcon,
  StatisticsIcon,
  WarehouseIcon,
  WarehouseListIcon,
} from "../../icons";
import {
  MoveModal,
  ProceedModal,
  ProductsModal,
  SaleModal,
  WarehouseModal,
} from "../../modals";
import { CardsWrapper, Title, Wrapper } from "./HomeLayout.styled";

export const HomeLayout = () => {
  const router = useRouter();
  const [openModals, setOpenModals] = useState({
    warehouse: false,
    product: false,
    proceed: false,
    sale: false,
    move: false,
  });
  const OnHandleCloseModal = (val) => () =>
    setOpenModals((prev) => ({ ...prev, [val]: false }));
  const OnHandleOpenModal = (val) => () =>
    setOpenModals((prev) => ({ ...prev, [val]: true }));
  const cards = [
    {
      title: "Create warehouse",
      onSelect: OnHandleOpenModal("warehouse"),
      icon: <WarehouseIcon />,
    },
    {
      title: "Create product",
      onSelect: OnHandleOpenModal("product"),
      icon: <ProductIcon />,
    },
    {
      title: "Move products between warehouses",
      onSelect: OnHandleOpenModal("move"),
      icon: <MoveIcon />,
    },
    {
      title: "Add products to warehouse",
      onSelect: OnHandleOpenModal("proceed"),
      icon: <ProceedIcon />,
    },
    {
      title: "Sale products from warehouse",
      onSelect: OnHandleOpenModal("sale"),
      icon: <SaleIcon />,
    },
    {
      title: "List of warehouses",
      onSelect: () => router.push("/warehouse"),
      icon: <WarehouseListIcon />,
    },
    {
      title: "Warehouse movement statistics",
      onSelect: () => router.push("/statistics"),
      icon: <StatisticsIcon />,
    },
    {
      title: "List of products",
      onSelect: () => router.push("/products"),
      icon: <ProductListIcon />,
    },
  ];
  return (
    <Wrapper>
      <WarehouseModal
        onClose={OnHandleCloseModal("warehouse")}
        isOpen={openModals.warehouse}
      />
      <ProductsModal
        onClose={OnHandleCloseModal("product")}
        isOpen={openModals.product}
      />
      <ProceedModal
        onClose={OnHandleCloseModal("proceed")}
        isOpen={openModals.proceed}
      />
      <SaleModal
        onClose={OnHandleCloseModal("sale")}
        isOpen={openModals.sale}
      />
      <MoveModal
        onClose={OnHandleCloseModal("move")}
        isOpen={openModals.move}
      />
      <Title>Dashboard</Title>
      <CardsWrapper>
        {cards.map((el, index) => (
          <Card card={el} key={el.title + index} />
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};
