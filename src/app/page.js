"use client"
import { useState } from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function Home() {
  const [addedCheckIns, setAddedCheckIns] = useState([]);

  const handleAddCheckInSubmit = (title, imageUrl) => {
    const newCheckIn = {
      title,
      date: new Date(),
      ownerName: "Syed Ahmad",
      imageSrc: imageUrl,
    };
    setAddedCheckIns((prevCheckIns) => [newCheckIn, ...prevCheckIns]);
  };

  return (
    <>
      <Navbar />
      <Hero onAddCheckIn={handleAddCheckInSubmit} />
      <Projects checkIns={addedCheckIns} onAddCheckIn={handleAddCheckInSubmit} />
    </>
  );
}
