"use client";

import * as React from "react";

import { LoadingSpinner } from "@/components/loading/loading";
import { TableComponent } from "@/components/table/table";
import { useAppDispatch, useAppSelector } from "@/src/hooks/store-hooks";
import { fetchInventory } from "@/src/store/inventory-slice/thunk/get-inventory.thunk";

const Home = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.inventory.inventory)
  const isLoading = data?.status === 'initialized' || data?.status === 'loading'

  React.useEffect(() => {
    dispatch(fetchInventory());
  }, []);


  if (!data || isLoading)
    return (
      <div className="flex justify-center">
        <LoadingSpinner />
      </div>
    );
  if (data?.error) return <>An error has occurred...</>;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <div>
        <TableComponent data={data?.data} />
        <p className="mt-2 text-xs text-gray-500">
          {data?.data?.length || 0} total entries have been found.
        </p>
        {/*  <div className="text-right space-x-4">
          <Pagination
            disabled={!data?.length}
            hasNext={hasNext}
            onChange={(newValue: number) => {
              setPage({
                from: newValue * ROW_PER_PAGE - ROW_PER_PAGE,
                to: newValue * ROW_PER_PAGE,
              });
            }}
          />
        </div> */}
      </div>
    </main>
  );
};
export default Home;
