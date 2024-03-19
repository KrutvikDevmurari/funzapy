import Link from 'next/link';
import React from 'react';

interface categoryHeader {
    category: string,
    url: string
}
const CategoryHeader = ({ category, url }: categoryHeader) => {
    return (
        <div className="flex ml-5 my-3">
            <span className="h-6 w-1 bg-orange-500 rounded-md drop-shadow-sm shadow"></span>
            <h5 className="ml-3 text-orange-500 font-semibold">{category}</h5>
            <Link href={url} className="absolute right-5 inline-flex items-center justify-center px-4 py-2 text-sm font-bold leading-none text-indigo-100 bg-orange-500 rounded-full shadow-md drop-shadow-md">View All</Link>
        </div>
    );
};

export default CategoryHeader;
