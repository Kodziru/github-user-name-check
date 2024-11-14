import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaTwitter, FaLink, FaBuilding } from "react-icons/fa";
import { Octokit } from "@octokit/core";
import dotenv from "dotenv";
dotenv.config();
export default function UserDetect({ userName }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (!userName) return;

        const octokit = new Octokit({
            auth: process.env.GITHUB_AUTH_TOKEN,
        });

        async function getUserInfo(username) {
            try {
                const response = await octokit.request(
                    "GET /users/{username}",
                    {
                        username: username,
                        headers: {
                            "X-GitHub-Api-Version": "2022-11-28",
                        },
                    }
                );
                setUserData(response.data);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des informations :",
                    error
                );
                setUserData(null);
            }
        }

        getUserInfo(userName);
    }, [userName]);

    return (
        <div className="user-detect grid grid-cols-1 md:grid-cols-5 gap-4 xl:gap-8 w-full items-start text-start rounded-xl p-4 bg-white">
            <div className="left-user-box user-image-container bg-slate-500 rounded-full flex items-center justify-center w-[100px] h-[100px] md:w-[150px] md:h-[150px] mx-auto md:mx-0 xl:ml-[-1em]">
                <img
                    src={userData.avatar_url}
                    className="user-image w-16 h-16 md:w-24 md:h-24 p-2 rounded-full"
                />
            </div>

            <div className="right-user-box w-full grid gap-4 md:col-span-4">
                <div className="user-info-container grid grid-cols-1 md:grid-cols-2 items-start w-full">
                    <div className="flex flex-col text-center md:text-left">
                        <h2 className="username text-2xl font-semibold">
                            {userData.name || "no username"}
                        </h2>
                        <span className="user-id opacity-70 text-sky-400">
                            @{userData.login}
                        </span>
                    </div>
                    <div className="user-join-date text-center md:text-right text-gray-500">
                        <p>
                            Joined:{" "}
                            {new Date(userData.created_at).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                <p className="font-light opacity-70 w-full mt-2 text-center md:text-left">
                    {userData.bio || "No bio"}
                </p>

                <div className="rounded-xl profile-data grid py-4 text-[13px] grid-cols-3 gap-[10%] mt-4 text-center">
                    <div className="profile-data-element">
                        <p>Repos</p>
                        <span>{userData.public_repos}</span>
                    </div>
                    <div className="profile-data-element">
                        <p>Followers</p>
                        <span>{userData.followers}</span>
                    </div>
                    <div className="profile-data-element">
                        <p>Following</p>
                        <span>{userData.following}</span>
                    </div>
                </div>

                <div className="grid gap-4 xl:grid-cols-2 xl:gap-[15%] mt-4 text-center">
                    <div className="user-data-more flex items-center gap-2">
                        <FaMapMarkerAlt className="text-gray-500" />
                        <span>{userData.location || "no locatioon"}</span>
                    </div>
                    <div className="user-data-more flex items-center gap-2">
                        <FaTwitter className="text-gray-500" />
                        <span>
                            {userData.twitter_username
                                ? `@${userData.twitter_username}`
                                : "no twitter"}
                        </span>
                    </div>
                    <div className="user-data-more flex items-center gap-2">
                        <FaLink className="text-gray-500" />
                        <a
                            href={userData.blog || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {userData.blog || "no blog"}
                        </a>
                    </div>
                    <div className="user-data-more flex items-center gap-2">
                        <FaBuilding className="text-gray-500" />
                        <span>{userData.company || "no company"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
