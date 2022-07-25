import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import colors from "../../../constants/colors";
import { BaseTable } from "../baseTable/BaseTable";
const helper = createColumnHelper();

const columns = [
  helper.accessor((row) => row.id, {
    id: "id",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Id</span>,
  }),
  helper.accessor((row) => row.number, {
    id: "number",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Contract number</span>,
  }),
  helper.accessor((row) => row.warehouseName, {
    header: () => <span>Warehouse</span>,
    id: "warehouseName",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  helper.accessor((row) => row.productName, {
    id: "productName",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Product</span>,
  }),
  helper.accessor((row) => row.count, {
    id: "count",
    cell: (info) => (
      <span style={{ color: colors.danger }}>-{info.getValue()}</span>
    ),
    header: () => <span>Count</span>,
  }),
  helper.accessor((row) => row.price, {
    id: "price",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Unit price</span>,
  }),
  helper.accessor((row) => row.income, {
    id: "income",
    cell: (info) => (
      <span style={{ color: colors.primary }}>+{info.getValue()}$</span>
    ),
    header: () => <span>Income</span>,
  }),
];
export const SaleTable = ({ data }) => {
  return <BaseTable data={data} columns={columns} />;
};
