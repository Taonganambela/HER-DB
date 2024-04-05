import { Link } from "react-router-dom";
import Announcements from "../components/Announcements";

function Announcement() {
  return (
    <div className="dark:bg-bkgSecondary dark:text-content max-h-fit pb-20 p-8 w-full ">
      <div className="flex ml-auto items-center justify-between w-full">
        <h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 ">
          Announcements
        </h1>

        <div className="mb-2">
          <Link to="/announcementCreation">
            <button className="bg-green-500 text-white h-9 w-32 rounded-md ">
              Add New
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white dark:bg-bkg rounded-md p-4 pb-10">
        <Announcements />
        <Announcements />
        <Announcements />
        <Announcements />
        <Announcements />
        <Announcements />
        <Announcements />
        <Announcements />
        <Announcements />
        <Announcements />
      </div>
    </div>
  );
}

export default Announcement;
