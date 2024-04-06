import React from "react";
import { FaRegBookmark } from "react-icons/fa";

const CollabPost = ({ data }) => {
  const {
    ResearchArea,
    ProfessorName,
    College,
    Topics,
    Remote,
    Stipend,
    Duration,
    Details,
    DayPosted,
    ApplyBy,
  } = data;

  // Function to open PDF file in a new window
  const openPDF = () => {
    window.open(Details, "_blank");
  };

  return (
    <div className="border-top border-r-1 mb-8 rounded-lg border-t-2 border-l-2 border-solid border-white border-opacity-40 bg-white p-6 shadow-md  backdrop-filter dark:bg-white dark:bg-opacity-5 dark:text-gray-200">
      {/* Top section */}
      <div className="mb-4">
        {/* Research Area and Save icon */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold dark:text-gray-100">
            {ResearchArea}
          </h2>
          <div className="cursor-pointer text-gray-500 hover:text-blue-500">
            <FaRegBookmark size={24} />
          </div>
        </div>
        {/* Professor Name and College Name */}
        <div className="flex">
          <p className="mr-2 text-sm text-gray-600 dark:text-gray-400">
            {ProfessorName}
          </p>
          <span className="text-sm text-gray-500">|</span>
          <p className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            {College}
          </p>
        </div>
      </div>
      {/* Topics */}
      <div className="mb-4">
        <div className="flex flex-wrap">
          {Topics.map((topic, index) => (
            <div
              key={index}
              className="mr-2 mb-2 rounded-lg bg-gray-200 py-1 px-2 text-sm text-gray-800 dark:bg-gray-600 dark:bg-opacity-20 dark:text-gray-100"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
      {/* Remote, Stipend, Duration */}
      <div className="mb-4 flex justify-between">
        <div className="flex flex-col">
          <p className="text-center text-gray-600 dark:text-gray-400">
            Remote/OnSite
          </p>
          <p className="text-center text-xl text-gray-800 dark:text-gray-300">
            {Remote ? "Remote" : "Onsite"}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-center text-gray-600 dark:text-gray-400">
            Stipend
          </p>
          <p className="text-center text-xl text-gray-800 dark:text-gray-300">
            {Stipend}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-center text-gray-600 dark:text-gray-400">
            Duration
          </p>
          <p className="text-center text-xl text-gray-800 dark:text-gray-300">
            {Duration}
          </p>
        </div>
      </div>
      {/* DayPosted, ApplyBy, ApplyNow */}
      <div className="flex items-center justify-between">
        <div className="flex">
          <p className="mx-2 text-sm text-gray-600 dark:text-gray-100">
            Posted {DayPosted}
          </p>
          <p>&bull;</p>
          <p className="mx-2 text-sm text-gray-800 dark:text-gray-100">
            Apply by {ApplyBy}
          </p>
        </div>
        <div>
          <button
            className="mr-4 rounded-md bg-blue-500 py-2 px-6 text-white hover:bg-blue-700 dark:bg-teal-400 dark:text-white dark:hover:bg-teal-300 dark:active:bg-teal-200"
            onClick={openPDF}
          >
            View Details
          </button>
          <button className="rounded-md bg-blue-500 py-2 px-6 text-white hover:bg-blue-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollabPost;
