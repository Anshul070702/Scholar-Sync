import React, { useState } from "react";
import PreviousPost from "./components/PreviousPosts";
import { TopicNames } from "../../../constants/collabPostData";

const ResearchForm = () => {
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
  const [detailsType, setDetailsType] = useState("upload");
  const [file, setFile] = useState(null);
  const [fileLink, setFileLink] = useState("");
  const [showTopicFilter, setShowTopicFilter] = useState(false);

  // Handles topic add (atmax 6)
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

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
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

  return (
    <div className="grid grid-cols-2">
      <div className="mx-auto max-w-[2/3] rounded-md bg-gray-100 p-6 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Enter details for your Post
        </h2>

        {/* Research Title */}
        <div className="mb-4">
          <label className="mb-2 block">Research Title</label>
          <input
            type="text"
            value={researchName}
            onChange={(e) => setResearchName(e.target.value)}
            className="block w-full rounded-md border-gray-300 px-3 py-2"
          />
        </div>

        {/* Professor Name */}
        <div className="mb-4">
          <label className="mb-2 block">Professor Name</label>
          <input
            type="text"
            value={professorName}
            onChange={(e) => setProfessorName(e.target.value)}
            className="block w-full rounded-md border-gray-300 px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block">Institute Name</label>
          <input
            type="text"
            value={instituteName}
            onChange={(e) => setInstituteName(e.target.value)}
            className="block w-full rounded-md border-gray-300 px-3 py-2"
          />
        </div>

        {/* Topics Section  */}
        <div className="mb-4">
          <label className="mb-2 block">Topics</label>
          <input
            type="text"
            value={newTopic}
            onChange={handleTopicInputChange}
            className="block w-full rounded-md border-gray-300 px-3 py-2"
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
                  className="m-1 rounded-md bg-gray-200 px-3 py-1 text-gray-800 focus:outline-none"
                  onClick={() => handleTopicAdd(filteredTopic)}
                >
                  {filteredTopic}
                </button>
              ))}
            </div>
          )}
          {/* Showing Selected topics */}
          <div className="mt-2">
            {selectedTopics.map((topic, index) => (
              <span
                key={index}
                className="text-slate-gray m-1 inline-block rounded-md bg-gray-200 px-3 py-2 text-base"
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
          <label className="mb-2 block">Stipend</label>
          <input
            type="text"
            value={stipend}
            onChange={(e) => setStipend(e.target.value)}
            className="block w-full rounded-md border-gray-300 px-3 py-2"
          />
        </div>

        {/* Duration */}
        <div className="mb-4">
          <label className="mb-2 block">Duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="block w-full rounded-md border-gray-300 px-3 py-2"
          />
        </div>

        {/* Apply By */}
        <div className="mb-4">
          <label className="mb-2 block">Apply By</label>
          <input
            type="date"
            value={applyBy}
            onChange={(e) => setApplyBy(e.target.value)}
            className="block w-full rounded-md border-gray-300 px-3 py-2"
          />
        </div>

        {/* Details */}
        <div className="mb-4">
          <label className="mb-2 block">Details</label>
          <select
            value={detailsType}
            onChange={(e) => setDetailsType(e.target.value)}
            className="block w-full rounded-md border-gray-300 px-3 py-2"
          >
            <option value="upload">File Upload</option>
            <option value="link">File Link</option>
          </select>
          {detailsType === "upload" ? (
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-2 block rounded-md border-gray-300 px-3 py-2"
            />
          ) : (
            <input
              type="text"
              value={fileLink}
              onChange={(e) => setFileLink(e.target.value)}
              className="mt-2 block w-full rounded-md border-gray-300 px-3 py-2"
              placeholder="Enter file link"
            />
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
            Submit
          </button>
        </div>
      </div>
      <div className="max-w-[1/3]">
        <PreviousPost />
      </div>
    </div>
  );
};

export default ResearchForm;
