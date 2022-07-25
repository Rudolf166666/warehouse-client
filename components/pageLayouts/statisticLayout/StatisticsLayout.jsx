import { Pagination } from "../../pagination";
import { useEffect, useMemo, useState } from "react";
import STATISTIC_TABS from "../../../constants/statisticTabs";
import { ProceedTable, SaleTable } from "../../table";
import { Title, Wrapper, TabsWrapper, Tab } from "./StatisticsLayout.styled";
import axios from "axios";
import { MoveTable } from "../../table/moveTable";

const TabContent = ({ Table, accessor, url }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const amount = 5;
  const getTableInfo = async (selectedPage) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER}/document/${url}?page=${selectedPage}&amount=${amount}`
    );

    setData(res.data[accessor]);
    setPage(res.data.page);
    setTotal(res.data.total);
    setPagesCount(res.data.pagesCount);
  };
  useEffect(() => {
    getTableInfo(1);
  }, []);

  return (
    <>
      <Table data={data} />
      <Pagination onSelect={getTableInfo} pagesCount={pagesCount} page={page} />
    </>
  );
};
export const StatisticsLayout = () => {
  const [selectedTab, setSelectedTab] = useState(STATISTIC_TABS.PROCEED.value);
  const onHandleChangeTab = (val) => () => setSelectedTab(val);
  const tabs = useMemo(() => {
    return Object.values(STATISTIC_TABS).map((el) => {
      return (
        <Tab
          onClick={onHandleChangeTab(el.value)}
          isSelected={el.value === selectedTab}
          key={el.title + "_" + el.value}
        >
          <span>{el.title}</span>
        </Tab>
      );
    });
  }, [selectedTab]);
  const table = useMemo(() => {
    switch (selectedTab) {
      case STATISTIC_TABS.PROCEED.value:
        return (
          <TabContent
            key={"PROCEED"}
            accessor="proceeds"
            url="proceed"
            Table={ProceedTable}
          />
        );
      case STATISTIC_TABS.SALE.value:
        return (
          <TabContent
            key={"SALE"}
            accessor="sales"
            url="sale"
            Table={SaleTable}
          />
        );
      case STATISTIC_TABS.MOVE.value:
        return (
          <TabContent
            key={"MOVE"}
            accessor="moves"
            url="move"
            Table={MoveTable}
          />
        );
      default:
        return null;
    }
  }, [selectedTab]);
  return (
    <Wrapper>
      <Title>Statistics</Title>
      <TabsWrapper>{tabs}</TabsWrapper>
      {table}
    </Wrapper>
  );
};
