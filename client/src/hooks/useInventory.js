import { useEffect, useState } from "react";
import { getInventory } from "../services/inventoryServices";

const useInventory = (params) => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] =
    useState({});
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response =
          await getInventory(params);

        setProducts(response.products);
        setPagination(response.pagination);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return {
    products,
    pagination,
    loading,
  };
};

export default useInventory;