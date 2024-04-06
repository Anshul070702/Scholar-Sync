import React, { useState } from "react";
import { AddDetailsPopup } from "./export";
import { IoDocumentTextOutline } from "react-icons/io5";

const Card = ({ logoUrl, title, description }) => {
  const [detailsList, setDetailsList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddDetails = (details) => {
    setDetailsList([...detailsList, details]);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className=" mx-auto mt-10 overflow-hidden rounded-lg bg-white shadow-md">
      <div className="flex items-center p-4">
        {/* Document Logo */}
        <div className="mr-4 h-12 w-12 justify-center overflow-hidden rounded-full bg-gray-100 align-middle">
          {/* <img src={logoUrl} alt="Document Logo" className="object-cover w-full h-full" /> */}
          <IoDocumentTextOutline size={32} className="m-2" />
        </div>
        {/* Document Title and Description */}
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        {/* Add New Button */}
        <div className="ml-auto">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
            onClick={togglePopup}
          >
            Add New
          </button>
        </div>
      </div>
      {/* Render added details */}
      <div className="p-4">
        <ul>
          {detailsList.map((details, index) => (
            <li key={index}>
              University: {details.university}, Degree: {details.degree}, Grade:{" "}
              {details.grade}, Field of Study: {details.fieldOfStudy}, Start
              Date: {details.startDate}, End Date: {details.endDate}
            </li>
          ))}
        </ul>
      </div>
      {/* Render popup if showPopup is true */}
      {showPopup && (
        <AddDetailsPopup onClose={togglePopup} onSave={handleAddDetails} />
      )}
    </div>
  );
};

export default Card;
