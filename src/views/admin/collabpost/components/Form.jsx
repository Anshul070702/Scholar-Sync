import React, { useState } from "react";
import { TopicNames } from "../../../../constants/collabPostData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [researchName, setResearchName] = useState("");
  const [professorName, setProfessorName] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [newTopic, setNewTopic] = useState("");
  const [remote, setRemote] = useState(false);
  const [onSite, setOnSite] = useState(false);
  const [stipend, setStipend] = useState("");
  const [duration, setDuration] = useState("");
  const [applyBy, setApplyBy] = useState("");
  const [fileLink, setFileLink] = useState("");
  const [showTopicFilter, setShowTopicFilter] = useState(false);

  // Handles topic add (at max 6)
  const handleTopicAdd = (topic) => {
    if (topic && !selectedTopics.includes(topic) && selectedTopics.length < 6) {
      setSelectedTopics([...selectedTopics, topic]);
      setNewTopic("");
      setShowTopicFilter(false);
    }
  };

  // Topics Remove Logic
  const handleTopicRemove = (topic) => {
    setSelectedTopics(selectedTopics.filter((t) => t !== topic));
  };

  const handleTopicInputChange = (event) => {
    setNewTopic(event.target.value);
    setShowTopicFilter(event.target.value.trim() !== "");
  };

  // Removes Selected topics Topic
  const handleRemoteChange = () => {
    if (!remote) {
      setRemote(true);
      setOnSite(false);
    }
  };

  const handleOnSiteChange = () => {
    if (!onSite) {
      setOnSite(true);
      setRemote(false);
    }
  };

  const handleSubmit = () => {
    // Check if all required fields are filled
    if (
      !researchName ||
      !professorName ||
      !instituteName ||
      selectedTopics.length === 0 ||
      !stipend ||
      !duration ||
      !applyBy ||
      !fileLink
    ) {
      // If any required field is empty, show toast message to enter all details
      toast.error("Please enter all required details.");
      return;
    }

    // All details are filled, show success message
    toast.success("Your collab post has been created successfully.");

    // Reset all the entered details
    setResearchName("");
    setProfessorName("");
    setInstituteName("");
    setSelectedTopics([]);
    setNewTopic("");
    setRemote(false);
    setOnSite(false);
    setStipend("");
    setDuration("");
    setApplyBy("");
    setFileLink("");
    setShowTopicFilter(false);
  };

  return (
    <div>
      <h2 className="mb-6 text-center text-2xl font-semibold">
        Enter details for your Post
      </h2>

      {/* Research Title */}
      <div className="mb-4">
        <label className="mb-2 block">
          Research Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={researchName}
          onChange={(e) => setResearchName(e.target.value)}
          className="text-bold block w-full rounded-md border-gray-300 px-3 py-2 text-navy-500 dark:bg-gray-300"
        />
      </div>

      {/* Professor Name */}
      <div className="mb-4">
        <label className="mb-2 block">
          Professor Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={professorName}
          onChange={(e) => setProfessorName(e.target.value)}
          className="text-bold block w-full rounded-md border-gray-300 px-3 py-2 text-navy-500 dark:bg-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block">
          Institute Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={instituteName}
          onChange={(e) => setInstituteName(e.target.value)}
          className="text-bold block w-full rounded-md border-gray-300 px-3 py-2 text-navy-500 dark:bg-gray-300"
        />
      </div>

      {/* Topics Section  */}
      <div className="mb-4">
        <label className="mb-2 block">
          Topics <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={newTopic}
          onChange={handleTopicInputChange}
          className="text-bold block w-full rounded-md border-gray-300 px-3 py-2 text-navy-500 dark:bg-gray-300"
          placeholder="Start typing to filter topics (at max 6) "
        />

        {/* conditional rendering */}
        {showTopicFilter && (
          <div className="mt-2">
            {TopicNames.filter((topic) =>
              topic.toLowerCase().includes(newTopic.toLowerCase())
            ).map((filteredTopic, index) => (
              <button
                key={index}
                className="m-1 rounded-md bg-gray-200 px-3 py-1 text-gray-800 focus:outline-none "
                onClick={() => handleTopicAdd(filteredTopic)}
              >
                {filteredTopic}
              </button>
            ))}
          </div>
        )}
        {/* Showing Selected topics */}
        <div className="center mt-2 flex flex-wrap ">
          {selectedTopics.map((topic, index) => (
            <span
              key={index}
              className="text-slate-gray text-bold m-1 inline-block rounded-md bg-white px-3 py-2 text-base text-navy-500"
            >
              {topic}
              <button
                onClick={() => handleTopicRemove(topic)}
                className="ml-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                &#10005;
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Remote/Onsite */}
      <div className="mb-4">
        <div>
          <input
            type="checkbox"
            checked={remote}
            onChange={handleRemoteChange}
            className="mr-2"
          />
          <label className="mr-4">Remote</label>
          <input
            type="checkbox"
            checked={onSite}
            onChange={handleOnSiteChange}
            className="mr-2"
          />
          <label>Onsite</label>
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-2 block">
          Stipend <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={stipend}
          onChange={(e) => setStipend(e.target.value)}
          className="text-bold block w-full rounded-md border-gray-300 px-3 py-2 text-navy-500 dark:bg-gray-300"
        />
      </div>

      {/* Duration */}
      <div className="mb-4">
        <label className="mb-2 block">
          Duration <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="text-bold block w-full rounded-md border-gray-300 px-3 py-2 text-navy-500 dark:bg-gray-300"
        />
      </div>

      {/* Apply By */}
      <div className="mb-4">
        <label className="mb-2 block">
          Apply By <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          value={applyBy}
          onChange={(e) => setApplyBy(e.target.value)}
          className="text-bold block w-full rounded-md border-gray-300 px-3 py-2 text-navy-500 dark:bg-gray-300"
        />
      </div>

      {/* Details */}
      <div className="mb-4">
        <label className="mb-2 block">
          Details <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={fileLink}
          onChange={(e) => setFileLink(e.target.value)}
          className="text-bold block w-full rounded-md border-gray-300 px-3 py-2 text-navy-500 dark:bg-gray-300"
          placeholder="Enter drive link"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeButton={false}
        onClose={() => setResearchName("")}
      />
    </div>
  );
};

export default Form;
