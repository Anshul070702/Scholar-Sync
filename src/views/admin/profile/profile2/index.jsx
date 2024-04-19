import React, { useState } from 'react';

const ProfileComponent = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', content: <ProfileDetails /> },
    { id: 'experience', name: 'Experience', content: <Experience /> },
    { id: 'projects', name: 'Project/Experience', content: <ProjectDetails /> },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-col items-center  col-span-1 h-full overflow-y-auto xl:col-span-1 2xl:col-span-2">
      {/* Upper Part */}
      <div className=" p-4  w-full md:w-2/3  flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/zr5Mdn9/premium-photo-1670282393309-70fd7f8eb1ef-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
            alt="Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div className='ml-5'>
            <p className="text-lg font-semibold">Person Name</p>
            <p className="text-sm text-gray-600">College Name</p>
            <p className="text-sm text-gray-600">Location</p>
          </div>
        </div>
        {/* Additional content can be added here on the right side */}
      </div>

      {/* Lower Part */}
      <div className="p-4 w-full md:w-2/3 ">
        <div className="flex justify-between mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-4 py-2 rounded-md mt-8 ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Render the selected tab's content */}
        <div className=" rounded-md  p-4">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

const ProfileDetails = () => {
  return (
    <div>
      <p className="text-lg font-semibold mb-2">Profile Details</p>
      <div className="bg-white rounded-md shadow-md p-4">
        <p className="mb-2">
          <span className="font-semibold">Department:</span> Computer Science
        </p>
        <p className="mb-2">
          <span className="font-semibold">Domain:</span> Artificial Intelligence
        </p>
        <p className="mb-2">
          <span className="font-semibold">Skills:</span> Python, Machine Learning
        </p>
        <p className="mb-2">
          <span className="font-semibold">Expertise:</span> Deep Learning, NLP
        </p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div>
      <p className="text-lg font-semibold mb-2">Experience Details</p>
      <div className="bg-white rounded-md shadow-md p-4">
        <p className="mb-2">
          <span className="font-semibold">Company Name:</span> Computer Science Corporation
        </p>
        <p className="mb-2">
          <span className="font-semibold">Certificate Link:</span> "https://www.example.com"
        </p>
        <p className="mb-2">
          <span className="font-semibold">Start Date:</span> 02/02/2020
        </p>
        <p className="mb-2">
          <span className="font-semibold">End Date:</span> 02/02/2021
        </p>
      </div>
    </div>
  );
};

const ProjectDetails = () => {
  return (
    <div>
      <p className="text-lg font-semibold mb-2">Project/ Details</p>
      <div className="bg-white rounded-md shadow-md p-4">
        <p className="mb-2">
          <span className="font-semibold">Title:</span> NLP Project for Sentiment Analysis
        </p>
        <p className="mb-2">
          <span className="font-semibold">Description:</span> Artificial Intelligence Project with Python and ML models for NLP tasks like Sentiment Analysis, Text Summarization, etc.
        </p>
        <p className="mb-2">
          <span className="font-semibold">Project Link:</span> "https://www.example.com"
        </p>
        <p className="mb-2">
          <span className="font-semibold">Skills:</span> Python, Machine Learning
        </p>
      </div>
    </div>
  );
};

export default ProfileComponent;
