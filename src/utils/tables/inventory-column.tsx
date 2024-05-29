import { EditIventoryItem } from "@/components/modals/inventory/edit-inventory-item";
import { Button } from "@/components/ui";
import { DATE_FORMAT } from "@/src/constants";
import { Inventory } from "@/src/types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";

export const inventoryColumn: ColumnDef<Inventory>[] = [
  {
    id: "select",
    /* header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ), */
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex items-center">
        <EditIventoryItem
          initialValue={{
            // id: row.getValue("id"),
            name: row.getValue("name"),
            description: row.getValue("description"),
            tags: row.getValue("tags"),
            updatedAt: row.getValue("updatedAt"),
            createdAt: row.getValue("createdAt"),
            location: row.getValue("location"),
            quantity: row.getValue("quantity"),
            // price: row.getValue("price"),
            // category: row.getValue("category"),
          }}
        />
        <Button variant="ghost" onClick={() => alert(row.getValue("id"))}>
          <Trash2 size={16} className="cursor-pointer" />
        </Button>
      </div>
      /*  <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      /> */
    ),
    enableSorting: false,
    enableHiding: false,
  },
  /*  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  }, */
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => (
      <div className="lowercase">
        {(row.getValue("tags") as String[])?.join(", ")}
      </div>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => (
      <div className="lowercase">
        {format(row.getValue("updatedAt"), DATE_FORMAT)}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => (
      <div className="lowercase">
        {format(row.getValue("createdAt"), DATE_FORMAT)}
      </div>
    ),
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => (
      <div className="lowercase">
        {(row.getValue("location") as String[])?.join(", ")}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("quantity")}</div>
    ),
  },
  /* {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  }, */
];
