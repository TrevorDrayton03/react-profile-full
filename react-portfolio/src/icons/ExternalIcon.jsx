import React from "react";

function ExternalIcon({ title }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            // viewBox="0 0 200 200"
            fill="none"
            stroke="var(--color-on-surface)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        // class="feather feather-external-link"
        // height="50%"
        // width="50%"
        >
            <title>{title}</title>
            <path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
            </path>
            <polyline
                points="15 3 21 3 21 9">
            </polyline><line
                x1="10"
                y1="14"
                x2="21"
                y2="3">
            </line></svg>
    )
}

export default ExternalIcon;