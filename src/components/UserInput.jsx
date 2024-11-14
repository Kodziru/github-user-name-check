import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function UserInput({ onSearch }) {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSearchClick = () => {
        onSearch(inputValue);
    };

    return (
        <div className="input-container relative flex items-center w-full">
            <CiSearch className="left-2 h-8 w-8 absolute" />
            <input
                className="input outline-none h-16 rounded-xl px-12 w-full"
                placeholder="Search user"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button
                onClick={handleSearchClick}
                className="btn absolute right-2 bg-blue-600"
            >
                Submit
            </button>
        </div>
    );
}
