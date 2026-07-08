const Pagination = ({
  currentPage,
  totalPages,
  hasNextPage,
  onPageChange,
}) => {
  return (
    <div className="flex justify-end items-center gap-4 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded bg-slate-700 text-white disabled:bg-gray-300"
      >
        Previous
      </button>

      <span className="font-medium">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNextPage}
        className="px-4 py-2 rounded bg-slate-700 text-white disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;