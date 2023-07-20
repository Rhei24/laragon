import React from "react";
import { Link } from "@inertiajs/react";

export default function Card({ className = "", data }) {
    return (
        <div className={"" + className}>
            <a
                href="/"
                className="p-3 shadow-md rounded-md overflow-hidden dark:bg-gray-700 w-96 mt-4 hover:-pb-12"
            >
                <img src={data.image} className="w-full mb-2 object-cover" />
                <span>
                    <a href="/" className="text-sm dark:text-white leading-3">
                        {data.profileName}
                    </a>
                </span>
                <span>
                    <p className="text-blue-600 text-sm hover:underline underline-offset-2">
                        <p className="text-left text-xs truncate">
                            {data.profileLink}
                        </p>
                    </p>
                </span>
                <p className="break-all w-full mb-2 text-xs line-clamp-5 text-gray-400">
                    {data.profileDescription}
                </p>
            </a>
        </div>
    );
}
