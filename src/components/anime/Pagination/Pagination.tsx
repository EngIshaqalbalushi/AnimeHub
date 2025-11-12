import React from "react";
import Button from "../../common/Button/Button";
import "./Pagination.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        Previous
      </Button>

      <div className="pagination__pages">
        {pages.map((page) => (
          <button
            key={page}
            className={`pagination__page ${
              page === currentPage ? "pagination__page--active" : ""
            }`}
            onClick={() => onPageChange(page)}>
            {page}
          </button>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
