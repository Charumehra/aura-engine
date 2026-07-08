import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import {
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
} from "lucide-react";

const InventoryTable = ({
  data,
  sort,
  order,
  setSort,
  setOrder,
}) => {
  const handleSort = (field) => {
    if (sort === field) {
      setOrder((prev) =>
        prev === "asc" ? "desc" : "asc"
      );
    } else {
      setSort(field);
      setOrder("asc");
    }
  };

  const SortIcon = ({ field }) => {
    if (sort !== field)
      return (
        <ArrowUpDown
          size={16}
          className="inline ml-1"
        />
      );

    return order === "asc" ? (
      <ArrowUp
        size={16}
        className="inline ml-1"
      />
    ) : (
      <ArrowDown
        size={16}
        className="inline ml-1"
      />
    );
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "productName",
        header: () => (
          <button
            onClick={() =>
              handleSort("productName")
            }
            className="flex items-center font-semibold"
          >
            Product
            <SortIcon field="productName" />
          </button>
        ),
      },
      {
        accessorKey: "sku",
        header: "SKU",
      },
      {
        accessorKey: "category",
        header: () => (
          <button
            onClick={() =>
              handleSort("category")
            }
            className="flex items-center font-semibold"
          >
            Category
            <SortIcon field="category" />
          </button>
        ),
      },
      {
        accessorKey: "price",
        header: () => (
          <button
            onClick={() =>
              handleSort("price")
            }
            className="flex items-center font-semibold"
          >
            Price ($)
            <SortIcon field="price" />
          </button>
        ),
        cell: ({ row }) =>
          `$${row.original.price.toFixed(2)}`,
      },
      {
        accessorKey: "stockQuantity",
        header: () => (
          <button
            onClick={() =>
              handleSort("stockQuantity")
            }
            className="flex items-center font-semibold"
          >
            Stock
            <SortIcon field="stockQuantity" />
          </button>
        ),
      },
      {
        accessorKey: "reorderLevel",
        header: () => (
          <button
            onClick={() =>
              handleSort("reorderLevel")
            }
            className="flex items-center font-semibold"
          >
            Reorder
            <SortIcon field="reorderLevel" />
          </button>
        ),
      },
    ],
    [sort, order]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="min-w-full">
        <thead className="sticky top-0 bg-slate-800 text-white z-10">
          {table.getHeaderGroups().map((group) => (
            <tr key={group.id}>
              {group.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-5 py-4 text-left whitespace-nowrap"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b hover:bg-slate-50 transition"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-5 py-4 whitespace-nowrap"
                >
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {data.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          No products found.
        </div>
      )}
    </div>
  );
};

export default InventoryTable;