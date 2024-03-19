import React from 'react';

interface commonHeaders {
    text: String,
    color: String
}

const CommonHeaders = ({ text, color }: commonHeaders) => {
    return (
        <div className="flex ml-5 my-3">
            <span className={`h-6 w-1 ${color} rounded-md drop-shadow-sm shadow`}></span>
            <h5 className="ml-3">{text}</h5>
        </div>
    );
}

export default CommonHeaders;


