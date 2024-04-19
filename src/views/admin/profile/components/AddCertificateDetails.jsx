import React, { useState } from "react";

const AddDetailsPopup = ({ onClose, onSave }) => {
  const [details, setDetails] = useState({
    title: "",
    description: [],
    completionMonth: "",
    completionYear: "",
    link: "",
    skillsUsed: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleDescriptionChange = (e, index) => {
    const newDescription = [...details.description];
    newDescription[index] = e.target.value;
    setDetails({ ...details, description: newDescription });
  };

  const handleAddDescription = () => {
    setDetails({ ...details, description: [...details.description, ""] });
  };

  const handleRemoveDescription = (index) => {
    const newDescription = [...details.description];
    newDescription.splice(index, 1);
    setDetails({ ...details, description: newDescription });
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
        <h2 className="mb-4 text-lg font-semibold">
          Add New Certification or Course
        </h2>
        <form>
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
              htmlFor="description"
            >
              Describe your Certification:
            </label>
            {details.description.map((desc, index) => (
              <div key={index} className="mb-2 flex">
                <input
                  type="text"
                  name="description"
                  className="mr-2 w-full rounded border px-4 py-2"
                  value={desc}
                  onChange={(e) => handleDescriptionChange(e, index)}
                />
                <button
                  type="button"
                  className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600 focus:bg-red-600 focus:outline-none"
                  onClick={() => handleRemoveDescription(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
              onClick={handleAddDescription}
            >
              Add Description
            </button>
          </div>
          
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="link"
            >
              Link (Optional):
            </label>
            <input
              type="text"
              name="link"
              id="link"
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

export default AddDetailsPopup;
