import { useEffect, useState } from "react";
import UserDetect from "./components/UserDetect";
import UserInput from "./components/UserInput";

import "./App.css";

function App() {
    const [userName, setUsername] = useState("");

    const searchData = (input) => {
        setUsername(input);
    };
    return (
        <section className="web-section bg-transparent grid place-items-center mx-auto w-full xl:max-w-[70%] gap-6">
            <div className="web-container flex flex-col items-center w-full max-w-[90%] xl:max-w-[70%]">
                <div className="top-web-container flex flex-row justify-between items-center w-full">
                    <h1 className="">Logo</h1>
                    <div className="darkMode">
                        <p>darkmode</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[90%] xl:max-w-[70%] flex flex-col gap-4">
                <UserInput onSearch={searchData} />
                <UserDetect userName={userName} />
            </div>
        </section>
    );
}

export default App;
