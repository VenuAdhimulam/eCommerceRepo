import React from "react";
import Announcement from "../components/Announcemnet";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
