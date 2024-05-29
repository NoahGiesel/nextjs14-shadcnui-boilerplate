"use client";

import * as React from "react";
import { Dialog, DialogTrigger, Button, DialogContent } from "@/components/ui";
import { Inventory } from "@/src/types";
import { ENDPOINT_URL } from "@/src/constants";
import { InventoryItemModalBody } from "./inventory-body";
import { fetchInventory } from "@/src/store/inventory-slice/thunk/get-inventory.thunk";
import { useAppDispatch } from "@/src/hooks/store-hooks";

const defaultInitialValue: Inventory = {
  id: undefined,
  name: undefined,
  description: undefined,
  tags: undefined,
  updatedAt: undefined,
  createdAt: undefined,
  location: undefined,
  quantity: undefined,
  price: undefined,
  category: undefined,
};
const NewIventoryItem: React.FC = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState<boolean>(false);

  const [loading, setLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<string | null>(null);

  const handleSubmit = async (values: Inventory) => {
    window.console.log("insert values ", values);
    return await fetch(`${ENDPOINT_URL}/inventory/insert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button>Add New</Button>
      </DialogTrigger>
      <DialogContent>
        <InventoryItemModalBody
          initialValue={defaultInitialValue}
          errors={errors}
          loading={loading}
          onSubmitCallback={(values) => {
            setLoading(true);
            window.console.log("Submitting form values...", values);
            handleSubmit(values)
              .then((res) => {
                window.console.log("response is ", res);
                if (!res.ok) {
                  setLoading(false);
                  setErrors(res?.toString());
                  return;
                }
                dispatch(fetchInventory());
                setLoading(false);
                setErrors(null);
                setOpen(false);
              })
              .catch((err) => {
                setLoading(false);
                setErrors(err);
              });
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export { NewIventoryItem };
