import { Link } from "react-router-dom";

function AnnouncementCreation() {
  return (
    <div className="dark:bg-bkgSecondary dark:text-content h-content p-8 w-full">
      <h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 ">
        Announcements
      </h1>
      <div className="bg-white rounded-md dark:bg-slate-900 pb-28">
        <div className="bg-[#549B69] text-white py-2 text-md font-semibold rounded-t-lg flex w-full justify-evenly">
          <h2 className="text-left w-full p-2 text-xl">
            Announcement Creation
          </h2>
        </div>

        <div className="flex justify-evenly dark:bg-slate-900 text-center h-40">
          <div className="flex-[0.25] text-left py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 mt-4">
            <label
              htmlFor="countries"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Department intended to send to:
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="select Department " selected>
                Select department
              </option>
              <option value="IT">IT</option>
              <option value="Human Resource">Human Resource</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Mobile Money">Mobile Money</option>
            </select>
          </div>

          <div className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 ">
            <div className="flex-[0.25] text-left py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 mt-4">
              <label
                htmlFor="countries"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Section intended to send to:
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="select Department" selected>
                  select Section
                </option>
                <option value="Intergretion">Intergretion</option>
                <option value="Development">Development</option>
                <option value="system analyst">system analyst</option>
              </select>
            </div>
          </div>
        </div>

        <div className=" dark:bg-slate-900 text-center rounded-b-lg ">
          <label
            htmlFor="countries"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white pl-4 ml-64 text-left "
          >
            Enter Message
          </label>
          <textarea
            className="h-60 w-[1050px] border-2 rounded-md border-gray-400 mx-auto p-2 outline-gray-400 focus-gray-400"
            placeholder="  Should not be more than 400 words"
          />
        </div>
      </div>
      <div className="flex ml-auto items-center justify-between w-full mt-8">
        <div>
          <Link to="/announcements">
            <button className="bg-[#549B69] text-sm text-white h-14 w-[200px] rounded-md ">
              Back
            </button>
          </Link>
        </div>
        <div>
          <button className="bg-[#549B69] text-sm text-white h-14 w-[200px] rounded-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementCreation;
