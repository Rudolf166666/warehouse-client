import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "../../pagination";
import { WarehouseTable } from "../../table";
import { Title, Wrapper } from "./WarehouseLayout.styled";

export const WarehouseLayout = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const amount = 5;
  const getWarehousesInfo = async (selectedPage) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER}/warehouse?page=${selectedPage}&amount=${amount}`
    );

    setData(res.data.warehouses);
    setPage(res.data.page);
    setTotal(res.data.total);
    setPagesCount(res.data.pagesCount);
  };
  useEffect(() => {
    getWarehousesInfo(1);
  }, []);
  return (
    <Wrapper>
      <Title>Warehouses</Title>
      <WarehouseTable data={data} />
      <Pagination
        onSelect={getWarehousesInfo}
        pagesCount={pagesCount}
        page={page}
      />
    </Wrapper>
  );
};
