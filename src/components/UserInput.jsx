import React from "react";
import { CiSearch } from "react-icons/ci";

export default function UserInput() {
    return (
        <div className="input-container relative flex items-center w-full ">
            <CiSearch className="left-2 h-8 w-8 absolute " />
            <input
                className="input outline-none h-16 rounded-xl px-12 w-full"
                placeholder="Search user"
            />
            <button className="btn absolute right-2 bg-blue-600 ">
                submit
            </button>
        </div>
    );
}
