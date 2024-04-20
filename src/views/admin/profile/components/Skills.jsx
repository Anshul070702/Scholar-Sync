import React, { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { addSkill } from "../../../../constants/api";

const Card = ({ logoUrl, title, description }) => {
  const [detailsList, setDetailsList] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [newDetails, setNewDetails] = useState({
    skill: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleAddDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(addSkill, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newDetails), // changed details to newDetails
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
    if (editIndex !== null) {
      const updatedDetailsList = [...detailsList];
      updatedDetailsList[editIndex] = newDetails;
      setDetailsList(updatedDetailsList);
      setEditIndex(null);
    } else {
      setDetailsList([...detailsList, newDetails]);
    }
    setShowInput(false);
    setNewDetails({ skill: "" });
  };

  const handleEditDetails = (index) => {
    setNewDetails(detailsList[index]);
    setEditIndex(index);
    setShowInput(true);
  };

  const handleDeleteDetails = (index) => {
    const updatedDetailsList = [...detailsList];
    updatedDetailsList.splice(index, 1);
    setDetailsList(updatedDetailsList);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="mx-auto mt-10 overflow-hidden rounded-lg bg-white shadow-md">
      <div className="flex items-center p-4">
        <div className="mr-4 h-12 w-12 justify-center overflow-hidden rounded-full bg-gray-100 align-middle">
          <IoDocumentTextOutline size={32} className="m-2" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="ml-auto">
          {!showInput ? (
            <button
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
              onClick={() => setShowInput(true)}
            >
              Add New
            </button>
          ) : (
            <button
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:bg-green-600 focus:outline-none"
              onClick={handleAddDetails}
            >
              {editIndex !== null ? "Update" : "Save"}
            </button>
          )}
        </div>
      </div>
      {showInput && (
        <div className="p-4">
          <form>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="skill"
              >
                Skill:
              </label>
              <input
                type="text"
                name="skill"
                id="skill"
                className="w-full rounded border px-4 py-2"
                onChange={handleChange}
                value={newDetails.skill}
              />
            </div>
          </form>
        </div>
      )}
      <div className="p-4">
        <ul>
          {detailsList.map((details, index) => (
            <li key={index} className="m-5">
              {details.skill}
              <div className="my-8 flex">
                <button
                  className="text-black mr-2 rounded bg-yellow-100 px-2 py-1 hover:bg-yellow-200 focus:bg-yellow-200 focus:outline-none"
                  onClick={() => handleEditDetails(index)}
                >
                  Edit
                </button>
                <button
                  className="text-black rounded bg-red-100 px-2 py-1 hover:bg-red-200 focus:bg-red-200 focus:outline-none"
                  onClick={() => handleDeleteDetails(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
