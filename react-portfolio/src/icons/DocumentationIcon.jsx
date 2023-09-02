import React from "react";

function DocumentationIcon({ title }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="var(--color-on-surface)"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 -4 39 39"
        >
            <path strokeWidth="1.2" d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" />
            <title>{title}</title>
        </svg>

    )
}

export default DocumentationIcon;