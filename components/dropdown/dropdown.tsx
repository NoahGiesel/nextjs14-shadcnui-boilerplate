import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ItemType = { value: string; label: string };

interface DropdownProps {
  data: ItemType[];
  defaultValue?: string;
  onOpenChange?: (open: boolean) => void;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  data,
  defaultValue,
  onOpenChange,
  onValueChange,
  disabled = false,
}) => {
  return (
    <Select
      disabled={disabled || !data?.length}
      onOpenChange={onOpenChange}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {data?.map((item, idx) => (
          <SelectItem key={`${item}_${idx}`} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { Dropdown };
