import * as React from "react";

import { Button } from "../ui/button";

interface PaginationProps {
  onChange: (newValue: number) => void;
  disabled?: boolean;
  intialPage?: number;
  hasNext?: boolean;
  disabledClassName?: string;
}
const Pagination: React.FC<PaginationProps> = ({
  onChange,
  disabled,
  intialPage,
  hasNext = true,
  disabledClassName = "opacity-55",
}) => {
  const [activePage, setActivePage] = React.useState<number>(intialPage || 1);

  const handlePageChange = (newValue: number) => {
    setActivePage(newValue);
    onChange(newValue);
  };

  return (
    <>
      <Button
        onClick={() => {
          if (disabled || activePage === 1) return;
          handlePageChange(activePage - 1);
        }}
        className={activePage === 1 ? disabledClassName : ""}
        disabled={disabled}
      >
        Previous
      </Button>
      <Button
        onClick={() => {
          if (disabled || !hasNext) return;
          handlePageChange(activePage + 1);
        }}
        className={!hasNext ? disabledClassName : ""}
        disabled={disabled}
      >
        Next
      </Button>
    </>
  );
};

export { Pagination };
