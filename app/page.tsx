"use client";

import Container from "@/components/ui/container";
import { useState, useEffect } from "react"; // Import useState and useEffect

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define an array of image URLs
  const images = [
    {
      url: "https://pwaniteknowgalz.org/wp-content/uploads/2023/02/women-in-tech-1.jpeg",
    },
    {
      url: "https://pwaniteknowgalz.org/wp-content/uploads/2023/02/women-in-tech-1.jpeg",
    },
    {
      url: "https://pwaniteknowgalz.org/wp-content/uploads/2023/02/women-in-tech-1.jpeg",
    },
    {
      url: "https://pwaniteknowgalz.org/wp-content/uploads/2023/02/women-in-tech-1.jpeg",
    },
  ];

  console.log(images[currentIndex].url);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // // State to keep track of the current image index
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // // Function to change the background image
  // const changeBackgroundImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // // Use useEffect to change the background image at a specific interval
  // useEffect(() => {
  //   const intervalId = setInterval(changeBackgroundImage, 3000); // Change image every 5 seconds (adjust as needed)

  //   // Clean up the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
        className="w-87 rounded-2xl bg-center bg-cover duration-500"
      ></div>
    </div>
  );
}
