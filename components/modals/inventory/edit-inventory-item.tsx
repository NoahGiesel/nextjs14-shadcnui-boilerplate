"use client";

import * as React from "react";
import { Dialog, DialogTrigger, Button, DialogContent } from "@/components/ui";
import { Inventory } from "@/src/types";
import { ENDPOINT_URL } from "@/src/constants";
import { Edit } from "lucide-react";
import { InventoryItemModalBody } from "./inventory-body";

interface EditIventoryItemProps {
  initialValue: Inventory;
}

const EditIventoryItem: React.FC<EditIventoryItemProps> = ({
  initialValue,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const [loading, setLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<string | null>(null);

  const handleSubmit = async (values: Inventory) => {
    window.console.log("insert values ", values);
    return await fetch(`${ENDPOINT_URL}/inventory/update`, {
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
        <Button variant="ghost">
          <Edit size={15} className="cursor-pointer" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <InventoryItemModalBody
          initialValue={initialValue}
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

export { EditIventoryItem };
