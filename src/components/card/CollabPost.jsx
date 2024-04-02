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
    <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
      {/* Top section */}
      <div className="mb-4">
        {/* Research Area and Save icon */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{ResearchArea}</h2>
          <div className="cursor-pointer text-gray-500 hover:text-blue-500">
            <FaRegBookmark size={24} />
          </div>
        </div>
        {/* Professor Name and College Name */}
        <div className="flex">
          <p className="mr-2 text-sm text-gray-700">{ProfessorName}</p>
          <span className="text-sm text-gray-500">|</span>
          <p className="ml-2 text-sm text-gray-700">{College}</p>
        </div>
      </div>
      {/* Topics */}
      <div className="mb-4">
        <div className="flex flex-wrap">
          {Topics.map((topic, index) => (
            <div
              key={index}
              className="mr-2 mb-2 rounded-lg bg-gray-200 py-1 px-2 text-sm text-gray-700"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
      {/* Remote, Stipend, Duration */}
      <div className="mb-4 flex justify-between">
        <div className="flex flex-col">
          <p className="text-center text-gray-600">Remote/OnSite</p>
          <p className="text-center text-xl text-gray-700">
            {Remote ? "Remote" : "Onsite"}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-center text-gray-600">Stipend</p>
          <p className="text-center text-xl text-gray-700">{Stipend}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-center text-gray-600">Duration</p>
          <p className="text-center text-xl text-gray-700">{Duration}</p>
        </div>
      </div>
      {/* DayPosted, ApplyBy, ApplyNow */}
      <div className="flex items-center justify-between">
        <div className="flex">
          <p className="mx-2 text-sm text-gray-500">Posted {DayPosted}</p>
          <p>&bull;</p>
          <p className="mx-2 text-sm text-gray-500">Apply by {ApplyBy}</p>
        </div>
        <div>
          <button
            className="mr-4 rounded-md bg-blue-500 py-2 px-6 text-white hover:bg-blue-700"
            onClick={openPDF}
          >
            View Details
          </button>
          <button className="rounded-md bg-blue-500 py-2 px-6 text-white hover:bg-blue-700">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollabPost;
