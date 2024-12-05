"use client"; // Mark this component as a client-side component

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Pagination = ({ totalPosts=100, itemLimit=10, currentPage=1 }) => {
    const router = useRouter();
    const [itemsPerPage, setItemsPerPage] = useState(itemLimit);
    const totalPages = Math.ceil(totalPosts / itemsPerPage );


    const handleItemsPerPageChange = (event) => {
        const value = event.target.value;
        setItemsPerPage(value)
        router.push(`/posts?page=${1}&&itemsparpage=${value}`);
    };

    // Handle page change
    const handlePageChange = (newPage) => {
        router.push(`/posts?page=${newPage}&&itemsparpage=${itemsPerPage}`);
    };

    return (
        <div className="mb-3 flex items-center">
            <div className="flex">
                <label className="pr-2" htmlFor="parPage">
                    Select items per page
                </label>
                <select
                    className="border rounded mr-3"
                    name="parPage"
                    id="parPage"
                    value={itemsPerPage} 
                    onChange={handleItemsPerPageChange}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                </select>
            </div>
            {/* Pagination controls */}
            <div className="">
                <button
                    className={`py-2 px-4 inline-block m-2 border rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-400`}
                    disabled={currentPage <= 1}
                    onClick={() => handlePageChange(parseInt(currentPage) - 1)}
                >
                    Previous
                </button>
                <span>
                    {currentPage} / {totalPages}
                </span>
                <button
                    className={`py-2 px-4 inline-block  m-2 border rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-400`}
                    disabled={currentPage >= totalPages}
                    onClick={() => handlePageChange(parseInt(currentPage) + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
