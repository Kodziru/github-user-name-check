import { useState } from "react";
import UserDetect from "./components/UserDetect";
import UserInput from "./components/UserInput";

import "./App.css";

function App() {
    // const [loader = setLoader] = useState();
    // const [users = setUsers] = useState([]);

    // SearchUsers = async = (username) => {
    //   setLoader(true);
    //   try {
    //     const response = await fetch(`https://api.github.com/search/users?q=${username}`)
    //   }
    // };

    return (
        <section className="web-section bg-transparent grid place-items-center mx-auto w-full max-w-[70%] gap-6">
            <div className="web-container flex flex-col items-center w-full">
                <div className="top-web-container flex flex-row justify-between items-center w-full">
                    <h1 className="">Logo</h1>
                    <div className="darkMode">
                        <p>darkmode</p>
                    </div>
                </div>
            </div>
            <UserInput />
            <UserDetect />
        </section>
    );
}

export default App;
