"use client";

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) {

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const maxVisible = 3;

  const getVisiblePages = () => {

    let start = Math.max(1, currentPage - 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);

  };

  const visiblePages = getVisiblePages();

  return (

    <div className="flex justify-center items-center gap-1 sm:gap-3 mt-10 sm:mt-14 flex-wrap">

      {/* PREV */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl 
        border border-[#78C841]/30 text-[#78C841] disabled:opacity-40
        hover:bg-[#78C841]/10 transition"
      >
        Prev
      </button>

      {/* FIRST PAGE */}
      {visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl 
            border border-[#78C841]/30 text-[#78C841] hover:bg-[#78C841]/10 transition"
          >
            1
          </button>

          {visiblePages[0] > 2 && (
            <span className="px-1 sm:px-2 text-gray-400 text-xs sm:text-sm">...</span>
          )}
        </>
      )}

      {/* PAGE NUMBERS */}
      {visiblePages.map((page) => (

        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl font-medium transition
          ${
            currentPage === page
              ? "bg-gradient-to-r from-[#78C841] to-[#5fae2e] text-white shadow-md"
              : "border border-[#78C841]/30 text-[#78C841] hover:bg-[#78C841]/10"
          }`}
        >
          {page}
        </button>

      ))}

      {/* LAST PAGE */}
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>

          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-1 sm:px-2 text-gray-400 text-xs sm:text-sm">...</span>
          )}

          <button
            onClick={() => onPageChange(totalPages)}
            className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl 
            border border-[#78C841]/30 text-[#78C841] hover:bg-[#78C841]/10 transition"
          >
            {totalPages}
          </button>

        </>
      )}

      {/* NEXT */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-xl 
        border border-[#78C841]/30 text-[#78C841] disabled:opacity-40
        hover:bg-[#78C841]/10 transition"
      >
        Next
      </button>

    </div>

  );
}