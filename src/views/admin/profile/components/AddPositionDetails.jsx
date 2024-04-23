import React, { useState } from "react";
import { addPosOfRes } from "../../../../constants/api";
const AddPositionDetails = ({ onClose, onSave }) => {
  const [details, setDetails] = useState({
    positionOfResponsibility: "",
    institute: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  // const handleAccomplishmentChange = (e, index) => {
  //   const newAccomplishments = [...details.accomplishments];
  //   newAccomplishments[index] = e.target.value;
  //   setDetails({ ...details, accomplishments: newAccomplishments });
  // };

  // const handleAddAccomplishment = () => {
  //   setDetails({
  //     ...details,
  //     accomplishments: [...details.accomplishments, ""],
  //   });
  // };

  // const handleRemoveAccomplishment = (index) => {
  //   const newAccomplishments = [...details.accomplishments];
  //   newAccomplishments.splice(index, 1);
  //   setDetails({ ...details, accomplishments: newAccomplishments });
  // };

  // const handleSkillsChange = (e, index) => {
  //   const newSkills = [...details.skillsUsed];
  //   newSkills[index] = e.target.value;
  //   setDetails({ ...details, skillsUsed: newSkills });
  // };

  // const handleAddSkill = () => {
  //   setDetails({ ...details, skillsUsed: [...details.skillsUsed, ""] });
  // };

  // const handleRemoveSkill = (index) => {
  //   const newSkills = [...details.skillsUsed];
  //   newSkills.splice(index, 1);
  //   setDetails({ ...details, skillsUsed: newSkills });
  // };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(addPosOfRes, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(details), // Send the details object as JSON string in the request body
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        // Assuming the API returns a JSON response with the newly added education details
        const data = await response.json();
        console.log(data);
        // Pass the data to the onSave callback
        onSave(data);
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
    onSave(details);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-auto rounded-lg bg-white p-6 sm:w-[800px]">
        <h2 className="mb-4 text-lg font-semibold">Add New Details</h2>
        <form>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="institute"
            >
              Institute Name:
            </label>
            <input
              type="text"
              name="institute"
              id="institute"
              className="w-full rounded border px-4 py-2"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="positionOfResponsibility"
            >
              Describe your POR:
            </label>
            <input
              type="text"
              name="positionOfResponsibility"
              id="positionOfResponsibility"
              className="w-full rounded border px-4 py-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPositionDetails;
