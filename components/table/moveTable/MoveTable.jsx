import { createColumnHelper } from "@tanstack/react-table";
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
  helper.accessor((row) => row.finalWarehouseName, {
    header: () => <span>Final warehouse</span>,
    id: "finalWarehouseName",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  helper.accessor((row) => row.initialWarehouseName, {
    header: () => <span>Initial warehouse</span>,
    id: "initialWarehouseName",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  helper.accessor((row) => row.productName, {
    id: "productName",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Product</span>,
  }),
  helper.accessor((row) => row.count, {
    id: "count",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Count</span>,
  }),
];
export const MoveTable = ({ data }) => {
  return <BaseTable data={data} columns={columns} />;
};
