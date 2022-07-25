import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "../../pagination";
import { ProductsTable } from "../../table";
import { Title, Wrapper } from "./ProductsLayout.styled";

export const ProductsLayout = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const amount = 5;
  const getProductsInfo = async (selectedPage) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER}/product?page=${selectedPage}&amount=${amount}`
    );

    setData(res.data.products);
    setPage(res.data.page);
    setTotal(res.data.total);
    setPagesCount(res.data.pagesCount);
  };
  useEffect(() => {
    getProductsInfo(1);
  }, []);
  return (
    <Wrapper>
      <Title>Products</Title>
      <ProductsTable data={data} />
      <Pagination
        onSelect={getProductsInfo}
        pagesCount={pagesCount}
        page={page}
      />
    </Wrapper>
  );
};
