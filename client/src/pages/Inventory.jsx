import { useEffect, useMemo, useState } from "react";
import { Download, PackageSearch } from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";

import useInventory from "../hooks/useInventory";
import useDebounce from "../hooks/useDebounce";

import SearchBar from "../components/inventory/SearchBar";
import InventoryFilters from "../components/inventory/InventoryFilters";
import InventoryTable from "../components/inventory/InventoryTable";
import Pagination from "../components/inventory/Pagination";

import { exportToCSV } from "../utils/exportCSV";

const Inventory = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [maxStock, setMaxStock] = useState("");
  const [sort, setSort] = useState("productName");
  const [order, setOrder] = useState("asc");

  const limit = 50;

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, category, maxPrice, maxStock]);

  const params = useMemo(
    () => ({
      page,
      limit,
      search: debouncedSearch,
      category,
      maxPrice,
      stock: maxStock,
      sort,
      order,
    }),
    [
      page,
      limit,
      debouncedSearch,
      category,
      maxPrice,
      maxStock,
      sort,
      order,
    ]
  );

  const { products, pagination, loading } = useInventory(params);

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Inventory Management
            </h1>

            <p className="mt-2 text-slate-500">
              Search, filter and manage warehouse inventory.
            </p>
          </div>

          <button
            onClick={() => exportToCSV(products, "inventory")}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
          >
            <Download size={18} />
            Export CSV
          </button>
        </div>

        {/* Search & Filters */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <div className="mt-6">
            <InventoryFilters
              category={category}
              setCategory={setCategory}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              maxStock={maxStock}
              setMaxStock={setMaxStock}
            />
          </div>

        </div>

        {/* Table Section */}

        {loading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="animate-pulse space-y-4">

              <div className="h-12 rounded-lg bg-slate-200"></div>

              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="h-10 rounded-lg bg-slate-100"
                />
              ))}
            </div>
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white py-20 shadow-sm">
            <div className="flex flex-col items-center">

              <PackageSearch
                size={64}
                className="text-slate-300"
              />

              <h2 className="mt-6 text-2xl font-semibold text-slate-800">
                No Products Found
              </h2>

              <p className="mt-2 text-slate-500">
                Try changing your search keywords or filters.
              </p>

            </div>
          </div>
        ) : (
          <>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              <InventoryTable
                data={products}
                sort={sort}
                order={order}
                setSort={setSort}
                setOrder={setOrder}
              />

            </div>

            {pagination && (
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                hasNextPage={pagination.hasNextPage}
                onPageChange={setPage}
              />
            )}
          </>
        )}

      </div>
    </DashboardLayout>
  );
};

export default Inventory;