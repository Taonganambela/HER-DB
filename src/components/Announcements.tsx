import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PushPinIcon from "@mui/icons-material/PushPin";

function Announcements() {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 flex space-x-5 p-2 rounded-md my-4">
      <div className="flex ml-auto items-center justify-between w-full">
        <div className="center-items">
          <h2 className="text-slate-600 dark:text-slate-300">
            Meeting HR Department
          </h2>
          <h6 className="text-slate-600 dark:text-slate-300  text-xs">
            Yesterday, 12:30pm
          </h6>
        </div>
        <div className="space-x-1">
          <PushPinIcon className="rotate-45 text-gray-400 w-2 h-1" />
          <MoreHorizIcon  className="text-gray-400 w-2 h-1" />
        </div>
      </div>
    </div>
  );
}

export default Announcements;
