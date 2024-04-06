import React, { useState } from "react";
import {
  Education,
  Projects,
  Position,
  WorkExperience,
  Achievements,
  Certifications,
} from "./components/export";

const Card = () => {
  const [selectedSection, setSelectedSection] = useState("Education");

  const renderSelectedSection = () => {
    switch (selectedSection) {
      case "Education":
        return (
          <Education
            title={"Add Education detail"}
            description={"Your school / college details"}
          />
        );
      case "Projects":
        return <Projects />;
      case "Position":
        return <Position />;
      case "Work Experience":
        return <WorkExperience />;
      case "Achievements":
        return <Achievements />;
      case "Certifications":
        return <Certifications />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="m-4">
        collab section Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quod placeat quam cupiditate quos omnis eveniet sit soluta voluptatum,
        magnam adipisci necessitatibus aperiam non alias, pariatur odio harum
        provident blanditiis nostrum excepturi autem, vero tempora saepe.
        Debitis natus consectetur tempora, at dolorum temporibus amet nulla
        ipsam. Atque quaerat illum numquam unde, explicabo necessitatibus
        possimus quia beatae ex totam doloremque dolorem quam esse ipsa
        molestias fugiat, ad neque sit?
      </div>
      <div className=" mx-auto mt-10 overflow-hidden rounded-lg bg-white shadow-md">
        <div className="bg-gray-100 p-6">
          <div className=" justify-end">
            {/* Header and buttons */}
            <div className="flex items-center">
              <div className="text-black mr-4 h-12 w-12 rounded-full bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  srcset=""
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Person's Name</h2>
                <p className="text-sm">Role</p>
                <p className="text-sm">Education Detail</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="mx-2 rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">
                Edit
              </button>
              <button className="mx-2 rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">
                Your Resume
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 px-6 py-4">
          {/* Section buttons */}
          <div className="mb-4 flex justify-between">
            <button
              onClick={() => setSelectedSection("Education")}
              className=" text-black rounded px-4 py-2  focus:outline-none"
            >
              Education
            </button>
            <button
              onClick={() => setSelectedSection("Projects")}
              className=" text-black rounded px-4 py-2  focus:outline-none"
            >
              Projects
            </button>
            <button
              onClick={() => setSelectedSection("Position")}
              className=" text-black rounded px-4 py-2  focus:outline-none"
            >
              Position
            </button>
            <button
              onClick={() => setSelectedSection("Work Experience")}
              className=" text-black rounded px-4 py-2  focus:outline-none"
            >
              Work Experience
            </button>
            <button
              onClick={() => setSelectedSection("Achievements")}
              className=" text-black rounded px-4 py-2  focus:outline-none"
            >
              Achievements
            </button>
            <button
              onClick={() => setSelectedSection("Certifications")}
              className=" text-black rounded px-4 py-2  focus:outline-none"
            >
              Certifications
            </button>
          </div>

          {/* Render selected section */}
        </div>
        {renderSelectedSection()}
      </div>
    </>
  );
};

export default Card;
