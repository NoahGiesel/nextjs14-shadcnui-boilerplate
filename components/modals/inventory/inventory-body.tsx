"use client";

import * as React from "react";
import CreatableSelect from "react-select/creatable";
import { LoadingSpinner } from "@/components/loading/loading";
import { DialogHeader, Input, DialogFooter, Button } from "@/components/ui";
import {
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Inventory } from "@/src/types";

interface InventoryItemModalBodyProps {
  initialValue: Inventory;
  loading: boolean;
  errors: string | null;
  onSubmitCallback: (values: Inventory) => void;
}

const InventoryItemModalBody: React.FC<InventoryItemModalBodyProps> = ({
  initialValue,
  onSubmitCallback,
  loading,
  errors,
}) => {
  const [values, setValues] = React.useState<Inventory>(initialValue);
  console.log("initi", initialValue);

  return (
    <div>
      <DialogHeader>
        <div className="space-y-6">
          <DialogTitle className="text-xl font-bold">New Item</DialogTitle>
          {/* <DialogDescription className="italic">
            Inventory evolution: introducing a new item to expand and refine the
            inventory.
          </DialogDescription> */}
          <div>
            <p className="font-bold mb-1">Item Name:</p>
            <Input
              value={values.name}
              onChange={(e) =>
                setValues({ ...values, name: e.target.value || "" })
              }
            />
          </div>
          <div>
            <p className="font-bold mb-1">Item Description:</p>
            <Input
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value || "" })
              }
            />
          </div>
          <div>
            <p className="font-bold mb-1">Item Tags:</p>
            <CreatableSelect
              isMulti
              value={values.tags?.map((el) => ({ value: el, label: el }))}
              options={values.tags?.map((el) => ({ value: el, label: el }))}
              onChange={(selectedOptions) => {
                const newTags = selectedOptions?.map((el) => el.value) || [];
                setValues({
                  ...values,
                  tags: newTags,
                });
              }}
            />
          </div>
          <div>
            <p className="font-bold mb-1">Item Locations:</p>
            <CreatableSelect
              isMulti
              value={values.location?.map((el) => ({ value: el, label: el }))}
              options={values.location?.map((el) => ({ value: el, label: el }))}
              onChange={(selectedOptions) => {
                const newLocation =
                  selectedOptions?.map((el) => el.value) || [];
                setValues({
                  ...values,
                  location: newLocation,
                });
              }}
            />
          </div>
          <div>
            <p className="font-bold mb-1">Item Quantity:</p>
            <Input
              type="number"
              defaultValue={values.quantity || 0}
              onChange={(e) =>
                setValues({ ...values, quantity: +e.target.value || 0 })
              }
            />
          </div>
        </div>
      </DialogHeader>
      <div className="text-danger">{!errors ? null : <>{errors}</>}</div>
      <DialogFooter className="mt-2 sm:justify-end">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
        <Button
          type="button"
          disabled={!!loading || !!errors}
          onClick={() => onSubmitCallback(values)}
        >
          {loading ? <LoadingSpinner /> : "Submit"}
        </Button>
      </DialogFooter>
    </div>
  );
};

export { InventoryItemModalBody };
