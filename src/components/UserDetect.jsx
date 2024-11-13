import {
    FaGithubAlt,
    FaMapMarkerAlt,
    FaTwitter,
    FaLink,
    FaBuilding,
} from "react-icons/fa";

export default function UserDetect() {
    return (
        <div className="user-detect grid grid-cols-1 md:grid-cols-5 gap-4 xl:gap-8 w-full items-start text-start rounded-xl p-4 bg-white">
            <div className="left-user-box user-image-container bg-slate-500 rounded-full flex items-center justify-center w-[100px] h-[100px] md:w-[150px] md:h-[150px] mx-auto md:mx-0 xl:ml-[-1em]">
                <FaGithubAlt className="user-image w-16 h-16 md:w-24 md:h-24 p-2" />
            </div>

            <div className="right-user-box w-full grid gap-4 md:col-span-4">
                <div className="user-info-container grid grid-cols-1 md:grid-cols-3 items-start w-full">
                    <div className="flex flex-col text-center md:text-left">
                        <h2 className="username text-2xl font-semibold">
                            Bestie
                        </h2>
                        <span className="user-id opacity-70 text-sky-400">
                            @bestie
                        </span>
                    </div>
                    <div className="user-join-date text-center md:text-right text-gray-500">
                        <p>Joined:</p>
                        <p>{/* date */}</p>
                    </div>
                </div>

                <p className="font-light opacity-70 w-full mt-2 text-center md:text-left">
                    Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing
                </p>

                <div className="rounded-xl profile-data grid py-4 text-[13px] grid-cols-3 gap-[10%] mt-4  text-center">
                    <div className="profile-data-element">
                        <p>Repos</p>
                        <span>8</span>
                    </div>
                    <div className="profile-data-element">
                        <p>Followers</p>
                        <span>15</span>
                    </div>
                    <div className="profile-data-element">
                        <p>Following</p>
                        <span>5</span>
                    </div>
                </div>

                <div className="grid gap-4  xl:grid-cols-2 xl:gap-[15%] mt-4  text-center">
                    <div className="user-data-more flex items-center gap-2">
                        <FaMapMarkerAlt className="text-gray-500" />
                        <span>Location</span>
                    </div>
                    <div className="user-data-more flex items-center gap-2">
                        <FaTwitter className="text-gray-500" />
                        <span>Not Available</span>
                    </div>
                    <div className="user-data-more flex items-center gap-2">
                        <FaLink className="text-gray-500" />
                        <span>https://github.blog</span>
                    </div>
                    <div className="user-data-more flex items-center gap-2">
                        <FaBuilding className="text-gray-500" />
                        <span>@github</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
