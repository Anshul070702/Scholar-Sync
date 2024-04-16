import React from "react";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import cardData from "./components/cardData";
import Card from "./components/Card";

const Dashboard = () => {
  const sentences = [
    "A Centralised Research Collaboration Portal",
    "Dedicated website for promoting research",
    "Creating a network between different institutions.",
    "Discover, Connect and Collaborate...",
  ];

  const sentenceIndexRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      sentenceIndexRef.current = (sentenceIndexRef.current + 1) % sentences.length;
    }, 3000);

    return () => clearInterval(intervalId);
  }, [sentences.length]);

  return (
    <div className="mt-4">
      <h1 className="text-5xl bg-[#5f67ff] inline-block py-4 px-12 text-white rounded-tr-2xl rounded-br-2xl">Scholar Sync</h1>
      <div className="center mt-2 text-4xl text-[#5f67ff] font-bold">
        <Typewriter
          options={{
            strings: sentences,
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 100
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((data, index) => (
          <Card
            key={index}
            aim={data.aim}
            imgURL={data.image}
            text={data.text}
          />
        ))}
      </div>
    </div >
  );
};

export default Dashboard;
