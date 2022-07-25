import { createColumnHelper } from "@tanstack/react-table";
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
    header: () => <span>name</span>,
  }),
  helper.accessor((row) => row.count, {
    header: () => <span>Count of products</span>,
    id: "count",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  helper.accessor((row) => row.sum, {
    id: "sum",
    cell: (info) => <span>{info.getValue() ?? 0}</span>,
    header: () => <span>Sum of products</span>,
  }),
];
export const WarehouseTable = ({ data }) => {
  return <BaseTable data={data} columns={columns} />;
};
