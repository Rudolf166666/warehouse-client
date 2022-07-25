import { createColumnHelper } from "@tanstack/react-table";
import colors from "../../../constants/colors";
import { BaseTable } from "../baseTable/BaseTable";
const helper = createColumnHelper();

const columns = [
  helper.accessor((row) => row.id, {
    id: "id",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Id</span>,
  }),
  helper.accessor((row) => row.name, {
    id: "name",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Name</span>,
  }),
  helper.accessor((row) => row.article, {
    id: "article",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Article</span>,
  }),
  helper.accessor((row) => row.lastPurchasePrice, {
    id: "lastPurchasePrice",
    cell: (info) => <span>{info.getValue() ?? 0}</span>,
    header: () => <span>Last purchase price</span>,
  }),
  helper.accessor((row) => row.lastSalePrice, {
    id: "lastSalePrice",
    cell: (info) => <span>{info.getValue() ?? 0}</span>,
    header: () => <span>Last sale price</span>,
  }),
  helper.accessor((row) => row.count, {
    header: () => <span>Count of warehouses </span>,
    id: "count",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  helper.accessor((row) => row.sum, {
    id: "sum",
    cell: (info) => <span>{info.getValue() ?? 0}</span>,
    header: () => <span>Count of products</span>,
  }),
  helper.accessor((row) => row.costs, {
    id: "costs",
    cell: (info) => (
      <span style={{ color: colors.danger }}>-{info.getValue()}$</span>
    ),
    header: () => <span>Costs</span>,
  }),
  helper.accessor((row) => row.income, {
    id: "income",
    cell: (info) => (
      <span style={{ color: colors.primary }}>+{info.getValue()}$</span>
    ),
    header: () => <span>Income</span>,
  }),
];
export const ProductsTable = ({ data }) => {
  return <BaseTable data={data} columns={columns} />;
};
