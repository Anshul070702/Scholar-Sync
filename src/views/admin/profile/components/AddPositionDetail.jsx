import React, { useState } from "react";

const AddDetailsPopup = ({ onClose, onSave }) => {
  const [details, setDetails] = useState({
    positionOfResponsibility: "",
    title: "",
    describePOR: "",
    accomplishments: [],
    certificateLink: "",
    skillsUsed: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleAccomplishmentChange = (e, index) => {
    const newAccomplishments = [...details.accomplishments];
    newAccomplishments[index] = e.target.value;
    setDetails({ ...details, accomplishments: newAccomplishments });
  };

  const handleAddAccomplishment = () => {
    setDetails({ ...details, accomplishments: [...details.accomplishments, ""] });
  };

  const handleRemoveAccomplishment = (index) => {
    const newAccomplishments = [...details.accomplishments];
    newAccomplishments.splice(index, 1);
    setDetails({ ...details, accomplishments: newAccomplishments });
  };

  const handleSkillsChange = (e, index) => {
    const newSkills = [...details.skillsUsed];
    newSkills[index] = e.target.value;
    setDetails({ ...details, skillsUsed: newSkills });
  };

  const handleAddSkill = () => {
    setDetails({ ...details, skillsUsed: [...details.skillsUsed, ""] });
  };

  const handleRemoveSkill = (index) => {
    const newSkills = [...details.skillsUsed];
    newSkills.splice(index, 1);
    setDetails({ ...details, skillsUsed: newSkills });
  };

  const handleSave = () => {
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
              htmlFor="positionOfResponsibility"
            >
              Position of Responsibility:
            </label>
            <input
              type="text"
              name="positionOfResponsibility"
              id="positionOfResponsibility"
              className="w-full rounded border px-4 py-2"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="title"
            >
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full rounded border px-4 py-2"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="describePOR"
            >
              Describe your POR:
            </label>
            <input
              type="text"
              name="describePOR"
              id="describePOR"
              className="w-full rounded border px-4 py-2"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="accomplishments"
            >
              What did you accomplish with this POR?
            </label>
            {details.accomplishments.map((accomplishment, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  name="accomplishments"
                  className="w-full rounded border px-4 py-2 mr-2"
                  value={accomplishment}
                  onChange={(e) => handleAccomplishmentChange(e, index)}
                />
                <button
                  type="button"
                  className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600 focus:bg-red-600 focus:outline-none"
                  onClick={() => handleRemoveAccomplishment(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
              onClick={handleAddAccomplishment}
            >
              Add Accomplishment
            </button>
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="certificateLink"
            >
              Certificate Link:
            </label>
            <input
              type="text"
              name="certificateLink"
              id="certificateLink"
              className="w-full rounded border px-4 py-2"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="skillsUsed"
            >
              Skills Used:
            </label>
            {details.skillsUsed.map((skill, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  name="skillsUsed"
                  className="w-full rounded border px-4 py-2 mr-2"
                  value={skill}
                  onChange={(e) => handleSkillsChange(e, index)}
                />
                <button
                  type="button"
                  className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600 focus:bg-red-600 focus:outline-none"
                  onClick={() => handleRemoveSkill(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
              onClick={handleAddSkill}
            >
              Add Skill
            </button>
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

export default AddDetailsPopup;
